import React from 'react'
import useAuth from "../hooks/useAuth"
import { Project } from './Project';

export const Home = () => {
  const {user} = useAuth();
  console.log(user);
  return (
    <div className='container p-5 flex flex-wrap mx-auto justify-center lg:justify-between'>
     <Project/>
     <Project/>
     <Project/>
     <Project/>
     <Project/>
     <Project/>
     <Project/>
    </div>
  )
}
