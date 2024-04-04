import { createHash } from 'node:crypto';
import type { AuthRoute } from '../typings';

const md5 = (data: string) => createHash('md5').update(data).digest('hex');

/**
 * 通过路径path得到key
 * @param {string} path
 * @returns string
 */
export const path2key = (path?: string): string => {
  let key = '';
  if (!path) return key;

  key = path.replace(/^\//, '').replace(/\//g, ':');

  if (/,/.test(key)) {
    const tmpKeys = key.split(',');
    const first = tmpKeys[0];
    return [first, md5(path)].join(':').toUpperCase();
  }

  return key.toUpperCase().replace(/-/g, '_');
};

/**
 * 获取指定路由
 */
export const getSpecifiedRouteIndex = (
  routes: AuthRoute[],
  route: AuthRoute,
): number => {
  for (let i = 0; i < routes.length; i += 1) {
    const item = routes[i];
    if (
      item.path === route.path /* && item.cName === route.cName */ &&
      item.hideInMenu
    ) {
      return i;
    }
  }
  return -1;
};

/**
 * 校验key
 * 不长于128
 * @returns string
 */
export const validKey = (key: string): string => {
  if (key.length > 128) {
    throw new Error(`异常：key【${key}】长度超过限制(128)`);
  }
  return key;
};

/**
 * 校验path
 * 不长于10000
 * @returns string
 */
export const validPath = (path: string): string => {
  if (path.length > 10000) {
    throw new Error(`异常：path【${path}】长度超过限制(10000)`);
  }
  return path;
};
