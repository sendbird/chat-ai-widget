import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));

export function getWidgetVersion() {
  return packageJson.version;
}
