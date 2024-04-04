import { logWarn, pathToStr, cleanFields } from './util/helper';
import { validKey, validPath, path2key } from './util/node';

import type { AuthJson, AuthTreeNode } from './typings';

// 解析权限节点数据
type ParseAuth = { apiPrefix?: string; auth: AuthJson };

// 解析权限数据
const parseAuth = ({ apiPrefix, auth }: ParseAuth): AuthTreeNode => {
  let path = auth.path ? pathToStr(auth.path) : undefined;

  const key = validKey(auth.authKey || auth.key || path2key(path));

  if (!auth.authKey && !auth.key) {
    logWarn(
      `[WARN]: 权限配置项【${JSON.stringify(auth)}】没有手动传【key】，这是不被期望的！！！`,
    );
  }

  // 优先采用配置项中配置的 apiPrefix
  apiPrefix = auth.apiPrefix ?? apiPrefix;

  // 补全接口地址前缀
  if (path && apiPrefix) {
    // 补全接口前缀斜杠
    if (!apiPrefix.startsWith('/')) {
      apiPrefix = '/' + apiPrefix;
    }

    path = path
      .split(',')
      .map((c) => {
        // 判断地址是否已包含前缀
        const p = c.startsWith(apiPrefix!) ? c : [apiPrefix, c].join('/');
        // 返回时清理地址中出现的双斜杠以及地址尾部的斜杠
        return p.replace(/\/+/g, '/').replace(/\/$/, '');
      })
      .join(',');
  }

  // 校验 path有效性
  if (path) validPath(path);

  const type = auth.type || (path ? 'api' : 'component');

  return { ...auth, type, key, path };
};

type ParseGroup = { data?: AuthJson[]; apiPrefix?: string };

// 解析分组数据
export default ({ apiPrefix, data }: ParseGroup): AuthTreeNode[] => {
  if (!data) return [];

  const parse = (data: AuthJson[]): AuthTreeNode[] => {
    return data.reduce((prev, curr: AuthJson) => {
      const { children } = curr;

      const authData = parseAuth({ apiPrefix, auth: curr });

      /** 添加 cleanFields，并判断 Object.keys(authTreeSources).length，防止出现 authData 为 null, children 为 undefined 的情况 */
      const authTreeSources = cleanFields<AuthTreeNode>({
        ...(authData ?? {}),
        children: children?.length ? parse(children) : undefined,
      });

      if (Object.keys(authTreeSources).length) {
        prev.push(authTreeSources);
      }

      return prev;
    }, [] as AuthTreeNode[]);
  };

  return parse(data);
};
