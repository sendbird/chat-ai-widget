import fs from 'node:fs';

import { build } from 'vite';

import { generateIndexFile } from './generateIndex.js';
import { getWidgetVersion } from './getWidgetVersion.js';

const version = getWidgetVersion();

const run = async () => {
  try {
    console.log('[SELF-SERVICE] Cleaning up dist folder');
    fs.rmdirSync('dist', { recursive: true });
  } catch {
    // ignore
  }

  console.log('[SELF-SERVICE] Build started for version:', version);
  await build({ configFile: 'vite.config.ts', logLevel: 'info' });

  console.log('[SELF-SERVICE] Generate index files');
  generateIndexFile(version);
};

run();
