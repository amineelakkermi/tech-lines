import React from 'react'

const LineTitle = ({direction}) => {
  return (
    <div dir={direction} className='flex items-center mt-5'>
    <hr />
     <span className="circle"></span>
    </div>
  )
}

export default LineTitle