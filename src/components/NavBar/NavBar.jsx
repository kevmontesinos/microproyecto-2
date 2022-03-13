import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { auth } from "../../utils/firebaseConfig";

function NavBar() {

    const user = false;
    const handleLogOut = () => {
        auth.signOut()
    }

    return (
        <div className={styles.navbarContainer}>
            <Link to="/" className={styles.link}>
                <h1 className={styles.title}>NETFLIª</h1>
            </Link>
            {!user ?
                (<>
                    <img className={styles.iconPic} src="https://media.discordapp.net/attachments/840224626255724574/952030777867137024/spotify.png"></img>
                    <Link to="/login" className={styles.rightside}>
                        <div className={styles.pages}>Login</div>
                    </Link>
                    <Link to="/register" className={styles.farRight}>
                        <div className={styles.pages}>Register</div>
                    </Link>
                </>) :
                <>
                    {user.name}
                    <button type="button" onClick={handleLogOut}>Log Out</button>
                </>}
        </div>
    )
}

export default NavBar; 