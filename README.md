# vite-plugin-extract-auth

## 参考文档

[![NPM version](https://img.shields.io/npm/v/vite-plugin-extract-auth.svg?style=flat)](https://npmjs.org/package/vite-plugin-extract-auth) [![NPM downloads](http://img.shields.io/npm/dm/vite-plugin-extract-auth.svg?style=flat)](https://npmjs.org/package/vite-plugin-extract-auth)

## Install

```bash
$ pnpm i
```

```bash
$ pnpm dev
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

## Example
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
];
```

## LICENSE

MIT
