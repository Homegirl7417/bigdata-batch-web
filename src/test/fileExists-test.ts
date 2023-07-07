import { fileExists } from '../fileApi/fileExists';

const exist = async (filepath) => {
  const result = await fileExists(filepath);
  console.log(`${filepath} ${result ? 'exists' : 'not exists'}`);
};

exist('./package.json');
exist('./package');
