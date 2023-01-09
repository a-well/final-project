import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import useApi from 'hooks/useApi'
import ListingCard from './ListingCard'
import Center from './Center'

function RecentListings({ type }) {
  const { data, isLoading } = useApi(`/api/listings?limit=6&type=${type}`)

  console.log({ data, isLoading })
  if (isLoading || !data) {
    return (
      <div>
        Loading type
        {type}
        ...
      </div>
    )
  }

  return (
    <div>
      {type === 'wanted' ? (
        <h2>Wanted</h2>
      ) : (
        <h2>Looking for a new home</h2>
      )}

      <Row gutter={[15, 15]}>
        {data.map((listing) => (
          <Col xs={8} key={listing._id}>
            <Link to={`/listing/${listing._id}`}>
              <ListingCard
                shiny={listing.shiny}
                username={listing.username}
                pokemonName={listing.pokemonName}
                pokemonImage={listing.pokemonImage}
                location={listing.location}
                createdAt={listing.createdAt}
              />
            </Link>
          </Col>
        ))}
      </Row>
      <Center>
        <br />
        Load more...
      </Center>
    </div>
  )
}

export default RecentListings
