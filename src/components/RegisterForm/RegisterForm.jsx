import styles from './RegisterForm.module.css';
// import { useHistory } from 'react-router-dom';
import { auth } from '../../utils/firebaseConfig';
import { useState } from 'react';


function RegisterForm() {
//   const history = useHistory();
//   const { createUser } = useContext(UserContext);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleGoogleLogin = async () => {
    console.log('GOOGLE_LOGIN');
  };

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    console.log({ inputName, value });
    setValues({ ...values, [inputName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );

    await createUser(
      {
        name: values.name,
        email: values.email,
        favorites: [],
        role: 'admin',
      },
      response.user.uid
    );
    history.push('/');

    console.log(response.user.uid);
  };

  return (
    <div className={styles.container}>
            <div className = {styles.formContainer}>
                <form onSubmit= {handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email"><h3>Enter your email</h3></label>
                        <input 
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password"><h3>Enter your password</h3></label>
                        <input 
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name"><h3>Enter your name</h3></label>
                        <input 
                            name="name"
                            id="name"
                            type="name"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleOnChange}
                            />
                    </div>
                    <button type="submit" onClick={handleSubmit}>
                    Send
                    </button>
                </form>
                <button type="button" onClick={handleGoogleLogin}>
                    <img className={styles.iconPic} src ="https://cdn.discordapp.com/attachments/374315817854173186/951963394842460180/google.png"></img>
                </button>
            </div>    
        </div>
  );
}

export default RegisterForm;
