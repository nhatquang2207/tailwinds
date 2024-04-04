import React from 'react'

interface data {
    title : string,
    placeholder: string,
    type: "text"|"textarea"

}

const List : React.FC<data>=({title,placeholder,type}) =>{
  return (
    <div>
            <label htmlFor="" className='font-bold'>{title}</label>

            {type === "text" && (<input  className='w-full border-2 p-2 pt-1' id='title' placeholder={placeholder}/> ) } 
            {type === 'textarea'&& (<textarea className='w-full border-2 h-24 p-4 py-3' placeholder={placeholder}/> ) }
          

    </div>
  )
}

export default List;