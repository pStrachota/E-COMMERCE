import Image, { ImageProps } from 'next/image';
import { Omit } from '../../types/CommonTypes';

export const imageProps = {
  responsive: ({
    aspectRatio,
    objectFit,
  }: {
    aspectRatio: string;
    objectFit?: 'contain' | 'cover';
  }): Partial<ImageProps> => ({
    width: 1,
    height: 1,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      aspectRatio,
      objectFit: objectFit ?? 'cover',
    },
  }),
};

type BaseImageProps = Omit<ImageProps, 'alt'> &
  Required<Pick<ImageProps, 'alt'>>;

export default function BaseImage({ alt, ...rest }: BaseImageProps) {
  return (
    <Image
      {...rest}
      alt={alt}
      unoptimized
    />
  );
}
