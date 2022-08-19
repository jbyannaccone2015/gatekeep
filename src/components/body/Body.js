import React, {useContext, useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
import CharList from './charList'
import UserContext from '../../currentUserContext'
import CharEnter from './charEnter'

export default function Body() {
  const { user } = useContext(UserContext)
  const email = user.email
  const [showModal, setShowModal] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentCharacter, setCurrentCharacter] = useState()
  const [characterList, setCharacterList] = useState()

  return (
    <div class="flex flex-row justify-start items-start bg-gray-700 h-[92vh] text-white">
      <Sidebar />
      <div class="flex flex-col rounded border-1 border-white justify-center w-[54vw] pt-5 pr-12">
        <div>
          <Searchbar setShowModal={setShowModal} setIsUpdate={setIsUpdate} />
        </div>
        <div class="flex flex-row content-center items-center pt-5">
          <div class="grid-cols-4">
              <CharList email={email} 
                        setShowModal={setShowModal} 
                        setIsUpdate={setIsUpdate} 
                        isUpdate={isUpdate} 
                        setCurrentCharacter={setCurrentCharacter}
                        setCharacterList={setCharacterList}
                        characterList={characterList}
                        showModal={showModal} />
              </div>
              { showModal ?  (<CharEnter setShowModal={setShowModal} 
                isUpdate={isUpdate} 
                currentCharacter={currentCharacter} 
                characterList={characterList}
                setCharacterList={setCharacterList}
                setCurrentCharacter={setCurrentCharacter} />) : null }
        </div>
      </div>
    </div>
  )
}
