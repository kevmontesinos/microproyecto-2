import styles from './RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../utils/firebaseConfig';
import { useState, useContext } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"
import { sessionContext } from '../../context/SessionContext';

function RegisterForm() {
  const navigate = useNavigate();
  const [session, setSession] = useContext(sessionContext)

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const sessionCheck = (response) => {
    const user =
    {
      name: response.user.displayName,
      email: response.user.email,
      id: response.user.uid
    }
    setSession(user);
    console.log(user.id)
    navigate("/movies?page=1&&search=")
  }

  const handleGoogleLogin = async () => {
    const response = await signInWithPopup(auth, googleProvider)
    sessionCheck(response)

  };

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    setValues({ ...values, [inputName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUserWithEmailAndPassword(auth,
      values.email,
      values.password
    );
    sessionCheck(response)
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.styling}>
          <h1 className={styles.title}>Register</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>

              <input
                className={styles.inputs}
                name="name"
                id="name"
                type="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleOnChange}
              />

            </div>

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
                Register
              </button>

              <button className={styles.submits} type="button" onClick={handleGoogleLogin}>
                <img className={styles.iconPic} src="https://cdn.discordapp.com/attachments/374315817854173186/951963394842460180/google.png"></img>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default RegisterForm;
