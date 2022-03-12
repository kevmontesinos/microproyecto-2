import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth, googleProvider } from '../../utils/firebaseConfig';

function LoginModule() {

    const navigate = useNavigate();
    const[values,setValues] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (event) => {
        const { value, name: inputName } = event.target;
        console.log({ inputName, value });
        setValues({ ...values, [inputName]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(values.email, values.password);
        navigate.push('/');
    };

    const handleGoogleLogin = async () => {
        await auth.signInWithPopup(googleProvider);
        navigate.push('/');
      };

    return (
        <div className={styles.container}>
            <div className = {styles.formContainer}>
                <div className = {styles.styling}>
                    <h1 className={styles.title}>Login</h1>

                    <form onSubmit= {handleSubmit}>
                        <div className={styles.inputGroup}>
                            <input 
                                className={styles.inputs}
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleOnChange}
                                />
                                
                        </div>
                        <div className={styles.inputGroup}>
                            <input 
                                className={styles.inputs}
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleOnChange}
                                />
                        </div>
                        <div className={styles.inputGroup}>
                            <button className={styles.submits} type="submit" onClick={handleSubmit}>
                                Log in
                            </button>
                
                            <button className={styles.submits} type="button" onClick={handleGoogleLogin}>
                                <img className={styles.iconPic} src ="https://cdn.discordapp.com/attachments/374315817854173186/951963394842460180/google.png"></img>
                            </button>   
                        </div>
                        
                    </form>
                    
                </div>

            </div>    
        </div>
    );
}

export default LoginModule;