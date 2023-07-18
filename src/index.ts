import path from 'path';
import { Command } from 'commander';
import figlet from 'figlet';

import {
  listDirContents,
  createDir,
  createFile,
} from './utils/file-management';
import { getWeather } from './utils/weather';

console.log(figlet.textSync('ts-cli'));
const program = new Command();

program
  .name('ts-cli')
  .description('An example CLI tool')
  .option('-l, --ls  [value]', 'List directory contents')
  .option('-m, --mkdir <value>', 'Create a directory')
  .option('-t, --touch <value>', 'Create a file')
  .option('--weather', 'Check the weather')
  .parse(process.argv);
const options = program.opts();
if (options.ls) {
  const filepath = typeof options.ls === 'string' ? options.ls : __dirname;
  listDirContents(filepath);
}

if (options.mkdir) {
  createDir(path.resolve(__dirname, options.mkdir));
}

if (options.touch) {
  createFile(path.resolve(__dirname, options.touch));
}

if (options.weather) {
  async function currentWeather() {
    const res = await getWeather();
    console.log(res);
  }
  currentWeather();
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
