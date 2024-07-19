import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));

/**
 * @return {string} v0.0.0 format
 * */
export function getWidgetVersion() {
  const version = process.argv[2];
  const ret = version ? `${version.split('version=')[1]}` : `v${packageJson.version}`;

  console.log('getWidgetVersion:', process.argv, ret);

  return ret;
}
