import React from 'react'
import { Typography } from 'antd'
import UserDetails from './UserDetails'
import RecentTwoColumns from './RecentTwoColumns'

const { Title } = Typography

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
