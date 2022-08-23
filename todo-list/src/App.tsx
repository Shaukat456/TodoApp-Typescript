import React, { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';
import List from './Components/List';


export interface Istate{
  people:{
    name:string,
    age:number,
    note?:string
  }[]
}



function App() {
  const [people, setpeople]=useState<Istate["people"]> ([{
      name:"shaukat",
      age:20,
      note:"this is a notes"
  }])





  return (
    <>
    
    <h1><List people={people}/></h1>
      
      <AddTodo />
      </>
      );
}

export default App;
