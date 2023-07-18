// get-package-json.ts
import fs from 'fs';

interface PackageJson {
  name: string;
  description: string;
  version: string;
  author: string;
  repository: any;
  main: string;
  type: string;
  scripts: any;
  license: string;
  devDependencies: any;
  dependencies: any;
}

// read package.json and return its contents
export default (): PackageJson =>
  JSON.parse(fs.readFileSync('package.json', 'utf8'));
