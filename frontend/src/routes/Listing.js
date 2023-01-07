import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import ListingCard from 'components/ListingCard'

function Listing({
  pokemonId, pokemonName, shiny, location, description, username, pokemonImage, whenAdded, contact,
}) {
  return (
    <>
      <h1>Listing</h1>

      <h2>Wanted: Shiny pinsir</h2>
      <Link to="/">
        <Button type="primary" icon={<ArrowLeftOutlined />}>
          Back to results
        </Button>
      </Link>
      <ListingCard
        hoverable={false}
        hideTitle
        pokemonImage="https://lorempokemon.fakerapi.it/pokemon/500"
        username="unicorns_yay"
        pokemonName="Mew"
        location="Ekerö"
        contact="Contact: Facebook icon: _____, Discord icon:____, WhatsApp icon: _____"
        comment="Comment: Bla bla I want a shiny one plz"
      />
    </>
  )
}

// @TODO make back link work (or replace w breadcrumbs?)
// @TODO mak<e not hoverable and regular, add button to link to user profile
export default Listing
