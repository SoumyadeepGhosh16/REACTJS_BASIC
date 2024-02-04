import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  //let counter=10;

  const addValue=()=>{
    console.log("value added",counter);
    counter=counter+1;
    setCounter(counter);
  }

  const removeValue=()=>{
    if(counter<=0){
     setCounter(counter);
    }else if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>hooks & React</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}>
      Add value {counter}</button>
      <br/>
      <button 
      onClick={removeValue}>remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
