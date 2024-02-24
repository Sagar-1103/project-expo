import React from 'react'
import { MdOpenInNew } from "react-icons/md";

export const Project = (props) => {
  const {title,description,imageUrl} = props;
  const date = "11-11-2003";
  const email = "sagarshirgaonkar59511@gmail.com";
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10 relative">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt="blog" />
      <div className="p-4">
        <h2 className="text-xl text-gray-700 font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description.length<100?description:description.slice(0,100)+"..."}</p>
        <div className='absolute right-0 bottom-0 hover:cursor-pointer'>
        <MdOpenInNew color='black' size={30} />
        </div>
        <br />
        <div className='flex flex-wrap text-gray-500'>
        <p className='text-sm ' >Upload by: {email}</p>
        <p className='text-sm' >Created on: {date}</p>
        </div>
      </div>
    </div>
  )
}
