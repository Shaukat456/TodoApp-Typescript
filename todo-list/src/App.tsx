import React, { useEffect, useState } from 'react';
import List from './Components/List';


interface Istate{
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
    <h1>
      <List people={people}/>
      hello 
     
    </h1>
  );
}

export default App;
