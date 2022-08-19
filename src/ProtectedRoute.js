import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = (user, isLoggedIn) => {

    return (
       user.user ?  <Outlet /> : <Navigate to='/'/>
    ) 

}


export default ProtectedRoute