import React from 'react'
import { IoIosStopwatch, IoMdCreate, IoIosArchive, IoMdTrash } from 'react-icons/io'
import { TbBuildingCastle } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div class="w-[33vw] pt-3">
    <div class="w-2/3 bg-violet-300/50 rounded-r-full pl-4 pt-1.5 pb-1.5">
      <button class="flex flex-row pt-2 pb-2">
        <TbBuildingCastle size={25}/>
        <div class="pl-12 text-lg">Notes</div>
      </button>
    </div>
    <div class="w-2/3 bg-none hover:bg-slate-500/50 rounded-r-full pl-4 pt-1.5 pb-1.5">
      <button class="flex flex-row pt-2 pb-2">
        <IoIosStopwatch size={25}/>
        <div class="pl-12 text-lg">Reminders</div>
      </button>
    </div>
    <div class="w-2/3 bg-none hover:bg-slate-500/50 rounded-r-full pl-4 pt-1.5 pb-1.5">
      <button class="flex flex-row pt-2 pb-2">
        <IoMdCreate size={25}/>
        <div class="pl-12 text-lg">Edit Labels</div>
      </button>
    </div>
    <div class="w-2/3 bg-none hover:bg-slate-500/50 rounded-r-full pl-4 pt-1.5 pb-1.5">
      <button class="flex flex-row pt-2 pb-2">
        <IoIosArchive size={25}/>
        <div class="pl-12 text-lg">Archive</div>
      </button>
    </div>
    <div class="w-2/3 bg-none hover:bg-slate-500/50 rounded-r-full pl-4 pt-1.5 pb-1.5">
      <button class="flex flex-row pt-2 pb-2">
        <IoMdTrash size={25}/>
        <div class="pl-12 text-lg">Trash</div>
      </button>
    </div>
  </div>
  )
}