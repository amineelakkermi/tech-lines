import React from 'react'
import { TitleCmp, Works, WorksAll } from '../components1'

const WorksPage = () => {
  return (
    <div>
    <TitleCmp bgColor="bg-gray-100" titleAr="صور المشاريع" titleEn="Project Pictures"/>
    <WorksAll />
    </div>
  )
}

export default WorksPage