import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext";
import styles from '../styles/ProductDetail.module.css'

function ProductDetail(){
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const {dispatch}=useCart()

    const fetchProducts=async()=>{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        const data=await response.json();
        setProduct(data)
    }

    useEffect(()=>{
        fetchProducts()
    },[id])

    const addToCart=()=>{
        dispatch({type:'ADD_TO_CART',payload:product})
    }

    return (
        <div className={styles.productDetailContainer}>
            {product && (
                <div className={styles.productDetail}>
                    <img src={product.image} alt={product.title} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>{product.title}</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>${product.price}</p>
                    <button className={styles.addButton} onClick={addToCart}>Add to Cart</button>
                </div>
            )}
        </div>
    )
}

export default ProductDetail