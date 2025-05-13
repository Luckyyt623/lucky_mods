import {Navigate , Outlet} from 'react-router-dom' 
export default function ProtectedRoutes( {  user, redirect} : {user: boolean | null , redirect: string}) {
  

    if (user !== null) {
        if (user) {
            
            return <Outlet/>
        }
        else{
            return <Navigate to={redirect}/>
        }
    }


}
