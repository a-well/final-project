import React from 'react';
import RecentListings from 'components/RecentListings'

const Profile = ({ username }) => (
  <>
    <h1 style={{ textTransform: 'uppercase' }}>
      {username}
      {' '}
      profile
    </h1>
    <h2>About me</h2>
    <h1 style={{ textTransform: 'uppercase' }}>
      {username}
      {' '}
      listings
    </h1>
    <RecentListings type="wanted" username={username} />
    <RecentListings type="looking-for-a-new-home" username={username} />
  </>
)

export default Profile