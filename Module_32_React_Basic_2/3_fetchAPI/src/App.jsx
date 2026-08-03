import { useState, Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())

const fetchFriedns =async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
function App() {

  const friendsPromise=fetchFriedns();

  const [count, setCount] = useState(0)

  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = ()=>{
    alert('Clicked 3')
  }

  const handleAdd5=(num)=>{
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Frineds are coming for treat...</h3>}>
        <Friends friendsPromise = {friendsPromise} ></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Counter></Counter>

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