import React from 'react';

const ClipTop = ({ bgColor = 'bg-white' }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full h-[80px] ${bgColor} z-0`}
      style={{
        clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%, 0 0%)',
      }}
    ></div>
  );
};

export default ClipTop;
