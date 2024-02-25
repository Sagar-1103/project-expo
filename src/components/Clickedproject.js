import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

export const Clickedproject = () => {
    const params = useParams();
    const {posts} = useFirestore("posts");
    const id = params.projectId;
    const currProject = posts.filter((post)=>post.projectId===id);
    if (posts.length===0) {
      return (
        <div>Loading...</div>
      );
    }
  return (
    <div className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-h-screen pb-16'>
        <div className='h-[4rem]'></div>
       <div className='rounded-xl bg-gradient-to-r from-violet-400 to-pink-300 mx-auto text-black w-[90%] p-5 '>
        <div className='text-center text-4xl font-semibold pt-2 pb-6'>{currProject[0].projectTitle}</div>
        <div className='flex justify-center'>
            <img src={currProject[0].imageUrl} width={600} height={600} className='rounded-lg' alt="..." />
        </div>
        <div className='px-5 py-10'>
            <p>{currProject[0].projectDescription}</p>
        </div>
        <div className='text-gray-600 font-bold'>
          <Link to={currProject[0].reportUrl} target="_blank" className='flex justify-center'>
        <button className='btn btn-primary mb-7 text-white'>Download Report</button>
          </Link>
        <p className='text-sm text-center' >Posted by {currProject[0].userEmail} on {currProject[0].createdAt}.</p>
        <Link to={`mailto:${currProject[0].userEmail}`} className='mt-1 flex justify-center'><MdEmail size={30}/></Link>
        </div>
       </div>
    </div>
  )
}
