import { default as React } from 'react';
import { ChatAiWidgetProps } from './ChatAiWidget';

export interface ProviderContainerProps extends ChatAiWidgetProps {
    children: React.ReactElement;
}
export default function ProviderContainer(props: ProviderContainerProps): import("react/jsx-runtime").JSX.Element;
