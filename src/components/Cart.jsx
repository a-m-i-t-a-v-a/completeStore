import { useCart } from "../context/CartContext"
import styles from '../styles/Cart.module.css'

function Cart(){
    const {cartItems,dispatch}=useCart();

    const removeItem=(item)=>{
        dispatch({type:'REMOVE_FROM_CART',payload:item})
    }

    return (
        <div className={styles.cartContainer}>
            <h2>Your Cart</h2>
            {cartItems?.length===0 && <h2>Your Cart is empty</h2>}
            <ul>
                {cartItems?.map((item)=>(
                    <li className={styles.cartItem} key={item.id}>
                        <img src={item.image} alt={item.title} className={styles.cartImage}/>
                        <div className={styles.cartDetails}>
                            <h3 className={item.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                            <p className={styles.cartPrice}>${item.price}</p>
                        </div>
                        <button onClick={()=>removeItem(item)} className={styles.removeButton}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart