import { useEffect, useState } from "react"
import styles from '../styles/ProductList.module.css'
import { Link } from "react-router-dom";

function ProductList(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [page,settPage]=useState(1);
    const [error,setError]=useState('')

    const fetchProducts=async()=>{
        try{
            setLoading(true)
            const response=await fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`);
            const data=await response.json();
            setProducts((prev)=>[...prev,...data])
            setLoading(false)
        }catch(err){
            setError(err)
        }
    }

    const loadMore=()=>{
        settPage(prev=>prev+1)
        setLoading(true)
    }

    useEffect(()=>{
        fetchProducts()
    },[page])

    return (
        <div className={styles.productListContainer}>
            <div className={styles.productList}>
                {!products && <p className={styles.error}>{error}</p>}
                {products.map((product)=>(
                    <div key={product.id} className={styles.productCard}>
                      <img src={product.image} alt={product.title} className={styles.productImage}/>
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <p className={styles.productPrice}>${product.price}</p>
                      <Link to={`/product/${product.id}`} className={styles.viewButton}>View</Link>
                    </div>
                ))}
            </div>
            <button onClick={loadMore} className={styles.loadMoreButton}>
                {loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
    )
}

export default ProductList