import React, {useState} from 'react';
import './registerPage.css';
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import Heading from "../../components/UI/Heading/Heading";
import {Link, useNavigate} from "react-router-dom";
import {registration} from "../../actions/user";

const RegisterPage = () => {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [errorEmptyField, setErrorEmptyField] = useState(false);
    const navigate = useNavigate();

    const signUp = async (nickname, email, password) => {
        try {
            await registration(nickname, email, password);
            navigate('/login');
        } catch (e) {
            setError(e.message || 'Registration failed. Please try again.');
        }
    };

    const registerCheck = async (nickname, email, password, repeatPassword) => {
        if (!nickname || !email || !password || !repeatPassword) {
            setError('Please fill in all fields.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Invalid email format. Please enter a valid email.');
            return;
        }

        if (password !== repeatPassword) {
            setError('Passwords do not match. Please try again.');
            return;
        }

        setError('');
        await signUp(nickname, email, password);
    };




    return (
        <div className='register-page-wrapper'>
            <div className='register-page-logo'>
                <Link className='register-page-logo' to='/'><span>Time<span className='register-page-purple'>Wanderer</span></span></Link>
            </div>
            <div className='register-page-content'>
                <div className='register-page-right'></div>
                <div className='register-page-left'>
                    <Heading>Sign Up</Heading>
                    <div className='register-page-input'>
                        {error && <div className='register-error'>{error}</div>}
                        <Input value={nickname} setValue={setNickname} placeholder='Login'/>
                        <Input value={email} setValue={setEmail} placeholder='E-mail'/>
                        <Input value={password} setValue={setPassword} placeholder='Password'/>
                        <Input value={repeatPassword} setValue={setRepeatPassword} placeholder='Confirm password'/>
                    </div>
                    <Button onClick={() => registerCheck(nickname, email, password, repeatPassword)}>Sign up</Button>
                    <span className='register-sign-in'>Already have an account? <Link to='/login'><span className='sign-in-text'>Sign In</span></Link></span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;