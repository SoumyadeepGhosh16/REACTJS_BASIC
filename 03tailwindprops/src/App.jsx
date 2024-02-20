import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
     username:"Soumyadeep",
     age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-white p-5 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Learning React" btnText="Click me"/>
    <Card username="practicing React"btnText="About" />
    </>
  )
}

export default App
