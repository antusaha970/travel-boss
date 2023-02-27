import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import NavArea from '../NavArea/NavArea';
import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [isOldUser, setIsOldUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;



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
            <h4 className='text-center text-white mt-2'> Continue with <span className='highlight login'>Google</span> </h4>
        </div>
    );
};

export default Login;