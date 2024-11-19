import { motion } from 'framer-motion';
import * as React from 'react';

import styles from './styles';
import { SheetBackdropProps } from './types';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

const SheetBackdrop = React.forwardRef<any, SheetBackdropProps>(({ style = {}, className = '', ...rest }, ref) => {
  const Comp = isClickable(rest) ? motion.button : motion.div;
  const pointerEvents = isClickable(rest) ? 'auto' : 'none';

  return (
    <Comp
      {...rest}
      ref={ref}
      className={`react-modal-sheet-backdrop ${className}`}
      style={{ ...styles.backdrop, ...style, pointerEvents }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
});

SheetBackdrop.displayName = 'SheetBackdrop';

export default SheetBackdrop;
