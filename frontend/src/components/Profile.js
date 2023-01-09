import React from 'react';
import RecentListings from 'components/RecentListings'
import {
  Typography, Row, Col,
} from 'antd'
import UserDetails from './UserDetails'

const { Title, Text } = Typography

const Profile = ({ user }) => {
  const { username } = user

  return (
    <>
      <UserDetails user={user} />
      <Title level={2}>
        {username}
        s
        {' '}
        listings
      </Title>
      <Row gutter={80}>
        <Col xs={24} md={12}>
          <RecentListings type="wanted" username={username} />
        </Col>
        <Col xs={24} md={12}>
          <RecentListings type="looking-for-a-new-home" username={username} />
        </Col>
      </Row>
    </>
  )
}

export default Profile
