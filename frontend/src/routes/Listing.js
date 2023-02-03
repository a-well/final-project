import React from 'react'
import {
  Row, Col, Button, Divider,
} from 'antd'
import { Link, useParams } from 'react-router-dom'
import ListingItem from 'components/ListingItem'
import useApi from 'hooks/useApi'
import Spinner from 'components/Spinner'
import DeleteButton from 'components/DeleteButton'

const Listing = () => {
  const { id } = useParams()

  const { data: listing, isLoading } = useApi(`/api/listings/${id}`)
  const { data: currentUser } = useApi('/api/users/me')

  if (!id) {
    return <div>Error: No ID parameter given</div>
  }

  if (isLoading) {
    return <Spinner />
  }

  if (!listing) {
    return null
  }

  return (
    <Row justify="center">
      <Col xs="24">
        <ListingItem listing={listing} hoverable={false} standalone />

        <div style={{ marginTop: 12 }}>
          <Divider />

          <Link to={`/users/${listing.username}`}>
            <Button block>
              See all listings by this user
            </Button>
          </Link>

        </div>

        {listing.username === currentUser.username && (
          <div style={{ marginTop: 12 }}>
            <DeleteButton id={id} />
          </div>
        )}

      </Col>
    </Row>
  )
}

export default Listing
