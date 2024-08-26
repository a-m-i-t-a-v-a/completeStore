import { useState } from "react"
import Login from "../components/Login"

function LoginPage(){
    const [authenticated,setAuthenticated]=useState(false)
    if(authenticated){
        window.location.href='/otp'
    }
    return <Login setAuthenticated={setAuthenticated}/>
}

export default LoginPage