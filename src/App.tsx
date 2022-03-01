import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from '@panhasilva/my-lib-hello'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <Hello />
      </header>
    </div>
  )
}

export default App
