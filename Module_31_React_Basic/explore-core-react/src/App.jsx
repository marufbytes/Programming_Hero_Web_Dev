import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concept</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Shabana" tech="js"></Developer>
      <Developer name="Mozumdar" tech ="ts"></Developer>
      <Developer name="Rajon" tech ="Python"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Student></Student>
      <Player name="Mushi" runs="6000"></Player>
      <Salami event="Roja Eid" amount="399"></Salami>
      <Salami event="Graduation"></Salami>
    </>
  )
}

function Salami({event, amount=0}){
  return(
    <div className='student'>
      <p>Salami for:{event} </p>
      <p>Amount: {amount}</p>
    </div>
  )
}

const {name, runs} ={name:'Tamim', runs: '5000'}
function Player({}){
  return(
    <div className='student'>
    <h3>Name: {name}</h3>
    <p>Runs: {runs}</p>
  </div>
  )
  
}

//const {name, tech} = {name:'Mozumdar', tech: 'js'}
function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Dept: </p>
      <p></p>
    </div>
  )
}

function Developer(props){
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Techonology: {props.tech}</p>
    </div>
  )
}

function Person (){
  const age = 17;
  const personStyle={
    color:'red',
    textAlign:'right'
  }
  return(
    <p style={personStyle}>I am a Person {age}</p>
  )
}

function Sports (){
  return (
    <div>
      <h3>Crieket</h3>
      <p>Playing and loosing</p>
    </div>
  )
}

export default App
