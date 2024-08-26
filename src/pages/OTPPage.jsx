import { useState } from "react"
import OTPVerification from "../components/OTPVerification";

function OTPPage(){
    const [verified,setVerified]=useState(false);
    if(verified){
        window.location.href='/products'
    }
    return <OTPVerification setVerified={setVerified}/>
}

export default OTPPage