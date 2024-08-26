/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const storedUser=JSON.parse(localStorage.getItem('user'));
        if(storedUser){
            setUser(storedUser)
        }
    },[])

    const login=(userInfo)=>{
        localStorage.setItem('user',JSON.stringify(userInfo));
        setUser(userInfo)
    }

    const logout=()=>{
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth=()=>useContext(AuthContext)