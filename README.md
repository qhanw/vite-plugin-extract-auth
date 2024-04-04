# vite-plugin-extract-auth

[![NPM version](https://img.shields.io/npm/v/vite-plugin-extract-auth.svg?style=flat)](https://npmjs.org/package/vite-plugin-extract-auth)

## 介绍
该权限方案是基于路由配置的半自动化生成的权限资源配置方案，方案将权限资源分为三大类型即：路由权限、组件权限、接口权限。

- 路由权限：即由前端路部分，一般根据路由配置地址自动生成权限`key`与权限配置`json`（当然我们也可以自行定义权限`key`，不过不建议这么做。）
- 组件权限：即页面内部组件部分，如按钮、卡片等其它子组件模块我们统称为组件权限，这部分需要在对应的路由模块下手动配置。
- 接口权限：即仅针对接口所配置的权限，大部分情况下，其实用不到该配置，该部分同组件权限一样，也需在对应的路由模块下手动配置。

由手动配置的权限，会经过本插件自动合并到对应的路由权限下，并生成最终的权限资源。

## 权限配置

**类型定义**
```ts
export type AuthTreeNode = {
   /** 权限名称 */
  name: string;
  /** 权限KEY */
  key: string;
  authKey?: string;
   /** 权限类型 */
  type?: 'route'| 'component' | 'api';
  /** 权限对应路径 组件权限可以没有 path */
  path?: string | string[];
  /** 接口前缀 */
  apiPrefix?: string; 
  /** 路由权限是否隐藏 */
  hidden?: boolean;
  /** 路由菜单图标 */
  icon?: string;
  /** 数据权限 */
  haveData?: boolean;
  // 子权限
  children?: AuthTreeNode[];
};
```

在路由所对应的页面组件下新建`auth.json`文件，并按以下代进行码配置：
```json
[
  {
    "name": "B1",
    "key": "user-button",
    "type": "component",
    "path": "/api/xx/xx,/api/xxxx/xxx11111111"
  },
  {
    "name": "B2",
    "type": "component",
    "key": "user-button",
    "path": [
      "/api/xx/xx",
      "/api/xxxx/xxx123123"
    ]
  }
]
```

## Usage

Install

```bash
pnpm add --D vite-plugin-extract-auth
```

Configure in `vite.config.ts`,

```ts
export default defineConfig({
  plugins: [extractAuth()],
  ...
});
```

## Options

| 属性             | 说明               | 类型     | 默认值                                      |
| :--------------- | :----------------- | :------- | :------------------------------------------ |
| routerPath       | 路由配置位置       | string   | config/routers                              |
| routeFilterRules | 过滤未配置权限页面 | string[] | ["exception", "error", "404", "403", "500"] |
| appKey           | 应用 KEY           | string   |                                             |
| apiPrefix        | 权限接口前缀       | string   | ''                                          |



## 自动提取菜单配置

```ts
{
  // 忽略根据 component 对应文件的自动权限提取
  "ignoreComponentPathAuthority": true,
  // 该路由不设置权限
  "authority": false,
}
```

## 权限资源示例
```json
[
  {
    "name": "dashboard",
    "key": "DASHBOARD",
    "type": "route",
    "path": "/dashboard",
    "icon": "i-menu:dashboard",
    "children": [

      {
        "name": "D1",
        "key": "DASHBOARD:D1",
        "type": "route",
        "path": "d1",
        "children": [
          {
            "name": "B1",
            "key": "DASHBOARD:B1:BUTTON",
            "type": "component",
            "path": "/api/xx/xx,/api/xxxx/xxx"
          },
          {
            "name": "B2",
            "type": "component",
            "key": "DASHBOARD:B2:BUTTON",
            "path": "/api/xx/xx,/api/xxxx/x"
          }
        ]
      },

    ]
  },
]
```

## LICENSE

MIT
