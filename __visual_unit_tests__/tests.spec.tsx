import { test, expect } from '@playwright/experimental-ct-react';
import { ReactNode } from 'react';

import ParsedBotMessageBody from '../src/components/ParsedBotMessageBody';
import { ConstantStateProvider } from '../src/context/ConstantContext';
import { parseTextMessage, Token } from '../src/utils';

const withContextProvider = (children: ReactNode) => (
  <ConstantStateProvider applicationId={''} botId={''}>
    {children}
  </ConstantStateProvider>
);

const message =
  '# A demo of `react-markdown`\n' +
  '\n' +
  '`react-markdown` is a markdown component for React.\n' +
  '\n' +
  '👉 Changes are re-rendered as you type.\n' +
  '\n' +
  '👈 Try writing some markdown on the left.\n' +
  '\n' +
  '## Overview\n' +
  '\n' +
  '* Follows [CommonMark](https://commonmark.org)\n' +
  '* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)\n' +
  '* Renders actual React elements instead of using `dangerouslySetInnerHTML`\n' +
  "* Lets you define your own components (to render `MyHeading` instead of `'h1'`)\n" +
  '* Has a lot of plugins\n' +
  '\n' +
  '## Contents\n' +
  '\n' +
  'Here is an example of a plugin in action\n' +
  '([`remark-toc`](https://github.com/remarkjs/remark-toc)).\n' +
  '**This section is replaced by an actual table of contents**.\n' +
  '\n' +
  '## Syntax highlighting\n' +
  '\n' +
  'Here is an example of a plugin to highlight code:\n' +
  '[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).\n' +
  '\n' +
  '```js\n' +
  "import React from 'react'\n" +
  "import ReactDOM from 'react-dom'\n" +
  "import Markdown from 'react-markdown'\n" +
  "import rehypeHighlight from 'rehype-highlight'\n" +
  '\n' +
  'const markdown = `\n' +
  '# Your markdown here\n' +
  '`\n' +
  '\n' +
  'ReactDOM.render(\n' +
  '  <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>,\n' +
  "  document.querySelector('#content')\n" +
  ')\n' +
  '```\n' +
  '\n' +
  'Pretty neat, eh?\n' +
  '\n' +
  '## GitHub flavored markdown (GFM)\n' +
  '\n' +
  'For GFM, you can *also* use a plugin:\n' +
  '[`remark-gfm`](https://github.com/remarkjs/react-markdown#use).\n' +
  'It adds support for GitHub-specific extensions to the language:\n' +
  'tables, strikethrough, tasklists, and literal URLs.\n' +
  '\n' +
  'These features **do not work by default**.\n' +
  '👆 Use the toggle above to add the plugin.\n' +
  '\n' +
  '| Feature    | Support              |\n' +
  '| ---------: | :------------------- |\n' +
  '| CommonMark | 100%                 |\n' +
  '| GFM        | 100% w/ `remark-gfm` |\n' +
  '\n' +
  '~~strikethrough~~\n' +
  '\n' +
  '* [ ] task list\n' +
  '* [x] checked item\n' +
  '\n' +
  'https://example.com\n' +
  '\n' +
  '## HTML in markdown\n' +
  '\n' +
  '⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can\n' +
  'use [`rehype-raw`](https://github.com/rehypejs/rehype-raw).\n' +
  'You should probably combine it with\n' +
  '[`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).\n' +
  '\n' +
  '<blockquote>\n' +
  '  👆 Use the toggle above to add the plugin.\n' +
  '</blockquote>\n' +
  '\n' +
  '## Components\n' +
  '\n' +
  'You can pass components to change things:\n' +
  '\n' +
  '```js\n' +
  "import React from 'react'\n" +
  "import ReactDOM from 'react-dom'\n" +
  "import Markdown from 'react-markdown'\n" +
  "import MyFancyRule from './components/my-fancy-rule.js'\n" +
  '\n' +
  'const markdown = `\n' +
  '# Your markdown here\n' +
  '`\n' +
  '\n' +
  'ReactDOM.render(\n' +
  '  <Markdown\n' +
  '    components={{\n' +
  '      // Use h2s instead of h1s\n' +
  "      h1: 'h2',\n" +
  '      // Use a component instead of hrs\n' +
  '      hr(props) {\n' +
  '        const {node, ...rest} = props\n' +
  '        return <MyFancyRule {...rest} />\n' +
  '      }\n' +
  '    }}\n' +
  '  >\n' +
  '    {markdown}\n' +
  '  </Markdown>,\n' +
  "  document.querySelector('#content')\n" +
  ')\n' +
  '```\n' +
  '\n' +
  '## More info?\n' +
  '\n' +
  'Much more info is available in the\n' +
  '[readme on GitHub](https://github.com/remarkjs/react-markdown)!\n' +
  '\n' +
  '***\n' +
  '\n' +
  'A component by [Espen Hovlandsdal](https://espen.codes/)';

/**
 * 100
 * ParsedBotMessageBody
 * Message with various markdown syntaxes.
 */
test('100', async ({ mount }) => {
  const tokens: Token[] = parseTextMessage(message, []);
  const component = await mount(withContextProvider(<ParsedBotMessageBody text={message} tokens={tokens} />));
  await expect(component).toHaveScreenshot();
});
