import React from 'react'

import Profile from 'components/Profile'
import useApi from 'hooks/useApi'
import { useParams } from 'react-router-dom'

function ProfilePage() {
  const { username } = useParams()
  const { data, error, isLoading } = useApi(`/api/users/${username}`)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Profile user={data} />
  )
}

export default ProfilePage
