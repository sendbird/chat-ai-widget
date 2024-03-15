import fs from 'node:fs';

const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
const version = packageLock.dependencies["@sendbird/chat-ai-widget"].version;

if (!version) {
    console.error('Error: No version found for @sendbird/chat-ai-widget. Please check the package-lock.json file.');
    process.exit(1);
}

const content = `import(\`/output.js?v=${version}\`).then(() => console.log("AI chatbot module has been successfully loaded"));`;

// For development
fs.writeFileSync('dist/index-dev.js', content);

// For production
fs.writeFileSync('dist/index.js', content);
