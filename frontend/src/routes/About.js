import React from 'react'
import { Typography } from 'antd'

const { Title, Text } = Typography

function About() {
  return (
    <>
      <Title>About PokeYAY</Title>
      <Title level={2}>What is this?</Title>
      <Text>
        Fan built thingie to help you trade Pokemons,
        not affiliated with PokemonGO or Nintendo
      </Text>
      <Title level={2}>Kudos</Title>
      <Text>Link to PokeAPI and other stuff maybe</Text>
    </>
  )
}

export default About
