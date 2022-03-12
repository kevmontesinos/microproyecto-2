import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';

function NavBar(){

    return (
        <div className={styles.navbarContainer}>
                <Link to="/" className={styles.link}>
                    <h1 className={styles.title}>NETFLIª</h1>
                </Link>
                <img className={styles.iconPic} src ="https://media.discordapp.net/attachments/840224626255724574/952030777867137024/spotify.png"></img> 
                <Link to="/login" className={styles.rightside}>
                    <div className={styles.pages}>Login</div>
                </Link>
                <Link to="/register" className={styles.farRight}>
                    <div className={styles.pages}>Register</div>
                </Link>
        </div>
    )
}

export default NavBar; 