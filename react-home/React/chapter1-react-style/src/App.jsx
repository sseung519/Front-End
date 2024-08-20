import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Let&apos;s go React!!!</h1>
      <p>Hello, World!</p>
      {/* 이미지는 assset, public */}
      <img src="images/1.jpeg" alt="웨이드" />
    </div>
  )
}

export default App
