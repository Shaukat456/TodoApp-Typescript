import React from 'react'


interface Iprops{
  people:{
    name:string,
    age:number,
    note?:string
  }[]
}



const List:React.FC<Iprops> = ({people}) => {
    
  const RenderList=():JSX.Element[]  =>{
    return people.map((person)=>{
      return (
        <>
        <div className="list">
          <h1>{person.name}</h1>
          <h1>{person.age}</h1>
          <h1>{person.note}</h1>
        </div>
      </>
    )
  })
  }

  return (
    <div>
<h1>List</h1>
<div>{RenderList()}</div>
    </div>
  )
}

export default List;
