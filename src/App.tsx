import React from 'react';

import { StringSet } from '@uikit/ui/Label/stringSet';

import ChatAiWidget from './components/widget/ChatAiWidget';
import { ToggleButtonProps } from './components/widget/WidgetToggleButton';
import { Constant } from './const';

interface Props extends Omit<Partial<Constant>, 'stringSet'> {
  applicationId: string;
  botId: string;
  autoOpen?: boolean;
  renderWidgetToggleButton?: (props: ToggleButtonProps) => React.ReactElement;
  stringSet?: Partial<StringSet>;
}

/**
 * Leave comments below for testing
 */
const App = (props: Props) => {
  return <ChatAiWidget {...props} />;
};

export default App;
