import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithGoogle } from '../firebase-config'
import UserContext from '../../currentUserContext'
import axios from 'axios'

export default function Signup() {
    const { updateUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const register = async () => {
       try {
        const registeredUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)

        await auth.currentUser.getIdToken().then(accessToken => {
            axios.post('https://gkeep-user-service.herokuapp.com/user',
            {
                userEmail: registerEmail
            }, {
                headers: {
                    'Authorization': `${accessToken}`
                }
            }
            )
            .then(res => {
                console.log(accessToken)
            })
            .catch(err => {
                console.log("error", err.message)
            })
        })
        .catch((error) => {
            console.log(error)
        })
        await signInWithEmailAndPassword(auth, registerEmail, registerPassword)
        updateUser(registeredUser)
        navigate('/main')
       } catch (error) {
        console.log(error.message)
       }
    }

    const googleLogin = async () => {
        signInWithGoogle().then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token)
            axios.post('https://gkeep-user-service.herokuapp.com/user', 
            {
                userEmail: result.email
            })
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
            updateUser(result)
            navigate('/main')
        }).catch((error) => { 
            console.log(error)
        })
    }

  return (
    <div class="bg-gray-700 flex content-center items-center justify-center h-[100vh] text-slate-600">
        <div class="flex flex-col items-center px-2 py-2 border-1 border-slate-500 bg-gray-300 h-[50vh] w-[50vh] rounded">
            <div class="pt-2 text-xl font-bold">Sign Up</div>
                <div class="flex flex-col px-3 pt-2 pb-7 w-5/6">
                    <label class="pb-1 pt-1">Email</label>
                    <input type="text" placeholder="Enter your email" class="rounded px-1 py-1 outline-none" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                    <label class="pb-1 pt-2">Password</label>
                    <input type="password" placeholder="Enter your password" class="rounded px-1 py-1 outline-none" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                </div>
            <div class="flex flex-row">
                <div class="pr-2">
                    <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={register}>
                        Sign Up
                    </button>
                </div>
                <div class="pl-2">
                    <button class="bg-violet-500 hover:bg-violet-700 text-white rounded px-3 py-1" onClick={googleLogin}>
                        Sign up with Google
                    </button>
                </div>
            </div>
            <div class="pt-3 pb-3 pr-1 text-lg">
                Already have an account? <Link class="underline decoration-inherit" to='login'>Log in!</Link>
            </div>
        </div>
    </div>
  )
}
