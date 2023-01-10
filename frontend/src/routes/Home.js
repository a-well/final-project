import React from 'react'

import {
  Col, Row, Typography, Button, Space,
} from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import RecentListings from 'components/RecentListings'
import HowDoesItWork from 'components/HowDoesItWork'
import useUser from 'hooks/useUser'
import { useSelector } from 'react-redux'

const { Title, Text } = Typography

function Home() {
  // const { user } = useUser()
  const accessToken = useSelector((store) => store.user.accessToken)

  // if (!user) return null

  return (
    <>
      <Title>
        {/* (signed in as
        {' '}
        {user.username}
        ) */}
      </Title>

      {!accessToken && (
      <Row gutter={80} justify="center">
        <Col xs={24} md={12}>
          <Title>What is PokeYAY?</Title>
          <Text>
            PokeYAY is an app that helps Pokemon GO players trade Pokemons
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <HowDoesItWork />
        </Col>
      </Row>
      )}

      <Row justify="center">
        <Space direction="vertical">
          <Title level={2}>Search</Title>
          <SearchBox />
        </Space>
      </Row>

      <Title level={2}>Recent listings</Title>

      <Row gutter={80}>
        <Col xs={24} md={12}>
          <RecentListings type="wanted" />
          {!accessToken && (
          <Center>
            <h3>Got of these you're happy to part with?</h3>
            <Button type="primary">
              Sign up now and make someones day!
            </Button>
          </Center>
          )}
        </Col>
        <Col xs={24} md={12}>
          <RecentListings type="looking-for-a-new-home" />
          {!accessToken && (
          <Center>
            <h3>No luck finding your dream Pokemon?</h3>
            <Button type="primary">
              Become a member and post a wanted ad!
            </Button>
          </Center>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Home
