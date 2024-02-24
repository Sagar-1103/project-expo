import React from 'react'

export const Upload = () => {
  return (
    <div class="min-h-screen p-3 bg-gradient-to-br from-purple-500 to-indigo-600 flex justify-center items-center">
  <div class="bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold p-4 text-center -mb-5 text-black">Project Submission Form</h2>
    <div className="divider px-5"></div> 
    <form className="card-body -mt-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Title</span>
          </label>
          <input type="text" placeholder="Project Title" className="input text-gray-600 bg-gray-100 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Description</span>
          </label>
          <input type="text" placeholder="Project Description" className="input text-gray-600 bg-gray-100 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Image</span>
          </label>
          <input type="file" className="file-input bg-gray-100 text-gray-600 file-input-bordered w-full max-w-xs" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">Report</span>
          </label>
          <input type="file" className="file-input text-gray-600 bg-gray-100 file-input-bordered w-full max-w-xs" required />
          
        </div>
    <div className="divider px-5"></div> 
        <div className="form-control">
          <button className="btn btn-primary text-white">Upload Project</button>
        </div>
      </form>
  </div>
</div>

  )
}
