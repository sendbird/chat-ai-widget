export const resolveSize = (props: { size: string | number }) => {
  const s = props.size;
  return typeof s === 'number' ? `${s}px` : s;
};
