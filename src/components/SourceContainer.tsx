import styled from 'styled-components';

import { ReactComponent as OpenLinkIcon } from '../icons/open-link-icon.svg';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0;
  gap: 4px;
  width: 100%;
`;

const RootTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 4px;
`;

const SourceTitle = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: rgba(0, 0, 0, 0.88);
  width: fit-content;
  block-size: fit-content;
`;

const SourceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  padding: 0 1px;
`;

export interface Source {
  source: string;
  title: string;
  description: string;
  language: string;
}

type Props = {
  sources: Source[];
};

export default function SourceContainer(props: Props) {
  const { sources } = props;
  const source: Source = sources[sources.length - 1];

  return (
    <Root>
      <RootTitle>Source</RootTitle>
      <SourceItem>
        <div>
          <SourceTitle href={source.source} id="openLinkText" target="_blank">
            {source.title}
          </SourceTitle>
        </div>
        <IconLink href={source.source} id="openLinkIcon" target="_blank">
          <OpenLinkIcon width={'15px'} height={'15px'} />
        </IconLink>
      </SourceItem>
    </Root>
  );
}
