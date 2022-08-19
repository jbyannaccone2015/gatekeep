import React, { createContext, useState } from 'react'


const UserContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState(null)

    const updateUser = (user) => {
        setUser(user)
    }

    return(
        <UserContext.Provider value={{user,updateUser}}>
                {children}
        </UserContext.Provider>
    )
}

export default UserContext


