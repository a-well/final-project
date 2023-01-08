import Center from 'components/Center'
import React from 'react'

import Profile from 'components/Profile'
import useApi from 'hooks/useApi'

function ProfilePage() {
  const { data, error, isLoading } = useApi('/api/users/me')

  console.log({ data, error, isLoading })

  if (isLoading) {
    return <div>Loading...</div>
  }

  const username = data?.username

  return (
    <Center>
      <Profile username={username} />
    </Center>
  )
}

export default ProfilePage
