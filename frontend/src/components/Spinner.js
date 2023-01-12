import { Spin } from 'antd'
import React from 'react'
import Center from './Center'

const Spinner = () => (
  <Center
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <div style={{ paddingTop: 70 }}>
      <Spin
        tip="Loading..."
      />
    </div>
  </Center>
)

export default Spinner
