"use client"
import { SignupData } from '@/app/utils/interfaces/types';
import './SignUpPage.css';
import { useState } from 'react';
import { useSignup } from '@/app/hooks/authorDashboard/useSignup';

export default function Signup({setAutho}:any) {
  const [formData, setFormData] = useState<SignupData>({
    email: '',
    pswd: '',
    country: '',
    fname: '',
    lname: '',
    phone_no: '',
    user_find: '',
  });

  const { signup, loading, error, data } = useSignup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(formData);
  };
  return (
    <div className='container'>
      <div className='leftSection'>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} />
          <input type="text" name="fname" placeholder="Enter your first name" onChange={handleChange} />
          <input type="text" name="lname" placeholder="Enter your last name" onChange={handleChange} />
          <input type="password" name="pswd" placeholder="Enter your Password" onChange={handleChange} />
          <input type="tel" name="phone_no" placeholder="Enter your Phone Number" onChange={handleChange} />
          <select name="country" onChange={handleChange}>
            <option>-Select a Country-</option>
            {/* Add country options here */}
          </select>
          <select name="user_find" onChange={handleChange}>
            <option>-How did you find us-</option>
            {/* Add options here */}
          </select>
          {/* Other form fields */}
          <button type="submit" disabled={loading}>Register</button>
        </form>
        {error && <p className='error'>{error}</p>}
        {data && <p className='success'>{data.Message}</p>}
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
