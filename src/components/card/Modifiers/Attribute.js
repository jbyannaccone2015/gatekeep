import React from 'react'

export default function Attribute(props) {
  return (
    <div class="flex flex-col justify-center align-center items-center px-2 py-.5">
        <div name="Attribute" class="flex flex-col justify-center align-center items-center">
            <div class="pt-1.5 text-xs font-bold">{props.attribute}</div>
            <div><input type="text" class="w-9 outline-none bg-gray-200 h-9 text-center border-black border-2 rounded" /></div>
            <div class="pt-.5"><input type="text" class="w-7 outline-none bg-gray-200 h-4 text-center text-sm border-black border-2 rounded" /></div>
        </div>
    </div>
  )
}