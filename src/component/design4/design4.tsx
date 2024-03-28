import React from 'react'
import List from './list'

function Design4() {
  return (
    <div className=' p-6 rounded-2xl w-[40rem]  bg-white '>
      <p className='font-bold'>Overall rating</p>
      <div className='mt-2'>
        <p>5 starts</p>
        <p>Click to rate</p>
      </div>
      <div className='mt-4'>
        <List title="Review Title" placeholder="  Example : Easy to use" type='text' />
              <p>Would you recommend this product to a friend</p>
              <div className='items-center mt-2'>
                <input type="radio" id='html' name='fav_language' value='html'/>
                <label className='mr-4'htmlFor="html"> Html</label>
                <input type="radio" id='css' name='fav_language' value='css' />
                <label htmlFor="css"> Css</label>
              </div>
              
        <div className='mt-3'> <List title="Product Review" placeholder="  Example: Since i bought this a month ago, it has been used a lot. what i like best/what is worst about this product is..." type='textarea' />
        </div><div className=' mt-2 flex gap-1' >
          <List title="Nick name" placeholder=" Example : Easy to use" type='text' />
          <List title="Email address (will not be published)" placeholder="  Example : your@gmail.com" type='text' />
        </div>
        <div className='mt-3'>
          <input type="radio" className='accent-black sacle-150' />
              <label className='ml-2 font-bold'>I accept the terms and conditions</label>
        </div>
      </div>
      
    </div>
  )
}

export default Design4;