// components/Login.js
import Link from 'next/link';
import './Login.css';
import useSignin from '@/app/hooks/authorDashboard/useSignin';
import { FormEvent, useState } from 'react';

const Login = ({setAutho}:any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login, loading, error } = useSignin();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        await login(email, password);
    };
    return (
        <div className="container">
            <div className="leftSection">
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="UserName or Email" className="inputField" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="inputField" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="rememberForgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link href="/forgot-password" className="forgotPassword">
                            Forgot Password?
                        </Link>
                    </div>
                    <button type="submit" className="loginButton">{loading ? 'Logging in...' : 'LOG IN'}</button>
                    {error && <p className="errorMessage">{error}</p>}
                </form>
            </div>
            <div className="rightSection">
                <h2>Have an Account?</h2>
                <p>Log in with your e-mail address and your password.</p>
                    <button className="signupButton" onClick={()=>{
                        setAutho(true)
                    }}>SIGN UP</button>
                <Link href="/" className="goToHome">Go to Home ➔</Link>
            </div>
        </div>
    );
};

export default Login;
