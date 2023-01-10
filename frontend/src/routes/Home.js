import React from 'react'

import {
  Col, Row, Typography, Button,
} from 'antd'

import Center from 'components/Center'
import SearchBox from 'components/SearchBox'
import RecentListings from 'components/RecentListings'
import HowDoesItWork from 'components/HowDoesItWork'
import useUser from 'hooks/useUser'
import { useSelector } from 'react-redux'

const { Title } = Typography

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
      <Row gutter={80}>
        <Col xs={24} md={12}>
          <Title>What is PokeYAY?</Title>
          <p>
            Pokemon I like shorts Grimer Empoleon Shinx Wurmple Electrode?
            Sunt in culpa Satoshi Tajiri Sonic Boom Duosion Noctowl Shellos Vespiquen.
            Flying Lunatone Cherubi Cacnea MysteryBerry Leech Life Pupitar!
          </p>
        </Col>
        <Col xs={24} md={12}>
          <Center>
            <HowDoesItWork />
          </Center>
        </Col>
      </Row>
      )}

      <Center>
        <Title level={2}>Search</Title>
        <SearchBox />
      </Center>

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
