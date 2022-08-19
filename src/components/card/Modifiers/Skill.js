import React from 'react'

export default function Skill(props) {
    return(
        <div class="flex flex-row items-center text-xs pb-.5 pr-1">
            <input type="text" class="w-5 outline-none bg-gray-200 h-3" />
            <div class="pl-1 italic">{props.skill}</div>
        </div>
    )
}