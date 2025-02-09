import React from 'react'
import { OurFields, TitleCmp } from '../components1'
import { controlImg, securityImg } from '../assets1'

const Fields = () => {
  return (
    <div>
    <TitleCmp titleAr="مجالاتنا" titleEn="Our Fields"/>
    <OurFields numberOfFields={4} showTitle={false} showButton={false} showClipPath={true} />

    </div>
  )
}

export default Fields