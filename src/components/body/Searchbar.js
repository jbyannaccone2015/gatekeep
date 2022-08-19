import React from 'react'
import { IoMdBrush, IoIosImage, IoIosAdd } from 'react-icons/io'

export default function Searchbar({ setShowModal, setIsUpdate }) {

  const creatingSet = () => {
    setShowModal(true)
    setIsUpdate(false)
  }

    return(
        <div class="flex flex-row bg-gray-500 rounded w-[42vw]">
            <div class="w-1/2 items-center justify-end">
                <input class="bg-gray-500 rounded pt-2.5 pb-2.5 pl-1 pr-5 w-2/3 outline-none font-semibold text-lg" type="text" placeholder="Find a character..."/>
            </div>
        <div class="w-1/2 flex flex-row items-center justify-end">
          <button class="pl-20 pr-2" onClick={creatingSet}><IoIosAdd size={25}/></button>
          <div class="pl-1 pr-2"><IoMdBrush size={25}/></div>
          <div class="pl-1 pr-3"><IoIosImage size={25}/></div>
        </div>
      </div>
    )
}