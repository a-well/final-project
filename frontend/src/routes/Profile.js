import Center from 'components/Center'
import React from 'react'

import RecentListings from 'components/RecentListings'

function Profile(a) {
  const username = 'Tuss'

  return (
    <Center>
      <h1 style={{ textTransform: 'uppercase' }}>
        {username} profile
      </h1>
      <h2>About me</h2>
      <h1 style={{ textTransform: 'uppercase' }}>
        {username} listings
      </h1>
      <RecentListings type="wanted" username={username} />
      <RecentListings type="looking-for-a-new-home" username={username} />
    </Center>
  )
}

export default Profile
