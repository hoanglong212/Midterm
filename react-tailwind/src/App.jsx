import { useState } from 'react'
import Website from './website'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Website/>
    </>
  )
}

export default App
