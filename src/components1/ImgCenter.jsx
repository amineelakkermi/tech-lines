/* eslint-disable no-unused-vars */

import React from 'react'
import { controlImg } from '../assets1'

const ImgCenter = () => {
  return (
    <div className={` w-full min-h-[80vh] flex justify-center items-center`}>
     <div className='w-[850px] h-[550px]'>
     <img src={controlImg} className='w-[100%] h-[100%]' alt="Control" />
     </div>
    </div>
  )
}

export default ImgCenter