import React, { useEffect, useState } from 'react'
import Smallcard from '../card/Smallcard'
import axios from 'axios'
import { auth } from '../firebase-config'

export default function CharList({ setShowModal, setIsUpdate, email, setCurrentCharacter, setCharacterList, showModal }) {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        auth.currentUser.getIdToken().then(function(idToken) {
            const token = idToken
            console.log(token)
            axios.get(`http://localhost:8080/characters/`, {
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then(res => {
                    console.log("useEffect has run")
                    setCharacters(res.data)
            })
            .catch(err => {
                console.log("Character retrieval failed!")
            })
        })
    }, [showModal])

    useEffect(() => {
        setCharacterList(characters)
    }, [characters])


    return(
        <div class="flex flex-row flex-wrap">
            {characters.map(character => {
               return <Smallcard firstName={character.firstName} 
               lastName={character.lastName} 
               charClass={character.charClass} 
               charId={character._id} 
               setIsUpdate={setIsUpdate} 
               setShowModal={setShowModal}
               setCurrentCharacter={setCurrentCharacter}  />
            })}
        </div>
    )
}