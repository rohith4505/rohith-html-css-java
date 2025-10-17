import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
function App() {
  const [data, setdata]=useState([]);
  const [loading,setloading]=useState(true);
  const [error, seterror]= useState("");
  useEffect(()=>{
    const fetchuser = async()=>{
      try{
        const response= await axios.get("https://jsonplaceholder.typicode.com/users");
       console.log(response.data);
       setdata(response.data);
      }catch (error){
        console.log(error);
        seterror("error while loading the data");
      }finally{
        setloading(false);
      }
       
       
    };
    fetchuser();
   

  },[]);
console.log(loading)
  if(error)  return <h1>{error}</h1>;

  if(loading) return <p>loadindg...</p>;


  return (
    <>
    {
     data.map((d)=>
    (
      <li key={d.id}>
        {d.name}-{d.email}
      </li>
    ))
    }
     
    </>
  )
}

export default App
