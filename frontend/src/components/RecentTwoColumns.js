import React from 'react'
import { Col, Row } from 'antd'

import RecentListings from 'components/RecentListings'

const RecentTwoColumns = ({ username }) => (
  <Row
    justify="center"
    gutter={{
      // Space between the two columns
      xs: 8,
      sm: 16,
      md: 24,
      lg: 30,
    }}
  >
    <Col xs={24} sm={24} md={12}>
      <RecentListings type="wanted" username={username} />
    </Col>
    <Col xs={24} sm={24} md={12}>
      <RecentListings type="looking-for-a-new-home" username={username} />
    </Col>
  </Row>
)

export default RecentTwoColumns
