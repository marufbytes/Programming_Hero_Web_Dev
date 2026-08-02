import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './todo'
import Actor from './actor'
import Singer from './singer'

function App() {
  const actors = ["Bappa Raj", "Omar Sunny", 'Salman Shah', 'Shakib Khan'];
  // const time = 50;

  const singers =[
    {id:1,name:'Dr. Mahfuz', age:45},
    {id:2, name:'Tahsan',age:45},
    {id:3, name: 'Sajid',age:24}
  ]

  return (
    <>
      <h1>React Core Concept</h1>


    {
      singers.map(singer=><Singer singer={singer}></Singer>)
    }



      {
        // actors.map((actor, index) => <Actor key={index} name={actor} />)
        actors.map(actor=><Actor actor={actor}></Actor>)
      }
    </>
  )
}

export default App
