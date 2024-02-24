import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config';

export const Signup = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setCpassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      if (cpassword===password) {
        await createUserWithEmailAndPassword(auth,email,password);
        navigate("/");
      }
      else {
        setPassword("");
        setCpassword("");
        alert("Passwords do not match")
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Singup now!</h1>
        <p className="py-6 lg:w-[50%] mx-auto">Singup to our Project Expo to post projects and also find out the projects made by other students.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
        {error && error}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
          <div className='mb-2'>
          Already have an account? <Link className='text-blue-500' to={"/login"}>Login</Link>
        </div>
            <button className="btn btn-primary">Signup</button>
          </div>  
        </form>
      </div>
    </div>
  </div>
  )
}
