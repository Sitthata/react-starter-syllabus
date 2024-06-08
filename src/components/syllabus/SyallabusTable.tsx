import React from 'react'
import DayCard from './DayCard'

const SyallabusTable = () => {
  const syllabusData = [
    {
      day: 1,
      topic: 'Introduction to Web Technologies',
      material: 'link_to_material1',
      description: 'ทำความรู้จักกับเทคโนโลยีเว็บพื้นฐาน',
    },
    {
      day: 2,
      topic: 'HTML & CSS Basics',
      material: 'link_to_material2',
      description: 'ศึกษาเกี่ยวกับพื้นฐานของ HTML และ CSS สำหรับการพัฒนาเว็บ',
    },
    {
      day: 3,
      topic: 'JavaScript Fundamentals',
      material: 'link_to_material3',
      description: 'เรียนรู้พื้นฐานของ JavaScript เพื่อใช้ในการเขียนโปรแกรม',
    },
  ]

  return (
    <>
      {syllabusData.map((data, index) => (
        <DayCard data={data} key={index} />
      ))}
    </>
  )
}

export default SyallabusTable
