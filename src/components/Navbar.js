import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { auth } from '../firebase/config';

export const Navbar = () => {
  const handleLogout=async()=>{
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  }
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
        <div className="navbar bg-neutral text-neutral-content">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={"/"} >Home</Link></li>
        <li><Link to={"/upload"}>Upload</Link></li>
      </ul>
    </div>
    <Link to={"/"} className="btn btn-ghost text-xl">Project-Expo</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="menu menu-horizontal px-1">
        <Link to={"/"} className={`${path==="/"?"bg-gray-200 font-semibold text-black":""} mx-4 px-3 py-1 rounded-md`} >Home</Link>
        <Link to={"/upload"} className={`${path==="/upload"?"bg-gray-200 font-semibold text-black":""} mx-4 px-3 py-1 rounded-md`} >Upload</Link>
    </div>
  </div>
  <div className="navbar-end">
    <button onClick={handleLogout} className="btn">Logout</button>
  </div>
</div>
    </div>
  )
}
