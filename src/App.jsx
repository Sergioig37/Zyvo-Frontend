import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const tocar = (e) => {
    
    e.target.style.backgroundColor = 'red'

  }

  return (
    <>
     <h1> 
        Mi padre es puto Sergio
     </h1>
    <button onClick={tocar}> No tocar </button>
    </>
  )
}

export default App
