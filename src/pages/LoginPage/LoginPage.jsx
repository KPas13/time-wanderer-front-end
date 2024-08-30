import React, {useState} from 'react';
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import Heading from "../../components/UI/Heading/Heading";
import './loginPage.css';
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../actions/user";

const LoginPage = () => {

    const[nickname, setNickname] = useState('');
    const[password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorEmptyInput, setErrorEmptyInput] = useState(false);
    const navigate = useNavigate();

    const signIn = async (nickname, password) => {
        try {
            await login(nickname, password);
            navigate('/profile');
        } catch (e) {
            setError(true);
            console.log('Login failed:', e.message);
        }
    };


    const loginCheck = async (nickname, password) => {
        if (!nickname || !password) {
            setErrorEmptyInput(true);
            setError(false);
            return;
        }
        setErrorEmptyInput(false);
        setError(false);
        await signIn(nickname, password);
    };


    return (
        <div className='login-page-wrapper'>
            <div className='login-page-logo'>
                <Link className='login-page-logo' to='/'><span className='login-logo'>Time<span
                    className='login-logo-purple'>Wanderer</span></span></Link>
            </div>
            <div className='login-page-content'>
                <div className='login-page-left'>
                    <div className='login-page-google-or'>
                        <Button>Sign in with Google</Button>
                        <div className='login-or-text'>
                            <div className='divider'></div><span>or</span><div className='divider'></div>
                        </div>
                    </div>
                    <div className='login-inputs-block'>
                        <Heading>Sign in</Heading>
                        {errorEmptyInput && <div className='login-error'>Please fill in all fields</div>}
                        {error && !errorEmptyInput && <div className='login-error'>Incorrect nickname or password</div>}
                        <Input placeholder='Nickname' value={nickname} setValue={setNickname} />
                        <div className='login-password-block'>
                            <span className='login-page-forgot'>Forgot password?</span>
                            <Input placeholder='Password' type='password' value={password} setValue={setPassword}/>
                        </div>
                        <div className='sign-in-block'>
                            <Button onClick={() => loginCheck(nickname, password)} className='sign-in-button'>Sign in</Button>
                        </div>
                    </div>
                    <span className='login-sign-up-text'>Don’t have an account? <Link className='link-sign-up'
                                                                                      to='/register'><span
                        className='sign-up-purple'>Sign Up</span></Link></span>
                </div>
                <div className='login-page-right'></div>
            </div>
        </div>
    );
};

export default LoginPage;