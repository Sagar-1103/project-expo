import React, { useState } from 'react'
import { auth } from '../firebase/config';
import { useNavigate,Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 ">
  <div className="hero-content flex-col">
    <div className="text-center text-gray-900">
      <h1 className="text-5xl font-bold ">Login now!</h1>
      <p className="py-6 lg:w-[50%] mx-auto font-medium">Login to our Project Expo to post projects and also find out the projects made by other students.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form className="card-body">
      {error && error}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input bg-white input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input bg-white input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <div className='mb-2 text-gray-600'>
          Don't have an account? <Link className='text-blue-500' to={"/signup"}>Signup</Link>
        </div>
          <button onClick={handleSubmit} className="btn btn-primary text-white">Login</button>
        </div>  
      </form>
    </div>
  </div>
</div>
  )
}
