/* eslint-disable max-len */
import React from 'react'

import { Typography, Button, Space } from 'antd'

import { Link } from 'react-router-dom'

const { Title } = Typography

function Hero() {
  return (
    <div style={{ textAlign: 'center', marginBottom: 48 }}>
      <Title level={1}>PokeYay</Title>
      <p className="ingress">Discover new Pokemon GO friends to play or exchange Pokemon with - where&nbsp;ever you are.</p>
      <Space>
        <Link to="/signup">
          <Button type="primary">
            Sign up
          </Button>
        </Link>
        <Link to="/about">
          <Button>
            About
          </Button>
        </Link>
      </Space>
    </div>

  )
}

export default Hero
