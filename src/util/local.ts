import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
export const formatMessage = (
  key?: string,
  locales?: { [k: string]: string },
) => {
  if (!key || !locales) return key;

  return locales[`menu.${key}`];
};

export const getLocales = (cwd: string) => {
  // TODO：权限国际化处理，目前仅支持读取中文
  const localesPath = resolve(cwd, './src/locales/zh-CN/menu.ts');
  if (existsSync(localesPath)) {
    const text = readFileSync(localesPath, 'utf8');
    // const ctx = aa.match(/(?<={\n)(.|\n)*(?=\n})/)?.[0];
    const ctx = text.match(/{\n(.|\n)*}/)?.[0];

    if (ctx) return new Function('return' + ctx)();
  }
};
