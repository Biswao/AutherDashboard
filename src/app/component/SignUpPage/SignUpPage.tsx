// pages/signup.js
import './SignUpPage.css';

export default function Signup({setAutho}:any) {
  return (
    <div className='container'>
      <div className='leftSection'>
        <h1>SIGN UP</h1>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <input type="text" placeholder="Enter your first name" />
          <input type="text" placeholder="Enter your last name" />
          <input type="password" placeholder="Enter your Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="tel" placeholder="Enter your Phone Number" />
          <select>
            <option>-Select a Country-</option>
            {/* Add country options here */}
          </select>
          <select>
            <option>-How did you find us-</option>
            {/* Add options here */}
          </select>
          <div className='checkboxContainer'>
            <input type="checkbox" />
            <label>
              I have read and agreed to your <a href="#">Service Agreement</a>, <a href="#">Terms of Service</a>, and <a href="#">Privacy Policy</a>.
            </label>
          </div>
          <div className='checkboxContainer'>
            <input type="checkbox" />
            <label>I want to subscribe to Manuscriptedit newsletter.</label>
          </div>
          <div className='captcha'>
            <img src="/captcha.png" alt="Captcha" /> {/* Replace with actual captcha */}
            <input type="text" placeholder="Security Code" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className='rightSection'>
        <h2>Have an Account?</h2>
        <p>Log in with your e-mail address and your password.</p>
        <button onClick={()=>{
          setAutho(false)
        }}>LOGIN</button>
        <a href="#">Go to Home →</a>
      </div>
    </div>
  );
}
