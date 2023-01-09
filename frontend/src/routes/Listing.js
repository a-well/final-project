import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link, useParams } from 'react-router-dom'
import ListingItem from 'components/ListingItem'
import useApi from 'hooks/useApi'
import Center from 'components/Center'

function Listing() {
  const { id } = useParams()
  const { data: listing, isLoading } = useApi(`/api/listings/${id}`)

  if (!id) {
    return <div>No ID parameter given</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Center>
      <h2>
        {listing.type === 'wanted' ? 'Wanted' : 'Looking for a new home'}
        {': '}
        {listing.pokemonName}
      </h2>
      <ListingItem listing={listing} hoverable={false} standalone />
    </Center>
  )
}

// @TODO make back link work (or replace w breadcrumbs?)
// @TODO mak<e not hoverable and regular, add button to link to user profile
export default Listing
