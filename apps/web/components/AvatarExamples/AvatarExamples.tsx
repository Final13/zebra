import React from 'react';

import { Avatar } from '@/components/Avatar';

const users = [
  { id: 1, title: 'John Doe', src: 'https://www.gravatar.com/avatar/?d=identicon' },
  { id: 2, title: 'John Smith', src: 'https://www.gravatar.com/avatar' },
  { id: 3, title: 'Jane Smith', backgroundColor: '#7dcfe0', online: 'yes' },
  { id: 4, title: 'Jane Black', backgroundColor: '#7dcfe0', online: 'no' },
  { id: 5, shape: 'rounded', title: 'Jane Black', backgroundColor: '#7dcfe0' },
];

const AvatarExamples = () => {
  return (
    <div
      style={{
        background: 'white',
        padding: 20,
        borderRadius: 8,
        minWidth: 200,
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <>
        {users.map(
          (user: {
            id?: number;
            title?: string;
            src?: string;
            alt?: string | undefined;
            backgroundColor?: string;
            online?: string;
            shape?: string;
          }) => (
            <div key={user.id} style={{ padding: 10, position: 'relative' }}>
              {user.online && (
                <div
                  style={{
                    position: 'absolute',
                    width: 12,
                    height: 12,
                    zIndex: 1,
                    right: 5,
                    top: 5,
                    backgroundColor: user.online === 'yes' ? 'green' : 'red',
                    borderRadius: '50%',
                  }}
                />
              )}
              <Avatar
                src={user.src as string}
                alt={user.title}
                backgroundColor={user.backgroundColor}
                shape={user.shape}
                size={60}
              />
            </div>
          ),
        )}
        <div style={{ color: 'black', marginLeft: 20 }}>
          <b style={{ fontSize: 20 }}>Props:</b> <br />
          <b>src</b>: string; <br />
          <b>alt</b>: string; <br />
          <b>backgroundColor</b>: string; <br />
          <b>size</b>: number; <br />
          <b>width</b>: number; <br />
          <b>height</b>: number; <br />
          <b>defaultAvatar</b>: string; <br />
          <b>shape</b>: circle | rounded <br />
          <b>style</b>: CSSProperties; <br />
        </div>
      </>
    </div>
  );
};

export default AvatarExamples;
