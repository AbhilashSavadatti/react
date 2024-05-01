import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  let abhi = {

    name:"Abhi",
    age: 12
  }

  let arr = [1,2]

  return (
    <>
    <h1>abhi</h1>
    <Card username="Rajesgh" password="4390940940"/>
    <br />
    <br /><br />
    <Card username="Abhilash" />
   
    </>
  )
}

export default App
