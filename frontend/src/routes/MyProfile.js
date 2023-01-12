import Center from 'components/Center'
import React from 'react'

import Profile from 'components/Profile'
import useApi from 'hooks/useApi'
import { Row } from 'antd'
import Spinner from 'components/Spinner'

function MyProfile() {
  const { data, error, isLoading } = useApi('/api/users/me')

  console.log({ data, error, isLoading })

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Profile user={data} signedInUser />
  )
}

export default MyProfile
