import React from 'react'

import { Col, Row } from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import RecentListings from 'components/RecentListings'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

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
      <h1>
        Home (signed in as
        {user.username}
        )
      </h1>
      <Center>
        <h2>Search</h2>
        <SearchBox />

      </Center>

      <h2>Recent listings</h2>

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
