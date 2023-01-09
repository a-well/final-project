import React from 'react'
import { Card, Space, Typography } from 'antd'
import { FacebookOutlined, PushpinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Center from './Center'

const { Paragraph } = Typography

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
}) {
  const content = (
    <div>
      <div>
        <PushpinOutlined />
        {' '}
        {location}
      </div>
      <div>
        {createdAt}
        {' by '}
        <Link to={`/users/${username}`}>{username}</Link>
      </div>

      {standalone && (
      <Space align="top">
        <FacebookOutlined />
        <Paragraph copyable>fbusername</Paragraph>
      </Space>
      )}
      <div>
        {description}
      </div>
    </div>
  )

  const cover = (
    <div style={{ position: 'relative' }}>
      <Center><img alt={pokemonName} src={shiny ? pokemonImageShiny : pokemonImage} style={{ width: '150px' }} /></Center>
      {shiny && <ShinyStar />}
    </div>
  )

  return (
    <Card
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
