import { useEffect, useState } from 'react'

const CharactersList = () => {
  const [characters, setCharacters] = useState([])

  const fetchAllCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      if (response.ok) {
        const parsed = await response.json()
        console.log(parsed.results)
        setCharacters(parsed.results)
        console.log(characters)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllCharacters()
  }, [])

  useEffect(() => {
    if (characters.length) {
      console.log(characters)
    }
  }, [characters])

  return (
    <>
      <h1>CharactersList</h1>
      {characters.map(currentChar => (
        <p key={currentChar.id}>{currentChar.name}</p>
      ))}
    </>
  )
}

export default CharactersList
