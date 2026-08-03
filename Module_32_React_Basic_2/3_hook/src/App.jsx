import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = ()=>{
    alert('Clicked 3')
  }

  const handleAdd5=(num)=>{
    const newNum =num+5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2(){
        alert('Click 2')
      }}>Click Me</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={()=>alert('Click 4!')}>Click Me 4</button>

      <button onClick={()=>handleAdd5(5)}>Click Add 5</button>


    </>
  )
}

export default App
