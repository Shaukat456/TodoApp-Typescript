import React, { useState } from 'react'
import { Istate as MyProps } from '../App' 

interface Iprops{
  people:MyProps["people"]
  setp:React.Dispatch<React.SetStateAction<MyProps["people"]>>
}


const AddTodo:React.FC<Iprops> = ({people, setp}) => {
const [input , setinput]=useState (
{
  name:"",
  age:"",
  note:""
}


 );


 const handleChange=(e:React.ChangeEvent <HTMLInputElement |HTMLTextAreaElement> ): void =>{
  // const name=e.target.name
  // const value=e.target.value

  setinput({
      ...input,
    [e.target.name]:e.target.value
  })

 }

 const handleClick=()=>{
    // if (!input.name || input.age || input.note ){
    //   return
    // }

    setp([
      ...people,
      {
        name:input.name,
        age:parseInt(input.age),
        note:input.note
      }
    ])
 }


  return (
    <div className='' style={{display:"flex" ,flexDirection:"column", justifyContent:"center"}}>
      <h1> Add list</h1>

        <input type="text"
         name='name'
        placeholder='name'
        value={input.name}
        onChange={handleChange}
        />
        <input type="number" name='age'
        placeholder='age'
        
        value={input.age}
        onChange={handleChange}
        />
        <textarea 
        name="note" 
        placeholder='notes'
      value={input.note}
      onChange={handleChange}
        
        />
        <button onClick={handleClick}> ADD to List </button>
        
    </div>
  )
}

export default AddTodo