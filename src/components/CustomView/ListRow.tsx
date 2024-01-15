import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const LeftColumn = styled.div`
  width: 15%;
  text-align: center;
  margin-right: 8px;
`;

const CenterColumn = styled.div<{ hasRightColumn: boolean }>`
  width: ${(props: { hasRightColumn: boolean }) =>
    props.hasRightColumn ? '60%' : '85%'};
  text-align: left;
  padding-right: 4px;
`;

const RightColumn = styled.div`
  width: 25%;
  padding-left: 4px;
  text-align: right;
`;

const CircleImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const Row = styled.div`
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // max-width: 130px;
`;

interface ListRowProps {
  imageSrc: string;
  title: React.ReactNode;
  description: React.ReactNode;
  rightTop?: React.ReactNode;
  rightBottom?: React.ReactNode;
}
const ListRow = ({
  imageSrc,
  title,
  description,
  rightTop,
  rightBottom,
}: ListRowProps) => {
  const hasRightColumn = rightTop != null || rightBottom != null;
  return (
    <Container>
      <LeftColumn>
        <CircleImage src={imageSrc} alt="" />
      </LeftColumn>
      <CenterColumn hasRightColumn={hasRightColumn}>
        <Row>{title}</Row>
        <Row>{description}</Row>
      </CenterColumn>
      {hasRightColumn && (
        <RightColumn>
          {rightTop && <Row>{rightTop}</Row>}
          {rightBottom && <Row>{rightBottom}</Row>}
        </RightColumn>
      )}
    </Container>
  );
};

export default ListRow;
