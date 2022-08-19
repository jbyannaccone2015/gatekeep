import React from 'react'

export default function Saving(props) {
    return(
        <div class="flex flex-row items-center pb-1 text-xs">
            <input type="text" class="w-5 outline-none bg-gray-200 h-3" />
            <div class="pl-1 italic">{props.saving}</div>
        </div>
    )
}