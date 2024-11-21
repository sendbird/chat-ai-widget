import styled from 'styled-components';

import { StringSet } from '@uikit/ui/Label/stringSet';

import ProviderContainer from './ProviderContainer';
import { type Constant } from '../../const';
import Chat from '../chat';

const DemoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
  border-radius: 15px;
`;

const DemoComponent = () => {
  return (
    <DemoContainer>
      <Chat />
    </DemoContainer>
  );
};

export interface ChatAiWidgetProps extends Omit<Partial<Constant>, 'stringSet'> {
  applicationId: string;
  botId: string;
  hashedKey?: string;
  stringSet?: Partial<StringSet>;
}

export default function ChatAiWidget(props: ChatAiWidgetProps) {
  return (
    <ProviderContainer {...props}>
      <DemoComponent />
    </ProviderContainer>
  );
}
