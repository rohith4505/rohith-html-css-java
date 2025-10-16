
import './App.css'
import Button2 from './component2/Button2'
import Form2 from './component2/Form2'
import Ordered from './component2/Ordered'
import Unordered from './component2/Unordered'

function App() {
 

  return (
    <>
    <h1>hello</h1>
    <Button2  />
    <Form2 text={"hello my world"} value={45} arr={[1,2,3,4]}/>
    <Unordered/>
    <Ordered/>

    </>
  )
}

export default App
