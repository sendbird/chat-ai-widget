import { Icon } from '../Icon';
import { Loader } from '../Loader';

type Props = {
  iconSize?: string | number;
};
const PlaceholderLoading = ({ iconSize = 48 }: Props) => {
  return (
    <Loader size={iconSize}>
      <Icon type={'spinner'} size={iconSize} />
    </Loader>
  );
};

export default PlaceholderLoading;
