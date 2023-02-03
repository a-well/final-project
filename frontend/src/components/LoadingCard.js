import React from 'react'
import {
  Card, Skeleton,
} from 'antd'

const { Meta } = Card

const LoadingCard = () => (
  <Card>
    <Skeleton loading avatar active>
      <Meta
        title="loading"
        description=""
      />
    </Skeleton>
  </Card>

)

export default LoadingCard
