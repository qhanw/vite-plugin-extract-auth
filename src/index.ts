import chalk from 'chalk';
import fs from 'node:fs';
import type { Plugin } from 'vite';

import bootstrap from './bootstrap';

import { ExtractAuthOptions } from './typings';

export default function extractAuth(options: ExtractAuthOptions): Plugin {
  return {
    name: 'vite-plugin-extract-auth',

    options: (options) => {
      console.log('options:', options);
    },

    configureServer: (service) => {
      // const envDir = service.config.envDir; // 项目根目录
      const root = service.config.root; // 项目根目录
      const cacheDir = service.config.cacheDir; // 缓存目录

      // const buildDir = service.config.build.outDir; // 编译
      // const assetsDir = service.config.build.assetsDir; // 静态资源目录

      try {
        const source = bootstrap({ cwd: root, ...options });
        const authorizationFile = `${cacheDir}/authorization.ts`;
        // authorization.ts
        fs.writeFile(
          authorizationFile,
          `export const APP_KEY = "${options?.appKey}";\n\nexport default ${JSON.stringify(source, null, 2)};`,
          'utf-8',
          () => {},
        );

        console.log(chalk.green(`Write authorize config file success`));
      } catch (e) {
        console.log(
          chalk.red(`Write authorize config file failed, error message: ${e}`),
        );
      }
    },
    closeBundle: () => {},
  };
}
