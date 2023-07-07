import * as fs from 'fs';
import { fileExists } from './fileExists';

export const rmdir = (dirname: string): Promise<string> =>
  new Promise(async (resolve, reject) => {
    try {
      const alreadyEixsts = await fileExists(dirname);
      if (alreadyEixsts) {
        fs.rmSync(dirname, { recursive: true, force: true });
      }
      resolve(dirname);
    } catch (err) {
      reject(err);
    }
  });
