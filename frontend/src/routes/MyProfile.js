import Center from 'components/Center'
import React from 'react'

import Profile from 'components/Profile'
import useApi from 'hooks/useApi'

function MyProfile() {
  const { data, error, isLoading } = useApi('/api/users/me')

  console.log({ data, error, isLoading })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Center>
      <Profile user={data} signedInUser />
    </Center>
  )
}

export default MyProfile
