import React from 'react'
import {
  Col, Row, Typography,
} from 'antd'
import { Link } from 'react-router-dom'
import useApi from 'hooks/useApi'
import ListingItem from './ListingItem'
import Center from './Center'

const { Title, Text } = Typography

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
        <Title level={3}>Wanted</Title>
      ) : (
        <Title level={3}>Looking for a new home</Title>
      )}

      <Row gutter={[15, 15]}>
        {data.map((listing) => (
          <Col xs={8} key={listing._id}>
            <Link to={`/listing/${listing._id}`}>
              <ListingItem listing={listing} />
            </Link>
          </Col>
        ))}
      </Row>
      {/* <Center>
        <Text>Load more...</Text>
      </Center> */}
    </div>
  )
}

export default RecentListings
