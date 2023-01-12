import Center from 'components/Center'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography, Space, Row, Col, Button, Result,
} from 'antd'

const { Title } = Typography

function NotFound() {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Result
        status="error"
        title="Error 404: Page not found"
        subTitle="Must be the work of Team Rocket..."
        extra={[
          <Link to="/home">
            <Button type="primary" key="console">Go to home page</Button>
          </Link>,
        ]}
      />
    </Space>
  )
}

export default NotFound
