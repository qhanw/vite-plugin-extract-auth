import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import esbuild from 'esbuild';
import trans from './trans';

import {
  validKey,
  path2key,
  validPath,
  getSpecifiedRouteIndex,
} from './util/node';

import { getFileNameOrFileDir } from './util/helper';
import { readFileContent, scanDir } from './util/scan';

import type { AuthTreeNode, AuthRoute, Options } from './typings';

/** 忽略不涉及权限的配置路由 */
const ignoreAuth = (route: AuthRoute, cfg: Options) => {
  const { path, redirect, children, disableAuth } = route;

  // 过滤不需要上传的路由路径，根据配置中的routeFilterRules
  const isFilter = cfg.routeFilterRules?.some((c: string) => path.includes(c));

  return (
    isFilter ||
    !path ||
    redirect ||
    // children?.length ||
    disableAuth
  );
};

// 合并权限配置
const combinePaths = (
  data: AuthTreeNode[] | undefined,
  key: string,
  path: string,
) => {
  if (!data?.length) return { path, json: undefined };

  const idx = data.findIndex((c) => c.key === key && c.type === 'route');

  if (idx >= 0) {
    return {
      path: [path, data[idx].path].join(','),
      json: [...data.slice(0, idx), ...data.slice(idx + 1)],
    };
  }
  return { path, json: data };
};

export default function transRoutes(cfg: Options) {
  const filePath = cfg.entry + '.ts';

  if (!existsSync(filePath)) return [];

  const text = readFileSync(filePath, 'utf8');
  const { code } = esbuild.transformSync(text, { loader: 'ts', minify: true });
  const jsonText = /\[\{.*\}\];/.exec(code)?.[0];
  const json = new Function('return ' + jsonText)();

  const parse = (
    routes: AuthRoute[],
    { pName, pPath }: { pName?: string; pPath?: string } = {},
  ): AuthTreeNode[] => {
    return (routes || []).reduce((prev, curr) => {
      // 忽略 redirect、空path、及权限设置为 false 的路由
      // curr.ignoreMenuPathAuthority: 忽略路由处理，忽略后，该路由以及路由下设置，不加入到权限资源树中
      if (ignoreAuth(curr, cfg)) return prev;

      // 校验path有效性
      validPath(curr.path);

      let { element } = curr;

      const { path, children, name } = curr;

      // 以点分隔的全路径文件名及完整路由路径
      const full = {
        name: pName ? [pName, name].join('.') : name,
        path: pPath && path.startsWith('/') ? path : [pPath, path].join('/'),
      };

      // 忽略path=/第一级菜单
      if (path !== '/') {
        // 对于相同路径菜单做特殊处理
        if (!element && children) {
          const specialRouteIndex = getSpecifiedRouteIndex(children, curr);

          const specialRoute = children[specialRouteIndex];

          if (specialRoute) {
            element = specialRoute.element;
            children.splice(specialRouteIndex, 1);
          }
        }

        // 生成权限 KEY 并校验 KEY值是否可用
        const key = validKey(curr.authKey || path2key(full.path));

        let childAuth: AuthTreeNode[] | undefined;

        // 当路由没有子路由时，获取当前路由对应文件夹下的权限文件，并提取权限内容绑定到权限资源树上。
        // 当子路由时存在时，继续遍历路由并生成路由权限
        if (children?.length) {
          childAuth = parse(children, {
            pName: full.name,
            pPath: full.path,
          });
        } else {
          const currPath = join(cfg.cwd, 'src/pages/', element!);
          const { fileDir } = getFileNameOrFileDir(currPath);

          // 使用单个的权限配置文件
          const content = readFileContent(join(fileDir, 'auth.json'));
          const apiPrefix = cfg.apiPrefix;

          if (content) {
            childAuth = trans({ data: content, apiPrefix });
          } else {
            const collection = scanDir(join(fileDir, 'auth'))?.map(
              (filePath) => {
                const fc = readFileContent(filePath);
                return trans({ data: fc, apiPrefix });
              },
            );

            childAuth = collection?.flat(1);
          }
        }

        // 将配置文件中的权限API配置与路由页面进行合并
        const { path: p, json } = combinePaths(childAuth, key, path);

        const authTree: AuthTreeNode = {
          name,
          key,
          type: 'route',
          path: p,
          hidden: curr.hideInMenu,
          icon: curr.icon,
          children: json,
        };

        prev.push(authTree);
      } else {
        const res = parse(children!, {
          pName: full.name,
          pPath: full.path,
        });
        prev = [...prev, ...res];
      }
      return prev;
    }, [] as AuthTreeNode[]);
  };

  // return [];
  return parse(json);
}
