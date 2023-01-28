import React from 'react'
import {
  Card, Skeleton,
} from 'antd'

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
