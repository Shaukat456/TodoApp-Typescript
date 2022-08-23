import React, { useState } from 'react'
import { Istate as MyProps } from '../App' 

const AddTodo = () => {
const [input , setinput]=useState (
{
  name:"",
  age:"",
  note:""
}


 );


 const handleChange=(e:React.ChangeEvent <HTMLInputElement |HTMLTextAreaElement> ): void =>{
  const name=e.target.name
  const value=e.target.value

  setinput({
      ...input,
    [name]:value
  })

 }


  return (
    <div className='' style={{display:"flex" ,flexDirection:"column", justifyContent:"center"}}>
      <h1> Add list</h1>

        <input type="text" name='Name'
        placeholder='name'
        value={input.name}
        onChange={handleChange}
        />
        <input type="text" name='age'
        placeholder='age'
        
        value={input.age}
        onChange={handleChange}
        />
        <textarea name="" 
        placeholder='notes'
      value={input.note}
      onChange={handleChange}
        
        />
        <button > ADD to List </button>
        
    </div>
  )
}

export default AddTodo