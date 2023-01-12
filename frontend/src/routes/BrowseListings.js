import React from 'react'
import useApi from 'hooks/useApi'
import {
  Col, Empty, Row, Typography,
} from 'antd'
import { Link } from 'react-router-dom'
import ListingItem from 'components/ListingItem'

const { Title } = Typography

function Browse({ type }) {
  const url = '/api/listings?limit=500'
  const { data, isLoading } = useApi(url)

  console.log({ data, isLoading })
  if (isLoading || !data) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <Title>Browse</Title>

      <Row
        justify="center"
      // AVSTÅND MELLAN KORTEN I GRID
        gutter={[{
          xs: 10,
          sm: 16,
          md: 14,
          lg: 16,
        }, {
          xs: 10,
          sm: 16,
          md: 14,
          lg: 16,
        }]}
      >
        {data.map((listing) => (
          <Col xs={12} sm={10} md={8} lg={6} key={listing._id}>
            <Link to={`/listing/${listing._id}`}>
              <ListingItem listing={listing} showTypeBadge />
            </Link>
          </Col>
        ))}

        {(!data || data.length === 0) && (
        <Col xs={24} sm={24}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No listings to show" />
        </Col>
        )}
      </Row>
      {/* <Center>
        <Text>Load more...</Text>
      </Center> */}
    </>
  )
}

export default Browse
