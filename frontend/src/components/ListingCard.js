import React from 'react'
import {
  Card, Space, Typography, Divider,
} from 'antd'
import { FacebookOutlined, PushpinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Paragraph from 'antd/es/skeleton/Paragraph'
import nl2br from 'react-nl2br'
import moment from 'moment'
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

const ListingLocation = ({ location }) => (
  <div>
    <PushpinOutlined />
    {' '}
    {location || <span style={{ opacity: 0.6 }}>Location</span>}
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
      <ListingLocation location={location} />

      <div>
        {moment(createdAt).format('YYYY-MM-DD ') || <span style={{ opacity: 0.6 }}>today </span>}
        <br />
        {' by '}
        <Link to={`/users/${username}`}>{username}</Link>
      </div>

      {standalone && (
        <Divider orientation="left" plain>
          Description
        </Divider>
      )}
      <div>

        <Text
          style={standalone ? {} : { width: '100%', height: 25 }}
          ellipsis={!standalone && { tooltip: description }}
        >
          {description ? (
            <span style={{ overflowWrap: 'anywhere' }}>
              {nl2br(description)}
            </span>
          ) : (
            <span style={{ opacity: 0.6 }}>Listing description</span>
          )}
        </Text>

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
      style={{ maxWidth: 600 }}
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
