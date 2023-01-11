import Center from 'components/Center'
import React from 'react'

import Profile from 'components/Profile'
import useApi from 'hooks/useApi'
import { Row } from 'antd'

function MyProfile() {
  const { data, error, isLoading } = useApi('/api/users/me')

  console.log({ data, error, isLoading })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Row>
      <Profile user={data} signedInUser />
    </Row>
  )
}

export default MyProfile
