import React from 'react'

import { Col, Row, Typography } from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import RecentListings from 'components/RecentListings'
import useUser from 'hooks/useUser'

const { Title } = Typography

function Home() {
  const { user } = useUser()

  if (!user) return null

  return (
    <>
      <Title>
        Home (signed in as
        {' '}
        {user.username}
        )
      </Title>
      <Center>
        <Title level={2}>Search</Title>
        <SearchBox />
      </Center>

      <Title level={2}>Recent listings</Title>

      <Row gutter={80}>
        <Col xs={24} md={12}>
          <RecentListings type="wanted" />
        </Col>
        <Col xs={24} md={12}>
          <RecentListings type="looking-for-a-new-home" />
        </Col>
      </Row>
    </>
  )
}

export default Home
