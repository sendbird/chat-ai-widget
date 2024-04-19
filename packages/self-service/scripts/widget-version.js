import fs from 'node:fs';

const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

export function getWidgetVersion() {
  return packageLock.dependencies["@sendbird/chat-ai-widget"].version;
}
