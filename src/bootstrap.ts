import { exit } from './util/helper';

import { logError, detectUnique, cleanFields } from './util/helper';

import transRoutes from './transRoutes';

import type { AuthTreeNode, Options } from './typings';

/** 生成权限树 */
export default function (opts: Options): AuthTreeNode[] | void {
  // 如果未配置权限路由数据则直接返回为空
  if (!opts.routes?.length) return [];
  try {
    const options: Required<Options> = {
      /** 默认参数 */
      apiPrefix: '', // 接口前缀
      routeFilterRules: ['404', '403', '500', '*'],
      /** 业务传入 */
      ...opts,
    };

    const data = cleanFields([...transRoutes(options)]);

    const map = detectUnique(data);

    [...map.entries()].forEach(([key, count]) => {
      if (count > 1)
        logError(
          `【ERROR】权限 key【${key}】重复【${count}】次，请保持权限 key 的唯一性！！！`,
        );
    });

    return data;
  } catch (e) {
    return exit(e);
  }
}
