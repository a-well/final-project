import { Space } from 'antd'
import React from 'react'
import ListingCard from './ListingCard'
import { Col, Row } from 'antd'
import Center from './Center'

const RecentListings = ({ type }) => (
  <div>
    {type === 'wanted' ? (
      <h2>Wanted</h2>
    ) : (
      <h2>Looking for a new home</h2>
    )}

  <Row gutter={[15, 15]}>
    <Col xs={8}>      
      <ListingCard pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/200"} username={"unicorns_yay"} pokemonName={"Mew"} location="Stockholm"/>
    </Col>
      <Col xs={8}>
        <ListingCard pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/201"} username={"tuss"} pokemonName={"Pikachu"} /> 
    </Col>
      <Col xs={8}>
        <ListingCard pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/202"} username={"buss"} pokemonName={"Lapras"} /> 
    </Col>
    <Col xs={8}>
      <ListingCard pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/203"} username={"DANIL"} pokemonName={"Pinsir"} /> 
    </Col>
      <Col xs={8}>
        <ListingCard pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/204"} username={"ASLÅNGTNAMNHMM"} pokemonName={"Eevee"} /> 
    </Col>
      <Col xs={8}>
        <ListingCard pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/205"} username={"woop"} pokemonName={"Surskit"} /> 
    </Col>
  </Row>
    <Center>
      <br />
      Load more...
    </Center>
  </div>  
)

export default RecentListings