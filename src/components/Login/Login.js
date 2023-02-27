import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import NavArea from '../NavArea/NavArea';
import './Login.css';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';




const app = initializeApp(firebaseConfig);

const Login = () => {
    const [isOldUser, setIsOldUser] = useState(false);
    const [user, setUser,isLoggedIn, setIsLoggedIn] = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (!isEmailValid) {
            alert('Please enter a valid email');
            return;
        }
        const password = document.getElementById('password').value;
        const isPasswordValid = password.length >= 6;
        if (!isPasswordValid) {
            alert('Please enter a valid password');
            return;
        }
        if (!isOldUser) {
            const confirmPassword = document.getElementById('confirmPassword').value;
            const isPassMatched = password === confirmPassword;
            if (!isPassMatched) {
                alert('Passwords do not match');
                return;
            }
        }

        if (!isOldUser) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert(`Welcome ${user.email}!`);
                    const newUser = {
                        name: document.getElementById('name').value,
                        email: email
                    }
                    setUser(newUser);
                    setIsLoggedIn(true);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                });
        }
        else {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert(`Welcome ${user.email}!`);
                    const newUser = {
                        name: document.getElementById('name').value,
                        email: email
                    }
                    setUser(newUser);
                    setIsLoggedIn(true);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
    }


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                alert(`Welcome ${user.email}!`);
                const newUser = {
                    name: document.getElementById('name').value,
                    email: user.email
                }
                setUser(newUser);
                setIsLoggedIn(true);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(errorMessage);
                // ...
            });
    }


    return (
        <div className='bg-container-login'>
            <NavArea></NavArea>
            <Container className='d-flex justify-content-center'>
                <div className="login-form-container">
                    <form onSubmit={handleSubmit}>
                        <h3>
                            {
                                isOldUser ? 'Login' : 'Create an account'
                            }
                        </h3>
                        {
                            !isOldUser &&
                            <input type="text" placeholder='First Name' id='name' className='login-form-inp' required />
                        }
                        {
                            !isOldUser && <input type="text" placeholder='Last Name' className='login-form-inp' required />
                        }
                        <input type="email" placeholder='Email' id='email' className='login-form-inp' required />
                        <input type="password" placeholder='Password' id='password' className='login-form-inp' required />
                        {
                            !isOldUser && <input type="password" placeholder='Confirm Password' id='confirmPassword' className='login-form-inp' required />
                        }
                        {
                            !isOldUser ? <input type="submit" value="Create an account" className='login-btn w-100' /> :
                                <input type="submit" value="Login" className='login-btn w-100' />
                        }
                    </form>
                    {
                        !isOldUser ?
                            <p className='text-center mt-3 '>Already have an account ? <span className='highlight login' onClick={() => setIsOldUser(!isOldUser)}>Login</span></p>
                            : <p>Don't have an account? <span className='highlight login' onClick={() => setIsOldUser(!isOldUser)} >Open Account</span></p>
                    }
                </div>

            </Container>
            <h4 className='text-center text-white mt-2'> Continue with <span className='highlight login' onClick={handleGoogleSignIn}>Google</span> </h4>
        </div>
    );
};

export default Login;