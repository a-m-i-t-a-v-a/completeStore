import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import styles from '../styles/Header.module.css';
import { useState } from "react";

function Header() {
    const { user, logout } = useAuth();
    const { state: { cartItems } } = useCart(); 
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to='/' className={styles.logo}>My Store</Link>
            </div>
            <nav className={styles.nav}>
                {user ? (
                    <>
                        <Link to='/products' className={styles.navlink}>Products</Link>
                        <Link to='/cart' className={styles.navlink}>Cart ({cartItems.length})</Link>
                        <div className={styles.userContainer}>
                            <span className={styles.username}>Welcome {user.email}</span>
                            <button className={styles.dropdownBtn} onClick={handleToggle}>▼</button>
                            {toggle && (
                                <div className={styles.dropdown}>
                                    <Link to='/profile' className={styles.dropdownItem}>Profile</Link>
                                    <Link to='/items' className={styles.dropdownItem}>Items</Link>
                                    <button className={styles.dropdownItem} onClick={logout}>Logout</button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <Link to='/login' className={styles.navlink}>Login</Link>
                        <Link to='/register' className={styles.navlink}>Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
