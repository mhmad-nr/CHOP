import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Engine from './engine/Engine'

const App: React.FC = () => {
  const refCanvas = useRef<any>(null)
  useEffect(() => {
    new Engine(refCanvas.current)
  }, [])

  return (
    <div className="App">
      <canvas ref={refCanvas}></canvas>
    </div>
  )
}

export default App
