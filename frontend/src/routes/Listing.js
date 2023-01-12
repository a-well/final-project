import React from 'react'
import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom'
import ListingItem from 'components/ListingItem'
import useApi from 'hooks/useApi'
import Spinner from 'components/Spinner'

function Listing() {
  const { id } = useParams()

  const { data: listing, isLoading } = useApi(`/api/listings/${id}`)

  if (!id) {
    return <div>Error: No ID parameter given</div>
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Row justify="center">
      <Col xs="24">
        <ListingItem listing={listing} hoverable={false} standalone />
      </Col>
    </Row>
  )
}

// @TODO make back link work (or replace w breadcrumbs?)
export default Listing
