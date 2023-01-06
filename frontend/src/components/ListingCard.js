import React from 'react'
import { Card } from 'antd'
const { Meta } = Card;




const ListingCard = ({ pokemonId, pokemonName, shiny, location, description, username, pokemonImage }) => {

  const content = (
    <div>
      <div>
        {description}
      </div>
      <div>
        PINICON: {location}
      </div>
      <div>
        Added: yesterday at 20:26
      </div>
      <div>
        {username}
      </div>
    </div>
  )

  return (
    <Card
      size='small'
      hoverable
      cover={<img alt="example" src={pokemonImage} />}
    >
      <Meta title={pokemonName} description={content}/>
    </Card>
)}

export default ListingCard

// @TODO add loading skeleton https://codesandbox.io/s/bj5pc0?file=/demo.tsx:307-380
// @TODO add username