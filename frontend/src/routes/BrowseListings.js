import React from 'react'
import useApi from 'hooks/useApi'
import {
  Col, Empty, Row, Typography,
} from 'antd'
import { Link, useSearchParams } from 'react-router-dom'
import ListingItem from 'components/ListingItem'
import SearchBox from 'components/SearchBox'
import Center from 'components/Center'
import queryString from 'query-string'
import Spinner from 'components/Spinner'

const { Title } = Typography

const BrowsePage = () => {
  const initialValues = queryString.parse(window.location.search);

  const search = useSearchParams() // hax to make component re-render when search params change

  console.log(initialValues)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Browse initialValues={initialValues} {...initialValues} />
  )
}

function Browse({ initialValues }) {
  const qs = queryString.stringify({
    ...initialValues,
    limit: 500,
  })

  const url = `/api/listings?${qs}`
  console.log(url)
  const { data, isLoading } = useApi(url)

  console.log({ data, isLoading })
  if (isLoading || !data) {
    return (
      <Spinner />
    )
  }

  return (
    <>
      <Title>Browse listings</Title>

      <SearchBox initialValues={initialValues} />

      <Title level={2}>Results</Title>

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
    </>
  )
}

export default BrowsePage
