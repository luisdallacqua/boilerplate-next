import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

const CharacterCard = () => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then((res) => {
      const result = res.data.results[0]
      setCharacter(result)
    })
  }, [])

  return (
    <>
      <Card>
        <CardHeader
          title={character?.name ?? 'qualquer coisa numa string'}
          subheader={character.status}
        />
        <CardMedia
          image={character.image}
          title="titulo"
          component="img"
          height="94"
        />
        <CardContent>
          <p>Location : {character.location?.name}</p>
        </CardContent>
      </Card>
    </>
  )
}

export default CharacterCard
