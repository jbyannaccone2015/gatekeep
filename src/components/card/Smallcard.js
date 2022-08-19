import React, { useState } from 'react'
import { IoMdCreate } from 'react-icons/io'

export default function Smallcard({setShowModal, setIsUpdate, firstName, lastName, charClass, setCurrentCharacter, charId}) {
    const [selectedCharacter, setSelectedCharacter] = useState({
        charId: charId,
        firstName: firstName,
        lastName: lastName,
        charClass: charClass
    })

    const toggleModal = async () => {
        setCurrentCharacter(selectedCharacter)
        setShowModal(true)
        setIsUpdate(true)
    }

    return(
        <div class="pl-2 pr-2 pb-4">
            <div class="bg-gray-500 w-[15vh] h-[15vh] border-black border-2 rounded">
                <div class="flex flex-col items-center content-center justify-center">
                    <div class="text-sm font-semibold pt-5">{firstName}</div>
                    <div class="text-sm font-semibold">{lastName}</div>
                    <div class="text-sm italic pt-2">{charClass}</div>
                </div>
                <button class="pl-1" onClick={toggleModal}><IoMdCreate /></button>
            </div>
        </div>
    )
}