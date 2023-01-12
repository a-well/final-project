import React from 'react'

import {
  Col, Row, Typography, Button, Space,
} from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import HowDoesItWork from 'components/HowDoesItWork'
import useUser from 'hooks/useUser'
import { useSelector } from 'react-redux'
import RecentTwoColumns from 'components/RecentTwoColumns'

const { Title, Text } = Typography

function Home() {
  // const { user } = useUser()
  const accessToken = useSelector((store) => store.user.accessToken)

  // if (!user) return null

  return (
    <>
      {/* {!accessToken && (
      <Row gutter={10} justify="center">
        <Col xs={24} sm={12}>
          <Title>What is PokeYAY?</Title>
          <Text>
            PokeYAY is an app that helps Pokemon GO players trade Pokemons
          </Text>
        </Col>
        <Col xs={24} sm={12}>
          <HowDoesItWork />
        </Col>
      </Row>
      )} */}
      <Center>
        <Title level={2}>Search</Title>
        <SearchBox />
      </Center>
      <Title level={2}>Recent listings</Title>
      <RecentTwoColumns />
    </>
  )
}

export default Home
