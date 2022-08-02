import React from 'react';

export default function Card({ children, style = {}, ...props }) {
  return (
    <div
      style={{ background: '#fff', borderRadius: '5px', ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
