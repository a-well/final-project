import React from 'react'
import { Card } from 'antd'
import { PushpinOutlined } from '@ant-design/icons'

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
    🌟✨
  </div>
)

function ListingCard({
  pokemonId,
  pokemonName,
  shiny,
  location,
  hideTitle = false,
  description,
  username,
  pokemonImage,
  dateAdded,
  contact,
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
        Today 9:20 by
        {' '}
        {username}
      </div>
      <div>
        {contact}
      </div>
      <div>
        {description}
      </div>
    </div>
  )

  const cover = (
    <div style={{ position: 'relative' }}>
      <img alt={pokemonName} src={pokemonImage} />
      {shiny && <ShinyStar />}
    </div>
  )

  return (
    <Card
      size="small"
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
