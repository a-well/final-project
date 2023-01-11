import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import {
  Alert, Button, Row, Col,
} from 'antd'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ListingItem from 'components/ListingItem'
import useApi from 'hooks/useApi'

function Listing() {
  const { id } = useParams()

  const [searchParams] = useSearchParams()
  const isNew = searchParams.get('new')

  console.log(isNew)
  const { data: listing, isLoading } = useApi(`/api/listings/${id}`)

  if (!id) {
    return <div>No ID parameter given</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Row justify="center">
      <Col>
        {isNew && (
        <Alert message="Listing successfully posted!" type="success" showIcon />
        )}
        <h2>
          {listing.type === 'wanted' ? 'Wanted' : 'Looking for a new home'}
          {': '}
          {listing.pokemonName}
        </h2>
        <ListingItem listing={listing} hoverable={false} standalone />
      </Col>
    </Row>
  )
}

// @TODO make back link work (or replace w breadcrumbs?)
export default Listing
