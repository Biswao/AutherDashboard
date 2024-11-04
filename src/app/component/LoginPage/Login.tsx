// components/Login.js
import Link from 'next/link';
import './Login.css';

const Login = ({setAutho}:any) => {
    // setAutho(true)
    
    return (
        <div className="container">
            <div className="leftSection">
                <h2>Login</h2>
                <form className="form">
                    <input type="text" placeholder="UserName or Email" className="inputField" />
                    <input type="password" placeholder="Password" className="inputField" />
                    <div className="rememberForgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link href="/forgot-password" className="forgotPassword">
                            Forgot Password?
                        </Link>
                    </div>
                    <button type="submit" className="loginButton">LOG IN</button>
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
