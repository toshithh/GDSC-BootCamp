import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const renderCount = useRef(0)
  useEffect(() => {
    renderCount.current += 1;
  })

  return (
    <>
      <h1>BootCamp - Day 3</h1>
      <h2>{renderCount.current}
      <br />
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} /></h2>
    </>
  )
}

export default App
