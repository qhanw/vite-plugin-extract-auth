import { deprecate } from 'util';
import chalk from 'chalk';
export const depCname = (fn: Function) =>
  deprecate(
    fn,
    chalk.yellow(
      'Routes config: `cName` is deprecated, please use `title` instead.',
    ),
   // chalk.blue('DEP0001'),
  );
