import fs from 'node:fs';
import { getWidgetVersion } from './widget-version.js';

const version = getWidgetVersion();

if (!version) {
    console.error('Error: No version found for @sendbird/chat-ai-widget. Please check the package-lock.json file.');
    process.exit(1);
}

const content = `import(\`/v${version}/output.js\`).then(() => console.log("AI chatbot module has been successfully loaded"));`;

fs.writeFileSync('dist/index.js', content);
fs.cpSync('playground.html', 'dist/playground/index.html')
