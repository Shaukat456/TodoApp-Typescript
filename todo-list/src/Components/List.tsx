import React from 'react'


interface Iprops{
  people:{
    name:string,
    age:number,
    note?:string
  }[]
}


const List:React.FC<Iprops> = () => {

  return (
    <div>List</div>
  )
}

export default List;
