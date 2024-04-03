import React, { ReactNode } from "react";


export interface Data {
  name :string,
  icon :ReactNode, 
  color : string,
}
const List_2 : React.FC<Data> = ({name,icon,color}) =>
{
   return (
    <div className={`${color} flex  flex-col  mr-1 aspect-square mt-1 justify-center items-center`}  >
      
        {name}
        <p>{icon}</p> 

    </div>
   )
}
export default List_2;
  