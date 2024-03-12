import { MotionValue } from 'framer-motion';
import { SheetCompound } from './types';
export type SheetRef = {
    y: MotionValue<number>;
    snapTo: (index: number) => void;
};
declare const _default: SheetCompound;
export default _default;
