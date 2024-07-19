import fs from 'node:fs';

import { build } from 'vite';

import { generateIndexFile } from './generateIndex.js';
import { getWidgetVersion } from './getWidgetVersion.js';

const version = getWidgetVersion();

const run = async () => {
  try {
    fs.rmdirSync('dist', { recursive: true });
  } catch {
    // ignore
  }

  await build({ configFile: 'vite.config.ts', logLevel: 'info' });

  generateIndexFile(version);
};

run();
