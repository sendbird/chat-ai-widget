import { motion } from 'framer-motion';
import * as React from 'react';

import { useSheetScrollerContext, useSheetContext } from './context';
import { useDragConstraints } from './hooks';
import styles from './styles';
import { SheetDraggableProps } from './types';
import { mergeRefs } from './utils';

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, className = '', ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();

    const dragProps = disableDrag || sheetScrollerContext.disableDrag ? undefined : sheetContext.dragProps;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        className={`react-modal-sheet-content ${className}`}
        style={{ ...styles.content, ...style }}
        {...dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
      >
        {children}
      </motion.div>
    );
  },
);

SheetContent.displayName = 'SheetContent';

export default SheetContent;
