import React, { useContext, useEffect, useState } from 'react';
import './styles/main.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/signup/Signup';
import Header from './components/header/Header'
import Body from './components/body/Body'
import Login from './components/login/Login';
import ProtectedRoute from './ProtectedRoute';
import UserContext from './currentUserContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase-config';


function App() {
  const { updateUser } = useContext(UserContext)
  const [localUser, setLocalUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setLocalUser(currentUser)
      updateUser(currentUser)
      setLoading(false)
    })
  }, [])


  return (
  <div class="bg-gray-700">
    {!loading && 
      <BrowserRouter class="bg-gray-700">
      <Routes>
        <Route path='/' element={<div class="bg-gray-700"><Signup /></div>} />
        <Route path='login' element={<div><Login /></div>} />
        <Route element={<ProtectedRoute user={localUser} />}>
          <Route path='main' element={              
            <div class="divide-y divide-slate-500 bg-gray-700">
              <Header />
              <Body />
            </div>} />  
        </Route>
        <Route path='testing' />
      </Routes>
    </BrowserRouter>
    }
  </div>

  );
}

export default App;
