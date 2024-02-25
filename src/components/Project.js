import React from 'react'
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { collection, deleteDoc, getDocs ,query, where } from "firebase/firestore";
import { db } from '../firebase/config';
import { getStorage, ref, deleteObject } from "firebase/storage";


export const Project = (props) => {
  
  const {id,title,description,imageUrl,reportUrl,email,date,mail,isChecked} = props;

  const handleDelete=async()=>{
    const q = query(collection(db, "posts"), where("projectId", "==" , id));
    const querySnapshot = await getDocs(q);
    const storage = getStorage();
    const imageRef = ref(storage,imageUrl);
    const reportRef = ref(storage,reportUrl);
    querySnapshot.forEach(async (doc) => {
      try {
        await deleteDoc(doc.ref);
        await deleteObject(imageRef);
        await deleteObject(reportRef);
        console.log("File deleted successfully");
        console.log("Document deleted successfully:");
      } catch (error) {
        console.error("Error deleting document:");
      }
});
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10 relative">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt="..." />
      <div className="p-4">
        <h2 className="text-xl text-gray-700 font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description.length<100?description:description.slice(0,100)+"..."}</p>
        <Link to={`/projects/${id}`} className='absolute right-0 top-0 hover:cursor-pointer bg-white'>
        <MdOpenInNew color='black' size={30} />
        </Link>
        {mail===email && isChecked && (<div className='flex space-x-2 absolute right-2 md:right-4 bottom-4'>
        <MdEditDocument color='black' className='hover:cursor-pointer' size={25} />
        <MdDelete color='black' className='hover:cursor-pointer' onClick={()=>document.getElementById('my_modal_5').showModal()} size={25} />
        </div>)}
        <br />
        <div className='text-gray-500'>
        <p className='text-sm ' >Upload by : {email}</p>
        <p className='text-sm' >Created on : {date}</p>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Delete Project!</h3>
    <p className="py-4">Are you sure you want to delete this Project , once deleted it can't be undone.</p>
    <div className="modal-action">
      <form method="dialog" className='flex space-x-4'>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-error text-white" onClick={handleDelete}>Delete</button>
        <button className="btn bg-gray-800 text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}
