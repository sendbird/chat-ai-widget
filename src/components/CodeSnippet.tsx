import styled from "styled-components";

const Root = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LineItem = styled.div`
  border-right: solid rgba(0, 0, 0, 0.50);
`;

const LinesContainer = styled.div`
  width: 40px;
`;

const CodeContainer = styled.div`
  width: calc(100% - 40px);
  overflow-x: scroll;
  height: 100px;
`;

interface Props {
  codeString: string;
}

export default function CodeSnippet(props: Props) {
  const { codeString } = props;
  const numLines = codeString.split('\n').length;
  const lineNumbers: number[] = [];
  for (let i = 1; i < numLines + 1; i++) {
    lineNumbers.push(i);
  }
  // console.log('## numLines: ', numLines);

  return <code>
      <Root>
      <LinesContainer>
        {
          lineNumbers.map((lineNumber: number) => <LineItem>{lineNumber}</LineItem>)
        }
      </LinesContainer>
      <CodeContainer>{codeString}</CodeContainer>
      </Root>
    </code>;
}