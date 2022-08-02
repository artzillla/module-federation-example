import React from 'react';

export function Spinner() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        margin: 'auto',
        background: '0 0',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width='200'
      height='200'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle cx='30' cy='50' fill='#0057b8' r='20'>
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='1.1764705882352942s'
          keyTimes='0;0.5;1'
          values='30;70;30'
          begin='-0.5882352941176471s'
        />
      </circle>
      <circle cx='70' cy='50' fill='gold' r='20'>
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='1.1764705882352942s'
          keyTimes='0;0.5;1'
          values='30;70;30'
          begin='0s'
        />
      </circle>
      <circle cx='30' cy='50' fill='#0057b8' r='20'>
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='1.1764705882352942s'
          keyTimes='0;0.5;1'
          values='30;70;30'
          begin='-0.5882352941176471s'
        />
        <animate
          attributeName='fill-opacity'
          values='0;0;1;1'
          calcMode='discrete'
          keyTimes='0;0.499;0.5;1'
          dur='1.1764705882352942s'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  );
}
