import React from 'react';
import RecentListings from 'components/RecentListings'
import {
  Typography, Row, Col,
} from 'antd'
import UserDetails from './UserDetails'
import RecentTwoColumns from './RecentTwoColumns';

const { Title, Text } = Typography

const Profile = ({ user, signedInUser }) => {
  const { username } = user

  return (
    <>
      <UserDetails user={user} signedInUser={signedInUser} />
      <Title level={2}>
        {username}
        s
        {' '}
        listings
      </Title>

      <RecentTwoColumns username={username} />

    </>
  )
}

export default Profile
