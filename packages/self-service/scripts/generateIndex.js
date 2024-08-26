import fs from 'node:fs';

export function generateIndexFile(version) {
  if (!version) {
    console.error('Error: No version found for @sendbird/chat-ai-widget. Please check the package-lock.json file.');
    process.exit(1);
  }

  const content = `import(\`/${version}/output.js\`).then(() => console.log("AI chatbot module has been successfully loaded"));`;

  fs.writeFileSync('dist/index.js', content);
  fs.cpSync('playground', 'dist/playground', { recursive: true });
}
