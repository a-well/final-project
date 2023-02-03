import React from 'react'

import Profile from 'components/Profile'
import Spinner from 'components/Spinner'
import useApi from 'hooks/useApi'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
  const { username } = useParams()
  const { data, error, isLoading } = useApi(`/api/users/${username}`)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Profile user={data} />
  )
}

export default ProfilePage
