
import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount]=useState(0);
 

  return (
    <>
    <h1>COUNTER APP</h1>
    <h3>Count:{count}</h3>
    <button onClick={()=>setcount(count+1)}>incriment</button>
    <button onClick={()=>setcount(count-1)}>decrement</button>
    <button onClick={()=>setcount(count===0)}>reset</button>
    </>
  )
}

export default App
