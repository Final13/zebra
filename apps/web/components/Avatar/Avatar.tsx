import type { AvatarProps } from '@/components/Avatar/AvatarBase';
import { AvatarBase } from '@/components/Avatar/AvatarBase';

import type { FC } from 'react';

export const Avatar: FC<AvatarProps> = ({
  title,
  src,
  size = 50,
  width,
  height,
  shape = 'circle',
  defaultAvatar,
  backgroundColor,
  alt,
  ...props
}) => {
  return (
    <AvatarBase
      title={title}
      src={src}
      width={width}
      height={height}
      size={size}
      alt={alt}
      shape={shape}
      defaultAvatar={defaultAvatar}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};
