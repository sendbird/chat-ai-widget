import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('../../package.json', 'utf8'));

/**
 * @return {string} v0.0.0 format
 * */
export function getWidgetVersion() {
  const version = process.argv[2];

  if (!version.startsWith('version=') || version === 'version=') {
    return `v${packageJson.version}`;
  }

  return version.split('version=')[1];
}

console.log('widget version:', getWidgetVersion());
