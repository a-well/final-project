import React from 'react'

import { Col, Row, Typography } from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import RecentListings from 'components/RecentListings'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const { Title, Text } = Typography

function Home() {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user.user)
  console.log({ user })
  if (!user) {
    navigate('/login')
    return (
      <div>
        Not logged in!
        <br />
        <Link to="/login">Go to login</Link>
      </div>
    )
  }

  return (
    <>
      <Title>
        Home (signed in as
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
