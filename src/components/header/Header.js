import React, { useContext } from 'react'
import { auth } from '../firebase-config'
import {  signOut, onAuthStateChanged } from 'firebase/auth'
import { IoIosMenu, 
         IoMdSearch, 
         IoIosRefresh, 
         IoMdList, 
         IoIosOptions, 
         IoMdApps,
         IoIosLogOut } from 'react-icons/io'
import UserContext from '../../currentUserContext'
import { TbBuildingCastle } from "react-icons/tb";


export default function Header() {
    const { user, updateUser } = useContext(UserContext)

    onAuthStateChanged(auth, (currentUser) => {
        updateUser(currentUser)
    })

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <div class="flex content-center pt-1.5 pb-2 text-white h-[8vh]">
        <div class="pl-3 pr-10 pt-2"><IoIosMenu size={30}/></div>
        <div class="pl-2 pr-2 pt-2"><button>
                <TbBuildingCastle class="hover:text-violet-600" size={30} />
            </button>
        </div>
        <div class="pr-10 pt-2.5 font-medium">GATEKEEP</div>
        <div class="pr-3 pt-1 font-medium w-2/3">
            <div class=" flex bg-gray-500 rounded">
                <button class="px-1 py-1"><IoMdSearch size={20} /></button>
                <input class="bg-gray-500 rounded py-1.5 w-2/3 outline-none font-bold" type="text" placeholder="Search..."/>
            </div>
        </div>
        <div class="pl-10 pr-3 pt-2"><IoIosRefresh size={30}/></div>
        <div class="pr-3 pt-2"><IoMdList size={30}/></div>
        <div class="pr-3 pt-2"><IoIosOptions size={30}/></div>
        <div class="pl-10 pr-2 pt-2"><IoMdApps size={30}/></div>
        <div class="pl-3 pr-2 pt-1">
            <div class="flex flex-row border-2 border-slate-500 rounded px-1 py-1">
                <div class="pl-1">
                    { user.email }
                </div>
                <div class="pl-1 pt-1">
                    <button onClick={logout}>
                        <IoIosLogOut size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
