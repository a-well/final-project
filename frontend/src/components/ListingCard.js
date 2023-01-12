import React from 'react'
import {
  Card, Space, Typography, Divider, Row, Badge,
} from 'antd'
import { PushpinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import nl2br from 'react-nl2br'
import moment from 'moment'
import useApi from 'hooks/useApi'
import Center from './Center'
import DeleteButton from './DeleteButton'

const { Text } = Typography

const { Meta } = Card

const TypeRibbon = ({
  standalone, showTypeBadge, children, type,
}) => {
  if (standalone || showTypeBadge) {
    return (
      <Badge.Ribbon
        type={type}
        text={type === 'wanted' ? (
          'Wanted'
        ) : (
          'Looking for a new home'
        )}
        color={type === 'wanted' ? 'blue' : 'blue'}
      >
        {children}
      </Badge.Ribbon>
    )
  }

  return children
}

const Title = ({
  type, pokemonName, shiny, standalone,
}) => (
  <div>
    {standalone
    && (type === 'wanted' ? 'Wanted: ' : 'Looking for a new home: ')}
    {shiny && 'Shiny'}
    {' '}
    {pokemonName}
  </div>
)

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
  preview,
  standalone,
  pokemonId,
  pokemonName,
  type,
  shiny,
  location,
  hideTitle = false,
  description,
  username,
  pokemonImage,
  pokemonImageShiny,
  createdAt,
  id,
  hoverable = true,
  isLoading = false,
  showTypeBadge = false,
}) {
  const { data } = useApi('/api/users/me')

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
        {username === data?.username && !preview && (
        <>
          <Divider />
          <DeleteButton id={id} />
        </>
        )}
      </>
      )}
    </div>
  )

  const cover = (
    <div style={{ position: 'relative', paddingTop: '20px' }}>
      <Center>
        {(!pokemonImage && !pokemonImageShiny) ? (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            style={{
              width: 170, opacity: '0.3', filter: 'grayscale(100%)',
            }}
            alt="Placeholder Pokemon"
          />
        ) : (
          <img
            alt={pokemonName}
            src={shiny ? pokemonImageShiny : pokemonImage}
            style={{ maxWidth: '100%', width: 170 }}
          />
        )}
      </Center>
      {shiny && <ShinyStar />}
    </div>
  )

  return (
    <TypeRibbon type={type} standalone={standalone} showTypeBadge={showTypeBadge}>
      <Card
        loading={isLoading}
        size={standalone ? 'default' : 'small'}
        hoverable={hoverable}
        cover={cover}
        preview={preview}
      >
        <Meta
          title={(
            <Title
              type={type}
              pokemonName={pokemonName}
              shiny={shiny}
              standalone={standalone}
            />
)}
          description={content}
        />
      </Card>
    </TypeRibbon>
  )
}

export default ListingCard

// @TODO add loading skeleton https://codesandbox.io/s/bj5pc0?file=/demo.tsx:307-380
// @TODO add username
