import React,{useState} from 'react'
import useStorage from '../hooks/useStorage';

export const Upload = () => {
  const {progress,addPost} = useStorage();
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState(null);
  const [report,setReport] = useState(null);

  const [showalert,setShowalert] = useState(false);

  const handleImageChange = (e)=>{
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
  }
  }
  const handleReportChange = (e)=>{
    if (e.target.files && e.target.files[0]) {
      setReport(e.target.files[0]);
  }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (image && report && title && description) {
       addPost(title,description,image,report,setShowalert);
    }
    setTitle("");
    setDescription("");
    setImage(null);
    setReport(null);
  }

  return (
    <div className="min-h-screen p-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center md:relative">
      {showalert && <div role="alert" className="alert alert-success absolute top-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your Project has been posted!</span>
    </div>}
  <div className="bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold p-4 text-center -mb-5 text-black">Project Submission Form</h2>
    <div className="divider px-5"></div> 
    <form onSubmit={handleSubmit} className="card-body -mt-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Title</span>
          </label>
          <input type="text" placeholder="Project Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="input text-gray-600 bg-gray-100 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Description</span>
          </label>
          <input type="text" placeholder="Project Description" value={description} onChange={(e)=>setDescription(e.target.value)} className="input text-gray-600 bg-gray-100 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Image</span>
          </label>
          <input type="file" onChange={handleImageChange} className="file-input bg-gray-100 text-gray-600 file-input-bordered w-full max-w-xs" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Report</span>
          </label>
          <input type="file" onChange={handleReportChange} className="file-input text-gray-600 bg-gray-100 file-input-bordered w-full max-w-xs" required />
          
        </div>
    <div className="divider px-5"></div> 
        <div className="form-control">
          <button className={`btn btn-primary ${progress?"opacity-60":""} text-white`}>
          {progress ? (<span className="loading loading-spinner"></span>) : (<span></span>)}
            Upload Project
            </button>
        </div>
      </form>
  </div>
</div>

  )
}
