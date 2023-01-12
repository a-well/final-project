import React from 'react'
import {
  Col, Empty, Row, Typography,
} from 'antd'
import { Link } from 'react-router-dom'
import useApi from 'hooks/useApi'
import ListingItem from './ListingItem'
import LoadingCard from './LoadingCard'

const { Title, Text } = Typography

function RecentListings({ type, username }) {
  let url = `/api/listings?limit=6&type=${type}`
  if (username) {
    url += `&username=${username}`
  }

  const { data, isLoading } = useApi(url)

  console.log({ data, isLoading })

  return (
    <>
      {type === 'wanted' ? (
        <Title level={3}>Wanted</Title>
      ) : (
        <Title level={3}>Looking for a new home</Title>
      )}

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

        {isLoading && (
          <>
            <Col xs={12} sm={10} md={12} lg={8}>
              <LoadingCard />
            </Col>
            <Col xs={12} sm={10} md={12} lg={8}>
              <LoadingCard />
            </Col>
          </>
        )}

        {data && data.map((listing) => (
          <Col xs={12} sm={10} md={12} lg={8} key={listing._id}>
            <Link to={`/listing/${listing._id}`}>
              <ListingItem listing={listing} />
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

export default RecentListings

// xs = 0-576 px wide TELEFON
// sm = 577-768 px wide TELEFON
// md = 769-992 px wide TABLET
// lg = 993-1199 px wide DATOR
// xl = 1200-1600 px wide
// xxl = 1601 px and larger
