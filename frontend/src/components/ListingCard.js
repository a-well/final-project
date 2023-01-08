import React from 'react'
import { Card, Space, Typography } from 'antd'
import { FacebookOutlined, PushpinOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const { Meta } = Card

const ShinyStar = () => (
  <div
    style={{
      position: 'absolute',
      top: 10,
      right: 10,
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
        {' '}
        {username}
      </div>

      {standalone && (
      <Space align="top">
        <FacebookOutlined />
        <Paragraph copyable>{username}</Paragraph>
      </Space>
      )}
      <div>
        {description}
      </div>
    </div>
  )

  const cover = (
    <div style={{ position: 'relative' }}>
      <img alt={pokemonName} src={pokemonImage} style={{ maxWidth: '100%' }} />
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

// pokemonImage={"https://lorempokemon.fakerapi.it/pokemon/200"}
