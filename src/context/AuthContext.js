/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AUthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    const login=(userInfo)=>{
        localStorage.setItem('user',JSON.stringify(userInfo));
        setUser(userInfo)
    }

    const logout=()=>{
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <AUthContext.Provider value={{user,login,logout}}>
            {children}
        </AUthContext.Provider>
    )
}

export const useAuth=()=>useContext(AUthContext)