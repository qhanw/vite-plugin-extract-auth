import { statSync, existsSync } from 'node:fs';
import { sep } from 'node:path';
import chalk from 'chalk';
import { AuthTreeNode } from '../typings';

export const isObject = (v: any) => {
  return Object.prototype.toString.call(v) === '[object Object]';
};

export const getFileNameOrFileDir = (path: string) => {
  if (existsSync(path) && statSync(path)?.isFile()) {
    const arrPath = path.split(sep);
    return {
      filename: arrPath.slice(-1)[0],
      fileDir: arrPath.slice(0, arrPath.length - 1).join(sep),
    };
  } else {
    return { filename: 'index', fileDir: path };
  }
};

/**
 * @desc 错误提示输出
 * @param {any} args
 */
export const logError = (...args: any) => {
  console.log(chalk.red(...args));
};

/**
 * @desc 警告提示输出
 * @param {any} args
 */
export const logWarn = (...args: any) => {
  console.log(chalk.yellow(...args));
};

/**
 * 处理path，兼容字符串和数组，返回字符串
 */
export const pathToStr = (path: string | string[]): string | undefined => {
  if (typeof path === 'string') return path;
  if (Array.isArray(path)) return path.join();

  throw new Error(`Error, path 类型错误！`);
};

/**
 * 剔除object里值为undefined的项
 */
export const cleanFields = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, cur) => {
      if (cur !== undefined) {
        if (isObject(cur) || Array.isArray(cur)) {
          acc.push(cleanFields(cur));
        } else {
          acc.push(cur);
        }
      }
      return acc;
    }, []);
  }

  if (isObject(obj)) {
    return Object.entries(obj!).reduce((acc, [k, v]) => {
      if (v !== undefined) {
        if (isObject(v) || Array.isArray(v)) {
          acc = { ...acc, [k]: cleanFields(v) };
        } else {
          acc = { ...acc, [k]: v };
        }
      }
      return acc;
    }, {} as T);
  }
  return obj;
};


export const detectUnique = (data: AuthTreeNode[]) => {
  const map = new Map<string, number>();

  function recursive(data: AuthTreeNode[]) {
    for (let i = 0, len = data.length; i < len; i += 1) {
      const node = data[i];
      const key = node.key;

      map.set(key, map.has(key) ? (map.get(key) ?? 0) + 1 : 1);

      if (node.children) {
        node.children = recursive(node.children);
      }
    }
    return data;
    // return [data, map];
  }

  recursive(data);

  return map;
};

// 退出程序
function exit({ code, msg }: { code?: number; msg: any }): void;
function exit(msg: any): void;
function exit(x: { code?: number; msg: any } | any) {
  if (isObject(x) && x.msg) {
    logError(x.msg?.stack ?? x.msg);
    process.exit(x.code ?? -1);
  } else {
    logError(x?.stack ?? x);
    process.exit(-1);
  }
}
export { exit };
