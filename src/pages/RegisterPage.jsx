import { useState } from "react"
import Register from "../components/Register"

function RegisterPage(){
    const [registered,setRegistered]=useState(false)
    if(registered){
        window.location.href='/login'
    }
    return <Register setRegistered={setRegistered}/>
}

export default RegisterPage