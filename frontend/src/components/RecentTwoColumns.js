import React from 'react'
import { Col, Row } from 'antd'

import RecentListings from 'components/RecentListings'

const RecentTwoColumns = ({ username }) => (
  // DETTA ÄR FÖR BÅDE WANTED OCH LOOKING

  <Row
    justify="center"
    gutter={{
      // GUTTER MELLAN WANTED OCH LOOKING COLUMNERNA
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

// xs = 0-576 px wide TELEFON
// sm = 577-768 px wide TELEFON
// md = 769-992 px wide TABLET
// lg = 993-1199 px wide DATOR
// xl = 1200-1600 px wide
// xxl = 1601 px and larger
