import './App.css';
import { useState, useEffect,useRef } from 'react';function App() { 
   const[input, setInput] = useState("");   
   const counter = useRef(0); 
   console.log(counter);

   useEffect(()=>{
   counter.current=counter.current+1;       
   })
   const formHandler=(e)=>{
    setInput(e.target.value)
   }
  document.title="useRef Hook"
  return (
    <div className="App">
      <input value ={input} onChange={formHandler}/>
      <h4>Appliction has been rendered {counter.current} times</h4>    
    </div>
  );
}
export default App;

 