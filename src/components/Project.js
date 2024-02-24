import React from 'react'
import { MdOpenInNew } from "react-icons/md";

export const Project = () => {
  const imageUrl = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  const title = "Project 1";
  const date = "11-11-2003";
  const email = "sagarshirgaonkar59511@gmail.com";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, est sed suscipit consectetur, justo erat fermentum nunc, vel vestibulum erat metus id purus. Duis sit amet facilisis turpis. Nulla facilisi. Cras vehicula tempor mi, eget scelerisque mauris vulputate ac. Nulla facilisi. Cras sed enim non nunc placerat pharetra. Proin at erat ac tortor malesuada suscipit. Suspendisse potenti. Nam ultricies accumsan felis, ut fermentum odio suscipit in. Donec tincidunt mi eu ligula volutpat, in facilisis dui consectetur. Proin id lacinia mauris. Nullam feugiat lorem id ex tincidunt, nec vehicula risus tincidunt. Vivamus interdum aliquam nulla, a interdum nunc iaculis non. Cras pellentesque, ipsum vitae ullamcorper placerat, mi felis dignissim mi, vel rutrum nisl eros nec odio. Nam dictum lectus vel mauris pellentesque, ut aliquet arcu venenatis. Ut non ante libero. Quisque lobortis, arcu ut tristique consequat, dolor arcu elementum eros, eget lacinia sapien nisi at nisl. In hac habitasse platea dictumst. Integer ac volutpat dui. Fusce bibendum, dolor nec placerat lobortis, est nisi faucibus magna, ut congue odio justo vel magna. Fusce eu nisi eget mauris tristique mattis. Vivamus rutrum dictum mauris id laoreet. Integer sit amet dolor leo. Donec ultricies dolor nec orci iaculis lobortis. Duis nec elit eu tortor convallis scelerisque. Cras tristique quam quis elit facilisis elementum. Vestibulum consectetur rhoncus sem, ac bibendum lacus luctus at. Fusce eget leo vel nunc malesuada gravida. Quisque lobortis velit non elit mattis, in pharetra eros tempus. Suspendisse potenti. Donec vel suscipit nulla, sit amet vestibulum mauris. Nullam eu lectus odio. Nulla facilisi. Aliquam in bibendum lorem. Ut elementum condimentum massa, sit amet pharetra felis consectetur nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel tortor felis. Donec in pulvinar ipsum, sed pharetra mi. Proin eget nibh felis. Donec sodales risus eros, nec pharetra nisi fermentum sit amet. Vestibulum ac ipsum dapibus, posuere odio id, egestas ex. Integer auctor, dolor id auctor scelerisque, nibh purus dictum mauris, non tempus nunc nibh ut mi. Ut vel scelerisque neque. Curabitur elementum faucibus libero vitae pellentesque. Sed bibendum a ligula sed fermentum. Vestibulum ut arcu vitae elit tincidunt gravida. Nulla semper ipsum et tellus suscipit, et bibendum mauris efficitur. Nam eu tincidunt sapien. Proin ac quam turpis. Nullam hendrerit tempor lorem. Vivamus tempor lectus a sapien facilisis, at venenatis nisi tincidunt. Curabitur malesuada, metus ac vestibulum malesuada, arcu mi posuere mi, nec ultricies risus lectus sit amet nisl. Fusce fringilla est non suscipit gravida."
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10 relative">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt="blog" />
      <div className="p-4">
        <h2 className="text-xl text-gray-700 font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description.slice(0,100)}....</p>
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
