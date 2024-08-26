/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from '../styles/Login.module.css'

function Login({setAuthenticated}){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleLogin=()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        if(user && user.email===email && user.password===password){
            setAuthenticated(true)
        }else{
            setError('Invalid Credentials')
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <h2>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <input 
                    type="email" 
                    placeholder="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login