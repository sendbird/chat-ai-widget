import PlaceholderCommon, { PlaceholderCommonProps } from './PlaceholderCommon';

const PlaceholderNoChannels = ({ label = 'No channels', ...props }: Omit<PlaceholderCommonProps, 'icon'>) => {
  return <PlaceholderCommon icon={'chat'} label={label} {...props} />;
};

export default PlaceholderNoChannels;
