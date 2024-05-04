import { relative } from 'path';

const buildEslintCommand = (filenames) =>
  `npx next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `npx prettier ${filenames.map((f) => relative(process.cwd(), f)).join(' ')} --write`;

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
};
