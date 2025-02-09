import React from 'react'
import { Benificiaire, Brands, ClipBlue, Projects, Tasks, TitleCmp } from '../components1'
import { experience } from '../assets1'

const Exellence = () => {
  return (
    <div>
    <TitleCmp bgColor="bg-gray-50" titleAr="نحو التميز" titleEn="Towards Exellence"/>
    <Tasks />
    <Benificiaire />
    </div>
  )
}

export default Exellence