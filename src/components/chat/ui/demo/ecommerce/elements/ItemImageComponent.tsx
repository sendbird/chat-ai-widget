type Props = {
  image: string;
  width: number;
  height: number;
};

export const ItemImageComponent = ({ image, width, height }: Props) => (
  <img
    src={image}
    alt="item"
    style={{
      width,
      height,
      borderRadius: 8,
      objectFit: 'cover',
      objectPosition: 'center',
      filter: 'brightness(80%)',
    }}
  />
);
