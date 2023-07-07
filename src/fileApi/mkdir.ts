import * as fs from 'fs';
import { fileExists } from './fileExists';

export const mkdir = (dirname: string): Promise<string> =>
  new Promise(async (resolve, reject) => {
    try {
      const alreadyEixsts = await fileExists(dirname);
      if (alreadyEixsts) {
        resolve(dirname);
      } else {
        resolve(fs.mkdirSync(dirname, { recursive: true }));
      }
    } catch (err) {
      reject(err);
    }
  });
