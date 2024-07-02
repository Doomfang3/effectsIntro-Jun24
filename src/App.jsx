import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test'
import CharactersList from './components/CharactersList'

function App() {
  const [students, setStudents] = useState([])
  const [count, setCount] = useState(0)

  const [isShown, setIsShown] = useState(false)

  /* useEffect(() => {
    console.log('Triggered useEffect')
  }) */

  useEffect(() => {
    console.log('App mounted')
  }, [])

  useEffect(() => {
    console.log('Count was updated')
  }, [count])

  useEffect(() => {
    console.log({ students })
  }, [students])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <button onClick={() => setIsShown(!isShown)}>Click</button>
        {isShown && <Test />}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <CharactersList />
    </>
  )
}

export default App
