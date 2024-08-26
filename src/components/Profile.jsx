import { useAuth } from "../context/AuthContext"
import styles from '../styles/Profile.module.css'

function Profile(){
    const {user}=useAuth()

    return (
        <div className={styles.profileContainer}>
            <h2>Profile</h2>
            {user ? (
                <div className={styles.profileInfo}>
                    <p>Email : {user.email}</p>
                </div>
            ) : (
                <p>NO user info available</p>
            )}
        </div>
    )
}

export default Profile