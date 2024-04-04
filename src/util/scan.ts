import { statSync, readdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { AuthJson } from '../typings';

/**
 * 扫描文件夹下的文件名
 * @param {string} dirPath 目录路径
 * @param {string[]} excludes 排除的文件名(支持正则)
 * @returns string[] 文件名称路径
 */
export const scanDir = (dirPath: string, excludes?: string[]) => {
  if (!existsSync(dirPath)) return;

  const files = readdirSync(dirPath);

  if (!files?.length) return;

  return files.reduce((acc: string[], cur: string) => {
    const filePath = join(dirPath, cur);

    if (excludes?.length) {
      for (let i = 0, len = excludes.length; i < len; i++) {
        const exclude = excludes[i];
        if (!new RegExp(exclude).test(cur)) {
          acc.push(filePath);
        }
      }
    } else {
      acc.push(filePath);
    }
    return acc;
  }, []);
};

/**
 * 读取 JSON 文件内容
 * @param {string} filePath 文件路径
 */
export const readFileContent = (filePath: string): AuthJson[] | undefined => {
  if (!existsSync(filePath)) return;

  const stat = statSync(filePath);

  if (!stat) return;

  if (stat.isFile()) {
    const text = readFileSync(filePath, 'utf8');
    const json = JSON.parse(text);

    return Array.isArray(json) ? json : [json];
  }
};
