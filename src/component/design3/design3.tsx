import React from 'react'
const tag = ['Profile',"New York","Relax","Preson","Fashion"]
function Design3() {
  return (
    <div className='w-[60rem] p-6 rounded-lg mt-16 mb-16 bg-white  shadow-2xl'>

     <p className=' font-bold text-3xl  '>Popular collection </p>

       <div className="mt-5">
            {tag.map(item=>(<button className='mr-4 bg-gray-600 p-2 rounded-lg hover:bg-gray-100'> {item} </button>))}

       </div>
       <div className='grid grid-cols-3'>
         <div className='mt-3 grid grid-cols-1  w-[18rem]' >
        <div className='bg-blue-200 '>
          <img  className='p-3 w-full h-[12rem]  rounded-3xl' src='https://placewaifu.com/image/100' alt=''/>
           <div className='grid grid-cols-3 gap-2 p-2'>
               <img className=' rounded-lg' src='https://placewaifu.com/image/410' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/200' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/300' alt=''/>
           </div>
          <div className='flex mr-2 ml-2'> 
           <p className='grow'>People  </p>
           <p className=''>44 img</p>
           </div>
        </div>
       </div> 
       <div className='mt-3 grid grid-cols-1  w-[18rem]' >
        <div className='bg-blue-200 '>
          <img  className='p-3 w-full h-[12rem]  rounded-3xl' src='https://placewaifu.com/image/100' alt=''/>
           <div className='grid grid-cols-3 gap-2 p-2'>
               <img className=' rounded-lg' src='https://placewaifu.com/image/420' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/200' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/300' alt=''/>
           </div>
          <div className='flex mr-2 ml-2'> 
           <p className='grow'>People  </p>
           <p className=''>44 img</p>
           </div>
        </div>
       
       </div>
       <div className='mt-3 grid grid-cols-1  w-[18rem]' >
        <div className='bg-blue-200 '>
          <img  className='p-3 w-full h-[12rem]  rounded-3xl' src='https://placewaifu.com/image/100' alt=''/>
           <div className='grid grid-cols-3 gap-2 p-2'>
               <img className=' rounded-lg' src='https://placewaifu.com/image/420' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/200' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/300' alt=''/>
           </div>
          <div className='flex mr-2 ml-2'> 
           <p className='grow'>People  </p>
           <p className=''>44 img</p>
           </div>
        </div>
       
       </div>
       <div className='mt-3 grid grid-cols-1  w-[18rem]' >
        <div className='bg-blue-200 '>
          <img  className='p-3 w-full h-[12rem]  rounded-3xl' src='https://placewaifu.com/image/100' alt=''/>
           <div className='grid grid-cols-3 gap-2 p-2'>
               <img className=' rounded-lg' src='https://placewaifu.com/image/420' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/200' alt=''/>
               <img className=' rounded-lg' src='https://placewaifu.com/image/300' alt=''/>
           </div>
          <div className='flex mr-2 ml-2'> 
           <p className='grow'>People  </p>
           <p className=''>44 img</p>
           </div>
        </div>
       
       </div> 
       
       </div>
       
      </div>
  )
}

export default Design3;