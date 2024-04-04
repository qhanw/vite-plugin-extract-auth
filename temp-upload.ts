import https from 'https';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import { join } from 'path';

const spinner = ora();

const env = process.env.ENV_NAME || '';

// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());
// console.log(path.resolve('./'));

const content = fs.readFileSync(
  `${join(
    process.cwd(),
    'src/.umi/umi-plugin-extract-auth',
    'authorization',
  )}.ts`,
  'utf-8',
);

console.log(content.match(/^[export default = \]](.|\n)*\];$/));

function upload(content: any, { appKey }) {
  if (!appKey) {
    return spinner.fail(chalk.red(`No upload, there is no app key!`));
  }

  if (!(content && content.length)) {
    return spinner.fail(
      chalk.red(`No upload, there is no authorize data content!`),
    );
  }

  if (!['dev', 'fat', 'uat'].includes(env)) {
    return spinner.fail(
      chalk.red(`No upload, the environment variable is wrong!`),
    );
  }

  // const options = {
  //   url: `${url}/resources/init`,
  //   json: true,
  //   body: {
  //     applicationKey: appKey,
  //     data: content,
  //   },
  // };
  //

  spinner.start(chalk.blue('Authorize data upload start'));
  // request
  //   .post(options, function (error, response, body) {
  //     if (error) {
  //       spinner.fail(chalk.red(error));
  //     } else {
  //       if (response.statusCode === 200) {
  //         const result = body;
  //         if (result.status === 'OK') {
  //           spinner.succeed(chalk.green('Authorize data upload success!'));
  //         } else {
  //           spinner.fail(
  //             chalk.red(
  //               `Authorize data upload fail: ${JSON.stringify(result)}`,
  //             ),
  //           );
  //         }
  //       } else {
  //         spinner.fail(
  //           chalk.red(`Authorize data upload fail: ${JSON.stringify(body)}`),
  //         );
  //       }
  //       spinner.info(chalk.blue(`url: ${options.url} appKey: ${appKey}`));
  //     }
  //   })
  //   .on('error', function (err) {
  //     spinner.fail(chalk.red(err));
  //   });

  const data = JSON.stringify({ applicationKey: appKey, data: content });

  const options = {
    protocol: 'https:',
    hostname: `oagwapi.${env}.qhan.wang`,
    port: 443,
    path: '/resources/init',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  const req = https
    .request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(JSON.parse(data));
      });
    })
    .on('error', (err) => {
      console.log('Error: ', err.message);
    });

  req.write(data);
  req.end();
}
