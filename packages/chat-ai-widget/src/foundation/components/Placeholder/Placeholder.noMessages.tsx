import PlaceholderCommon, { PlaceholderCommonProps } from './PlaceholderCommon';

const PlaceholderNoMessages = ({ label = 'No messages', ...props }: Omit<PlaceholderCommonProps, 'icon'>) => {
  return <PlaceholderCommon icon={'message'} label={label} {...props} />;
};

export default PlaceholderNoMessages;
