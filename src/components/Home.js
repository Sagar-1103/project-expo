import React from 'react'
import { Project } from './Project';
import useFirestore from '../hooks/useFirestore';

export const Home = () => {
  const {posts} = useFirestore("posts");
  // console.log(posts);
  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-h-screen'>
    <div className='container p-5 flex flex-wrap mx-auto justify-center lg:justify-between'>
    {posts && posts.map((post)=>(
      <Project key={post.imageUrl} title={post.projectTitle} description={post.projectDescription} imageUrl={post.imageUrl} />
    ))}

    </div>
    </div>
  )
}
