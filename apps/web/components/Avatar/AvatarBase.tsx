/* eslint-disable max-len */
import Image from 'next/image';
import clsx from 'clsx';

import type { CSSProperties, PropsWithChildren, FC } from 'react';

export interface AvatarProps {
  title?: string;
  src: string;
  alt?: string;
  shape?: string;
  size?: number;
  width?: number;
  height?: number;
  defaultAvatar?: string;
  backgroundColor?: string;
  style?: CSSProperties;
}

export const AvatarBase: FC<PropsWithChildren<AvatarProps>> = (props) => {
  const alt = props.alt || props.title;
  const src = props.src || props.defaultAvatar || undefined;

  if (!src && !alt) return null;

  const acronym = (alt || '')
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), '')
    .slice(0, 2);
  console.log('acronym', acronym);
  console.log('src', src);
  const wrapperStyle = {
    display: 'flex',
    position: 'relative',
    width: props.width || props.size,
    height: props.height || props.size,
    ...(props.style || {}),
  };

  const getInnerStyle = () => {
    const color = props.backgroundColor;

    const width = props.width || props.size;
    const height = props.height || props.size;

    let borderRadius = 'none';
    if (props.shape === 'circle') {
      borderRadius = '50%';
    } else if (props.shape === 'rounded') {
      borderRadius = '8px';
    }

    return {
      boxSizing: 'border-box',
      maxWidth: '100%',
      objectFit: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
      borderRadius,
      border: '2px solid #abb6c7',
      backgroundColor: src ? 'rgba(0, 0, 0, 0)' : color,
    };
  };

  return (
    <div style={wrapperStyle as CSSProperties}>
      {src ? (
        <Image
          {...props}
          src={src as string}
          alt={alt as string}
          width={props.width || props.size}
          height={props.height || props.size}
          loading="lazy"
          style={getInnerStyle() as CSSProperties}
        />
      ) : (
        <div style={{ color: 'black', fontSize: 30, ...(getInnerStyle() as CSSProperties) }}>{acronym}</div>
      )}
    </div>
  );
};
