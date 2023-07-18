import fs from 'fs';
import path from 'path';
import tmp from 'tmp';

/**
 *
 * @param filepath
 */
export async function listDirContents(filepath: string) {
  try {
    const files = await fs.promises.readdir(filepath);
    const detailedFilesPromises = files.map(async (file: string) => {
      const { size, birthtime } = await fs.promises.lstat(
        path.resolve(filepath, file)
      );
      return { filename: file, 'size(KB)': size, created_at: birthtime };
    });
    // add the following
    const detailedFiles = await Promise.all(detailedFilesPromises);
    console.table(detailedFiles);
  } catch (error) {
    console.error({ filepath });
    console.error('Error occurred while reading the directory!', error);
  }
}

/**
 *
 * @param filepath
 */
export function createDir(filepath: string) {
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
    console.log('The directory has been created successfully');
  }
}

/**
 *
 * @param filepath
 */
export function createFile(filepath: string) {
  fs.openSync(filepath, 'w');
  console.log('An empty file has been created');
}

/**
 *
 * @param prefix
 * @param postfix
 * @returns
 */
export function createTmpFile(prefix: string = '', postfix: string = '') {
  const tmpobj = tmp.fileSync({
    prefix,
    postfix,
  });
  console.log('File: ', tmpobj.name);
  console.log('Filedescriptor: ', tmpobj.fd);
  return tmpobj;
}
