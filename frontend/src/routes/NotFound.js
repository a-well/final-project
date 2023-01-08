import Center from 'components/Center'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Center>
      <h1>Oh no, it's a 404 *insert surprised Pikachu*</h1>
      <Center>
        <Link to="/">Go home</Link>
      </Center>
    </Center>
  )
}

export default NotFound
