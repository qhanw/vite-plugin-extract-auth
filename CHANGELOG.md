## [2.1.8](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.6...v2.1.8) (2022-10-24)

## [2.1.7](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.6...v2.1.7) (2022-10-24)

## [2.1.6](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.5...v2.1.6) (2022-10-24)

## [2.1.5](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.4...v2.1.5) (2021-12-27)

### Bug Fixes

- path 字段对数组的支持 ([d2adac8](https://github.com/qhanw/umi-plugin-extract-auth/commit/d2adac8ded94bba6a0f168fe641090f1b5cd8ff6))

## [2.1.4](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.3...v2.1.4) (2021-11-23)

### Bug Fixes

- isFile 手误 ([c13fb5a](https://github.com/qhanw/umi-plugin-extract-auth/commit/c13fb5a424d8bfd118edae62106bb1a70b0e1050))

## [2.1.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.2...v2.1.3) (2021-11-22)

## [2.1.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.1...v2.1.2) (2021-11-22)

### Performance Improvements

- 优化接口前缀参数配置 ([fcc7f52](https://github.com/qhanw/umi-plugin-extract-auth/commit/fcc7f52ca68f7e937a334a9b43e665e72455e0c1))

## [2.1.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.1.0...v2.1.1) (2021-11-19)

### Bug Fixes

- 修复/src/auth/\*.json 的权限读取路径问题 ([33a5f71](https://github.com/qhanw/umi-plugin-extract-auth/commit/33a5f71ee4cae0358f949258155b994162c1f6c0))

# [2.1.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v2.0.0-beta...v2.1.0) (2021-11-18)

### Bug Fixes

- 修复 win 环境编译问题 ([ac7d329](https://github.com/qhanw/umi-plugin-extract-auth/commit/ac7d32920e41621f8adf96cf2040217066f4d5f1))
- cc-ae 测试修复：修复对组件权限文件名的检测逻辑 && 一些简单优化 ([0957540](https://github.com/qhanw/umi-plugin-extract-auth/commit/09575408d80fc5863ef6b5c45779a57db141dd7a))

### Features

- 调整部分提示文案 ([5bb25ee](https://github.com/qhanw/umi-plugin-extract-auth/commit/5bb25ee3b3664bc60000a686fe2ea068540e8c2b))
- 新加权限名称从国际化中获取并优化部分代码 ([a661749](https://github.com/qhanw/umi-plugin-extract-auth/commit/a661749c50f1b26a9da11c4de5fc4cda14c5cb7a))
- 修改对权限文件名的支持，建议改为[pageName].json ([c09a55d](https://github.com/qhanw/umi-plugin-extract-auth/commit/c09a55daf767444eb1ba55e594426fc9284b5216))
- 移除命令机制 ([ddecfcd](https://github.com/qhanw/umi-plugin-extract-auth/commit/ddecfcda6ff40f2025268b9b78a382caa98cbe0d))
- edu-ae 自测修复：修复对子组件和权限文件的查找 && 一些简单优化 ([f770b19](https://github.com/qhanw/umi-plugin-extract-auth/commit/f770b191235ccd624c0299c8e637084a57ab0ff5))

# [2.0.0-beta](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.5.5...v2.0.0-beta) (2021-10-25)

### Features

- 2.0.0-beta ([1b6c54b](https://github.com/qhanw/umi-plugin-extract-auth/commit/1b6c54befbf83a0b9b792507256131c7ed24426f))
- 查重、校验 key 与 path 长度（key: 128, path:10000） ([cbefb7c](https://github.com/qhanw/umi-plugin-extract-auth/commit/cbefb7c09b708b4ed938bd2061ca0e8e452fcc9f))
- 对没有手动传`key`的非路由权限项给予警告 && 关闭对相同的`component`对应的权限文件警告 ([1ac0fae](https://github.com/qhanw/umi-plugin-extract-auth/commit/1ac0fae1fc6c1443196797b807a6dbd268e2739c))
- 和老版本保持一致：route 的节点即使没有`children`也保持`children`为`[]` ([6d27d89](https://github.com/qhanw/umi-plugin-extract-auth/commit/6d27d89f7f9be55ca2d4805da293009d62623881))
- 统一权限优化处理 ([0633983](https://github.com/qhanw/umi-plugin-extract-auth/commit/063398353b1612c45e697a7af0b075ec58b73b13))
- 修复一些自查的问题 && 忽略/authorize 路由权限提取 ([c6d650d](https://github.com/qhanw/umi-plugin-extract-auth/commit/c6d650d706202dffba5fb2cd3d31d9d26b6dd50b))

## [1.5.5](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.5.4...v1.5.5) (2021-08-16)

## [1.2.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.1.1...v1.2.1) (2020-09-28)

## [1.5.4](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.5.3...v1.5.4) (2021-08-10)

## [1.5.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.5.2...v1.5.3) (2021-08-10)

## [1.5.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.5.1...v1.5.2) (2021-08-10)

## [1.5.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.5.0...v1.5.1) (2021-08-10)

# [1.5.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.8...v1.5.0) (2021-08-10)

## [1.4.8](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.7...v1.4.8) (2021-08-10)

## [1.4.7](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.6...v1.4.7) (2021-08-10)

## [1.4.6](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.5...v1.4.6) (2021-08-10)

## [1.4.5](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.4...v1.4.5) (2021-08-10)

## [1.4.4](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.3...v1.4.4) (2021-08-10)

## [1.4.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.2...v1.4.3) (2021-08-10)

## [1.4.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.1...v1.4.2) (2021-08-10)

## [1.4.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.4.0...v1.4.1) (2021-08-10)

# [1.4.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.3.1...v1.4.0) (2021-08-10)

## [1.3.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.3.0...v1.3.1) (2021-02-22)

# [1.3.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.3.0-alpha.1...v1.3.0) (2021-02-22)

# [1.3.0-alpha.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.3.0-alpha.0...v1.3.0-alpha.1) (2021-02-03)

# [1.3.0-alpha.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.2.5...v1.3.0-alpha.0) (2021-02-02)

### Features

- 移除插件上传功能 ([af7b441](https://github.com/qhanw/umi-plugin-extract-auth/commit/af7b44156b815e69538d8d0dbd673838117b38be))
- 移除插件上传功能 ([11bd468](https://github.com/qhanw/umi-plugin-extract-auth/commit/11bd468e7d78aaf97fcd332c306e794bda65f808))

## [1.2.5](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.2.3...v1.2.5) (2021-01-25)

## [1.2.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.2.2...v1.2.3) (2020-10-21)

## [1.2.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.2.1...v1.2.2) (2020-10-19)

## [1.2.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.1.1...v1.2.1) (2020-09-28)

### Reverts

- Revert "1.1.1" 代码应合到umi@2.x ([768fa3f](https://github.com/qhanw/umi-plugin-extract-auth/commit/768fa3f962fce0e73e070398c959e5dffd340a50))

## [1.1.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.1.0...v1.1.1) (2020-06-09)

### Features

- 添加路由关闭权限配置与调整权限 model 目录 ([6d03cae](https://github.com/qhanw/umi-plugin-extract-auth/commit/6d03caeb16cdb348d1b5519b731f58ac7a512d80))

# [1.1.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v1.0.0...v1.1.0) (2020-06-08)

### Features

- add mp-auth model ([697e4c4](https://github.com/qhanw/umi-plugin-extract-auth/commit/697e4c40ff9337a12bc0d06caea6f247f8c52358))

# [1.0.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.3.4...v1.0.0) (2020-06-02)

## [0.3.4](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.3.3...v0.3.4) (2020-05-22)

## [0.3.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.3.2...v0.3.3) (2020-04-07)

### Features

- 调整 outputFile 为不可外部更改 ([f6d86ce](https://github.com/qhanw/umi-plugin-extract-auth/commit/f6d86cec27e0e9cc47e299a95199a3d74205ef82))

## [0.3.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.3.1...v0.3.2) (2020-03-31)

### Features

- 上传权限配置前，将配置写入.umi/auth.config.json ([b2bf8e8](https://github.com/qhanw/umi-plugin-extract-auth/commit/b2bf8e8ca79f1c22710323bce66150dbb91ec728))
- 生成权限配置写入文件夹，根据线上线下来写入不同文件夹 ([44f60a8](https://github.com/qhanw/umi-plugin-extract-auth/commit/44f60a8a68997dd6d4f7cc72f572c8e36d148a15))
- 写入权限配置时，写入失败提示信息更改 ([7228545](https://github.com/qhanw/umi-plugin-extract-auth/commit/72285459e2e2b32a625f409166524889bda9598b))

## [0.3.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.3.0...v0.3.1) (2020-03-25)

# [0.3.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.2.3...v0.3.0) (2020-03-16)

## [0.2.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.2.2...v0.2.3) (2020-03-12)

## [0.2.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.2.1...v0.2.2) (2020-03-10)

## [0.2.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.2.0...v0.2.1) (2020-03-10)

# [0.2.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.1.3...v0.2.0) (2020-03-10)

## [0.1.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.1.2...v0.1.3) (2020-03-06)

## [0.1.2](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.1.1...v0.1.2) (2020-03-05)

### Bug Fixes

- 修复数据无判断导致打包失败 ([c81849f](https://github.com/qhanw/umi-plugin-extract-auth/commit/c81849fc62117251111b8d5d81cae44bfb1303e6))

## [0.1.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.1.0...v0.1.1) (2020-03-05)

# [0.1.0](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.0.3...v0.1.0) (2020-02-28)

### Features

- 配置上传配置 ([a17f863](https://github.com/qhanw/umi-plugin-extract-auth/commit/a17f8631636cdb776afeaaec3836578545353dd6))
- 上传资源配置 ([d55ecad](https://github.com/qhanw/umi-plugin-extract-auth/commit/d55ecad5cd3a06a5db91e0e9d1294b005731c5b4))
- 上传资源配置 ([bf9b8c3](https://github.com/qhanw/umi-plugin-extract-auth/commit/bf9b8c35c6bbd44a8c2475a526031f192acf0bf1))

## [0.0.3](https://github.com/qhanw/umi-plugin-extract-auth/compare/v0.0.1...v0.0.3) (2020-02-25)

### Features

- 权限去重及优化 ([89996c7](https://github.com/qhanw/umi-plugin-extract-auth/commit/89996c73c4497f5618579703a0410cd729fa66da))
- generate files to different dir according to different env ([b8ecb96](https://github.com/qhanw/umi-plugin-extract-auth/commit/b8ecb96e049f2b71da43cf09924695aec6bb5834))

## [0.0.1](https://github.com/qhanw/umi-plugin-extract-auth/compare/61255d1d5bd20315818a164f1a4b66db65037a7d...v0.0.1) (2020-02-04)

### Features

- add configuration options ([db3d274](https://github.com/qhanw/umi-plugin-extract-auth/commit/db3d27482a5f50bfe7bc064e7cb152e8b900b5f4))
- adjust auth output dir ([3912d6e](https://github.com/qhanw/umi-plugin-extract-auth/commit/3912d6e93c0110b2ed81cc88f29bf6c99e575038))
- generate auth configure ([61255d1](https://github.com/qhanw/umi-plugin-extract-auth/commit/61255d1d5bd20315818a164f1a4b66db65037a7d))
- watch auth configuration ([a3c4a38](https://github.com/qhanw/umi-plugin-extract-auth/commit/a3c4a3818bafe1f6625e5f0a509cc256fe23b378))
