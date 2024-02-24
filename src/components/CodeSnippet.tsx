import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LineItem = styled.div`
  border-right: solid var(--sendbird-dark-onlight-02);
`;

const LinesContainer = styled.div`
  width: 40px;
`;

const CodeContainer = styled.div`
  width: calc(100% - 36px);
  overflow-x: scroll;
  height: 100px;
`;

interface Props {
  codeString: string;
}

export default function CodeSnippet(props: Props) {
  const { codeString } = props;
  const codeSegments = codeString.split('\n');

  return (
    <code>
      <Root>
        <LinesContainer>
          {codeSegments.map((seg) => (
            <LineItem key={seg}>{seg}</LineItem>
          ))}
        </LinesContainer>
        <CodeContainer>{codeString}</CodeContainer>
      </Root>
    </code>
  );
}
