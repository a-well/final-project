import React from 'react'
import {
  Col, Empty, Row, Typography,
} from 'antd'
import { Link } from 'react-router-dom'
import useApi from 'hooks/useApi'
import ListingItem from './ListingItem'
import LoadingCard from './LoadingCard'

const { Title } = Typography

const RecentListings = ({ type, username }) => {
  let url = `/api/listings?limit=6&type=${type}`
  if (username) {
    url += `&username=${username}`
  }

  const { data, isLoading } = useApi(url)

  return (
    <>
      {type === 'wanted' ? (
        <Title level={3}>Wanted</Title>
      ) : (
        <Title level={3}>Looking for a new home</Title>
      )}

      <Row
        justify="center"
      // Space between cards in grid
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
    </>
  )
}

export default RecentListings
