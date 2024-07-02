import { useEffect, useState } from 'react'

const Test = () => {
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('test mounted')

    return () => {
      console.log('test unmounted')
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('interval running')
      setCount2(prevCount2 => prevCount2 + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <h2>Hey there</h2>
      <button onClick={() => setCount2(count2 => count2 + 1)}>count2 is {count2}</button>
    </>
  )
}

export default Test
