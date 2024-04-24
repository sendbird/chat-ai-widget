import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
`;

const Image = styled.img`
  border-radius: 16px;
  width: 100%;
`;

type Props = {
  url: string;
};

export default function FileMessage(props: Props) {
  const { url } = props;
  return (
    <Root>
      <Image src={url} alt={''} />
    </Root>
  );
}
