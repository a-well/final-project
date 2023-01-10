import React from 'react'
import {
  Card, Space, Typography, Divider,
} from 'antd'
import { FacebookOutlined, PushpinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Paragraph from 'antd/es/skeleton/Paragraph'
import Center from './Center'

const { Text } = Typography

const { Meta } = Card

const ShinyStar = () => (
  <div
    style={{
      position: 'absolute',
      top: 10,
      left: 10,
      fontSize: 40,
    }}
  >
    ✨
  </div>
)

function ListingCard({
  standalone,
  pokemonId,
  pokemonName,
  shiny,
  location,
  hideTitle = false,
  description,
  username,
  pokemonImage,
  pokemonImageShiny,
  createdAt,
  hoverable = true,
  isLoading = false,
}) {
  const content = (
    <div>
      <div>
        <PushpinOutlined />
        {' '}
        {location || <span style={{ opacity: 0.6 }}>Location</span>}
      </div>
      <div>
        {createdAt || <span style={{ opacity: 0.6 }}>today </span>}
        {' by '}
        <Link to={`/users/${username}`}>{username}</Link>
      </div>
      <Divider orientation="left" plain>
        Description
      </Divider>
      <div>
        {/*
      //@TODO add ellipsis
      <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
      >
        Ant Design, a design language for background applications, is refined by Ant UED Team.
      </Text> */}
        {' '}
        {description || <span style={{ opacity: 0.6 }}>Listing description</span>}
      </div>
      {standalone && (
      <>
        <Divider orientation="left" plain>
          Contact player for trade
        </Divider>
        Go to
        {' '}
        <Link to={`/users/${username}`}>
          {username}
          's
        </Link>
        {' '}
        profile to find their details
      </>
      )}
    </div>
  )

  const cover = (
    <div style={{ position: 'relative' }}>
      <Center>
        {(!pokemonImage && !pokemonImageShiny) ? (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            style={{ width: 200, opacity: '0.3', filter: 'grayscale(100%)' }}
            alt="Placeholder Pokemon"
          />
        ) : (
          <img
            alt={pokemonName}
            src={shiny ? pokemonImageShiny : pokemonImage}
            style={{ width: 200 }}
          />
        )}
      </Center>
      {shiny && <ShinyStar />}
    </div>
  )

  return (
    <Card
      loading={isLoading}
      size={standalone ? 'large' : 'small'}
      hoverable={hoverable}
      cover={cover}
    >
      <Meta title={hideTitle ? null : pokemonName} description={content} />
    </Card>
  )
}

export default ListingCard

// @TODO add loading skeleton https://codesandbox.io/s/bj5pc0?file=/demo.tsx:307-380
// @TODO add username
