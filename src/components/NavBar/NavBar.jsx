import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { sessionContext } from '../../context/SessionContext';
import { useNavigate } from "react-router-dom";


function NavBar() {

    const [session, setSession] = useContext(sessionContext)
    const navigate = useNavigate();
    const logout = async () => {
        setSession(null);
        navigate('/login');
    }

    return (
        <div className={styles.navbarContainer}>
            <Link to="/" className={styles.link}>
                <h1 className={styles.title}>NETFLIª</h1>
            </Link>
            <img className={styles.iconPic} src="https://media.discordapp.net/attachments/840224626255724574/952030777867137024/spotify.png"></img>
            {session == null ? <><Link to="/login" className={styles.rightside}>
                <div className={styles.pages}>Login</div>
            </Link>
                <Link to="/register" className={styles.farRight}>
                    <div className={styles.pages}>Register</div>
                </Link></> :
                <>
                    
                    <div onClick={logout} className={styles.rightside}>
                        <div className={styles.pages}>Logout</div>
                    </div>
                    <div className={styles.pages} >{session.email.substring(0,session.email.indexOf("@"))}</div>
                </>
            }
        </div>
    )
}


export default NavBar; 