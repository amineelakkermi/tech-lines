import React from 'react'

const ClipBlue = () => {
  return (
    <div
          className="absolute bottom-0 left-0 w-full h-[80px] bg-[#2E2E72]"
          style={{
            clipPath: 'polygon(0 100%, 100% 110%, 100% 10%)',
          }}
    ></div>
  )
}

export default ClipBlue