/* eslint-disable max-len */
import React from 'react'

import { Typography, Row, Col } from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import { useSelector } from 'react-redux'
import RecentTwoColumns from 'components/RecentTwoColumns'
import Hero from 'components/Hero'

const { Title } = Typography

function Home() {
  const accessToken = useSelector((store) => store.user.accessToken)

  return (
    <>
      {!accessToken && (
        <Hero />
      )}
      <Center>
        <Title level={2}>Browse</Title>
        <SearchBox />
      </Center>
      <Title level={2}>Recent listings</Title>
      <RecentTwoColumns />
    </>
  )
}

export default Home
