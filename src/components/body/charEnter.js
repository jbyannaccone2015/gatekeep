import React, { useState, useContext } from "react";
import axios from 'axios'
import UserContext from '../../currentUserContext'
import Smallcard from "../card/Smallcard";

export default function CharEnter({ setShowModal, isUpdate, currentCharacter, characterList, setCharacterList, setCurrentCharacter }) {
    const [newCharFirstName, setNewCharFirstName] = useState()
    const [newCharLastName, setNewCharLastName] = useState()
    const [newCharClass, setNewCharClass] = useState()
    const [updatedFirstName, setUpdatedFirstName] = useState()
    const [updatedLastName, setUpdatedLastName] = useState()
    const [updatedClass, setUpdatedClass] = useState()
    const { user } = useContext(UserContext)
    const email = user.email

    const newCharacter = async () => {
        axios.post(`https://cors-anywhere.herokuapp.com/https://gkeep-character-service.herokuapp.com/character/`, {
            user: email,
            firstName: newCharFirstName,
            lastName: newCharLastName,
            charClass: newCharClass
        })
        .then(res => {
            console.log("Character successfully created!")
            characterList.push(res.data)
            setShowModal(false)
        })
        .catch(err => {
            console.log("Character creation failed!")
        })
    }


    const deleteCharacter = async () => {
        axios.delete(`https://cors-anywhere.herokuapp.com/https://gkeep-character-service.herokuapp.com/character/${currentCharacter.charId}`)
        .then(res => {
            console.log("Character successfully deleted!")
            const index = characterList.indexOf(res.data)
            characterList.splice(index, 1)
            setShowModal(false)
        })
        .catch(err => {
            console.log("Character deletion failed!")
        })
    }

    const updateCharacter = async () => {
        axios.patch(`https://cors-anywhere.herokuapp.com/https://gkeep-character-service.herokuapp.com/character/${currentCharacter.charId}`, 
        {
            firstName: updatedFirstName,
            lastName: updatedLastName,
            charClass: updatedClass
        })
        .then(res => {
            console.log("Character successfully updated!")
            console.log(currentCharacter)
            const newList = characterList.map(character => {
                if(character._id === currentCharacter.charId) {
                    setCurrentCharacter(res.data)
                    return res.data
                }
                
                return character
            })
            setCharacterList(newList)
            setShowModal(false)
        })
        .catch(err => {
            console.log("Character update failed!")
        })
    }


    return(
        <div class="fixed flex inset-0 backdrop-blur-sm bg-opacity-30 content-center items-center justify-center h-[100vh] text-white">
                <div class="border-2 border-slate-500 px-4 py-4 rounded bg-gray-700">
                    <div class="flex flex-col">
                        <div>Character First Name:</div>
                        { isUpdate ? (<div><input type="text" class="rounded px-1 py-1 outline-none bg-gray-500" defaultValue={currentCharacter.firstName} onChange={(event) => setUpdatedFirstName(event.target.value)} /></div>) : 
                        (<div><input type="text" class="rounded px-1 py-1 outline-none bg-gray-500" onChange={(event) => setNewCharFirstName(event.target.value)} /></div>)}
                        <div>Character Last Name</div>
                        { isUpdate ? (<div><input type="text" class="rounded px-1 py-1 outline-none bg-gray-500" defaultValue={currentCharacter.lastName} onChange={(event) => setUpdatedLastName(event.target.value)}/></div>) : 
                        (<div><input type="text" class="rounded px-1 py-1 outline-none bg-gray-500" onChange={(event) => setNewCharLastName(event.target.value)}/></div>)}
                        <div>Character Class</div>
                        {isUpdate ? (<div><input type="text" class="rounded px-1 py-1 outline-none bg-gray-500" defaultValue={currentCharacter.charClass} onChange={(event) => setUpdatedClass(event.target.value)}/></div>) :
                        (<div><input type="text" class="rounded px-1 py-1 outline-none bg-gray-500" onChange={(event) => setNewCharClass(event.target.value)}/></div>)}
                    </div>
                    <div class="flex flex-row pt-2">
                        <div class="pr-3">
                            { isUpdate ? (<div class="flex flex-row"><div class="pr-1"><button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={updateCharacter}>Update</button></div>
                            <div class="pl-1"><button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={deleteCharacter}>Delete</button></div>
                            </div>) : 
                            <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={newCharacter}>Create</button> }
                        </div>
                        <div class="pl-3">
                            <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}