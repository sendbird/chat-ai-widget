import { useState } from 'react';
import styled from 'styled-components';

import { Token } from '../../utils';

const CodeContainer = styled.div`
  position: relative; /* For the copy button positioning */
  padding: 20px;
  background: #000;
`;

const CodeContent = styled.div`
  color: #f8f8f8;
  overflow-x: auto;
  white-space: pre;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 10px;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #000;
  margin-top: 3px;
  border-radius: 4px;
  height: 26px;
  width: 26px;
  padding: 2px;
`;

export const CodeBlock = ({ token }: { token: Token }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const code = token.value;
  const parsedCodeBlock = code.split('\n').map((line, index) => (
    <Line key={index}>
      <LineNumber>{index + 1}</LineNumber>
      <LineContent>{line}</LineContent>
    </Line>
  ));

  return (
    <CodeContainer>
      <CopyButton
        onClick={() => {
          handleCopy();
        }}
      >
        {isCopied ? '✅' : '📋'}
      </CopyButton>
      <CodeContent>{parsedCodeBlock}</CodeContent>
    </CodeContainer>
  );
};
