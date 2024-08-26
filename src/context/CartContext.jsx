/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const CartContext=createContext();

const initialState={
    cartItems:[]
}

function cartReducer(state,action){
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
            }
        case 'CLEAR_CART':
            return {...state,cartItems:[]}
        default:
            return state
    }
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,initialState)
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart=()=>useContext(CartContext)