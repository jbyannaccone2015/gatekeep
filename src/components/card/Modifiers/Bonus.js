import React from "react";

export default function Bonus(props) {
    return(
        <div name="inspiration" class="flex flex-row items-center text-xs pt-2">
            <input type="button" class="w-5 outline-none bg-gray-200 h-3" value=""/>
            <div class="pl-1">{props.bonus}</div>
        </div>
    )
}