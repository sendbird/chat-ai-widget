import PlaceholderCommon, { PlaceholderCommonProps } from './PlaceholderCommon';

// TODO: replace to string set
const PlaceholderNoChannels = (props: Omit<PlaceholderCommonProps, 'icon' | 'message'>) => {
  return <PlaceholderCommon icon={'chat'} message={'No channels'} {...props} />;
};

export default PlaceholderNoChannels;
