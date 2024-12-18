import { PlaceholderProps } from './types';
import { Icon } from '../Icon';
import { Loader } from '../Loader';

const PlaceholderLoading = ({ iconSize = 48, className }: PlaceholderProps) => {
  return (
    <Loader size={iconSize} className={className}>
      <Icon type={'spinner'} size={iconSize} />
    </Loader>
  );
};

export default PlaceholderLoading;
