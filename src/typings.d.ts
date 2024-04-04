export type AuthRoute = {
  /** 路由名称 */
  name: string;
  path: string;
  icon?: string;
  element?: string;
  children?: AuthRoute[];
  /** 路由是否在菜单栏里隐藏 */
  hideInMenu?: boolean;
  redirect?: string;

  authKey?: string; // 手动配置的 key
  disableAuth?: boolean; // 禁当前页及其后代权限生成
};

export type AuthTreeNode = {
  /** 权限key */
  key: string;
  /** 权限名 */
  name: string;
  /** 权限类型 */
  type?: string;
  /** 权限对应路径 组件权限可以没有path */
  path?: string;
  /** 路由权限是否隐藏 */
  hidden?: any;
  /** 路由菜单图标 */
  icon?: string;
  /** 数据权限 */
  haveData?: boolean;
  /** 依赖的额外权限 */
  // authority: string[];
  children?: AuthTreeNode[];
};

export type AuthJson = AuthTreeNode & { apiPrefix?: string; authKey?: string };

export type ExtractAuthOptions = {
  /**
   * 应用key
   */
  appKey: string;
  /**
   * 路由资源数据
   * @default []
   */
  routes: AuthRoute[];
  /**
   * 过滤未配置权限页面
   * @default ['exception', 'error', '404', '403', '500', 'DS_Store']
   */
  routeFilterRules?: string[];
  /**
   * 接口权限前缀
   * @default ''
   */
  apiPrefix?: string;
};

export type Options = { cwd: string } & ExtractAuthOptions;
