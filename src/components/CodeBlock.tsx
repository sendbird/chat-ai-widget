// Ref: https://github.com/rajinwonderland/react-code-blocks#-demo
import { CopyBlock as Component, irBlack } from 'react-code-blocks';

import { Token } from '../utils';

export function CodeBlock({ token }: { token: Token }) {
  return (
    <Component
      text={token.value}
      language={token.type}
      theme={irBlack}
      showLineNumbers={true}
      codeBlock
    />
  );
}
