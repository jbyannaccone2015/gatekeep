import React from 'react'
import Backstory from './Backstory'
import Stats from './Stats'
import Name from './Name'
import Smallcard from './Smallcard'

export default function Card() {
  return (
    <div class="bg-gray-700 content-center items-center justify-center h-[100vh]">
        <Name />
        <Stats />
        <Backstory />
    </div>
  )
}