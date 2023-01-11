import Center from 'components/Center'
import React from 'react'
import { Link } from 'react-router-dom'
import Typography from 'antd/es/typography/Typography'

const { Title, Text } = Typography

function NotFound() {
  return (
    <Center>
      <Title>Oh no, it's a 404 *insert surprised Pikachu*</Title>
      <Center>
        <Link to="/">Go home</Link>
      </Center>
    </Center>
  )
}

export default NotFound
