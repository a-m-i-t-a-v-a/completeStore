/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from '../styles/OTP.module.css'

function OTPVerification({setVerified}){
    const [otp,setOtp]=useState('')
    const [error,setError]=useState('')

    const handleOtpClick=()=>{
        if(otp==='123456'){
            setVerified(true)
        }else{
            setError('Invalid OTP')
        }
    }

    return (
        <div className={styles.otpcontainer}>
            <h2>Verify OTP</h2>
            {error && <p className={styles.error}>{error}</p>}
            <input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp}
                onChange={(e)=>setOtp(e.target.value)}
            />
            <button onClick={handleOtpClick}>Submit OTP</button>
        </div>
    )
}

export default OTPVerification