import React from 'react'
import {
  Card, Space, Typography, Divider, Row, Skeleton,
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

function LoadingCard() {
  return (
    <Card>
      <Skeleton loading avatar active>

        <Meta
          title="loading"
          description=""
        />
      </Skeleton>
    </Card>

  )
}

export default LoadingCard
