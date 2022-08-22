import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import UserContext from '../../currentUserContext'
import { signInWithGoogle } from '../firebase-config'


export default function Login() {
    const { updateUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()

    const login = async () => {
        try {
            const loggedUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            updateUser(loggedUser)
            navigate('/main')
           } catch (error) {
            console.log(error.message)
           }
    }

    const googleLogin = async () => {
        signInWithGoogle().then((result) => {
            updateUser(result)
            navigate('/main')
        }).catch((error) => { 
            console.log(error)
        })
    }



  return (
    <div class="bg-gray-700 flex content-center items-center justify-center h-[100vh] text-slate-600">
    <div class="flex flex-col items-center px-2 py-2 border-1 border-slate-500 bg-gray-300 h-[50vh] w-[50vh] rounded">
        <div class="pt-2 text-xl font-bold">Log In</div>
            <div class="flex flex-col px-3 pt-2 pb-12 w-5/6">
                <label class="pb-1 pt-7">Email</label>
                <input type="text" placeholder="Enter your email" class="rounded px-1 py-1 outline-none" onChange={(event) => setLoginEmail(event.target.value)}/>
                <label class="pb-1 pt-5">Password</label>
                <input type="password" placeholder="Enter your password" class="rounded px-1 py-1 outline-none" onChange={(event) => setLoginPassword(event.target.value)}/>
            </div>
        <div class="flex flex-row pt-2.5">
            <div class="pr-2">
                <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={login} >
                    Log In
                </button>
            </div>
            <div class="pl-2">
                <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={googleLogin}>
                    Log in with Google
                </button>
            </div>
        </div>
        <div class="pt-3 pb-3 pr-1 text-lg">
            Don't have an account? <Link class="underline decoration-inherit" to='/'>Sign up!</Link>
        </div>
    </div>
</div>
  )
}
