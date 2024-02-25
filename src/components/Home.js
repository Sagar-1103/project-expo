import React,{useEffect, useState} from 'react'
import { Project } from './Project';
import useFirestore from '../hooks/useFirestore';
import useAuth from '../hooks/useAuth';

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [projects,setProjects] = useState(null);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const {posts} = useFirestore("posts");
  const {user} = useAuth();
  
  useEffect(()=>{
    if (isChecked) {
      const tempPosts = posts.filter((post)=>post.userEmail===user.email);
      setProjects(tempPosts);
    }
    else {
      setProjects(posts);
    }
      // eslint-disable-next-line
  },[isChecked,posts]);

  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 relative min-h-screen'>

      <div className='h-[1rem]'></div>
      <div className="form-control w-[8rem] bg-gray-300 font-semibold px-1 rounded-xl absolute right-3 top-3">
        <label className="label cursor-pointer">
          <span className="label-text text-black">My Projects</span> 
          <input type="checkbox" checked={isChecked} onChange={handleChange} className="checkbox checkbox-primary" />
        </label>
      </div>

    <div className='container p-5 flex flex-wrap mx-auto justify-center lg:justify-between'>
    {projects && projects.map((post)=>(
      <Project key={post.imageUrl} id={post.projectId} isChecked={isChecked} reportUrl={post.reportUrl} date={post.createdAt} title={post.projectTitle} email={post.userEmail} mail={user.email} description={post.projectDescription} imageUrl={post.imageUrl} />
    ))}

    </div>
    </div>
  )
}
