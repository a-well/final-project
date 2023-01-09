/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ListingCard from './ListingCard';

const ListingItem = ({ listing, ...additionalProps }) => (
  <ListingCard
    shiny={listing.shiny}
    type={listing.type}
    description={listing.description}
    username={listing.username}
    pokemonName={listing.pokemonName}
    pokemonImage={listing.pokemonImage}
    pokemonImageShiny={listing.pokemonImageShiny}
    location={listing.location}
    createdAt={listing.createdAt}
    {...additionalProps}
  />
)

export default ListingItem
