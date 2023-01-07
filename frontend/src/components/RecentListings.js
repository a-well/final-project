import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import ListingCard from './ListingCard'
import Center from './Center'

function RecentListings({ type }) {
  return (
    <div>
      {type === 'wanted' ? (
        <h2>Wanted</h2>
      ) : (
        <h2>Looking for a new home</h2>
      )}

      <Row gutter={[15, 15]}>
        <Col xs={8}>
          <Link to="/listing">
            <ListingCard
              pokemonImage="https://lorempokemon.fakerapi.it/pokemon/200"
              username="unicorns_yay"
              pokemonName="Mew"
              location="Stockholm"
            />
          </Link>
        </Col>
        <Col xs={8}>
          <ListingCard pokemonImage="https://lorempokemon.fakerapi.it/pokemon/201" username="tuss" pokemonName="Pikachu" location="Stockholm" />
        </Col>
        <Col xs={8}>
          <ListingCard pokemonImage="https://lorempokemon.fakerapi.it/pokemon/202" username="buss" pokemonName="Lapras" location="Oslo" />
        </Col>
        <Col xs={8}>
          <ListingCard pokemonImage="https://lorempokemon.fakerapi.it/pokemon/203" username="DANIL" pokemonName="Pinsir" location="Bromma" />
        </Col>
        <Col xs={8}>
          <ListingCard pokemonImage="https://lorempokemon.fakerapi.it/pokemon/204" username="ASLÅNGTNAMNHMM" pokemonName="Eevee" location="Stockholm" />
        </Col>
        <Col xs={8}>
          <ListingCard pokemonImage="https://lorempokemon.fakerapi.it/pokemon/205" username="woop" pokemonName="Surskit" location="Umeå" />
        </Col>
      </Row>
      <Center>
        <br />
        Load more...
      </Center>
    </div>
  )
}

export default RecentListings
