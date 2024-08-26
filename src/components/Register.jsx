import { useState } from "react"
import { Link } from "react-router-dom";
import styles from '../styles/Reegister.module.css'
import { useAuth } from "../context/AuthContext";

function Register(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const {login}=useAuth()

    const validateEmail=(email)=>/\S+@\S+\.\S+/.test(email);

    const handleRegister=()=>{
        if(!validateEmail(email)){
            setError('Invalid address!!');
            return
        }
        if(password!==confirmPassword){
            setError('Password do not match!')
            return
        }
        localStorage.setItem('user',JSON.stringify({email,password}))
        login({email,password})
        window.location.href='/login'
    }

    return (
        <div className={styles.registerContainer}>
          <div className={styles.registerform}>
            <h2>Register</h2>
            {error && <p className={styles.error}>{error}</p>}
            <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <button onClick={handleRegister}>Register</button>
            <span>
                Already have an account? <Link to='/login'>Login here</Link>
            </span>
          </div>
        </div>
    )
}

export default Register