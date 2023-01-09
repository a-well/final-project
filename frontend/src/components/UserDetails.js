import React from 'react'

import {
  Typography, Descriptions, Space, Col, Row, Card,
} from 'antd'
import {
  MailOutlined, FacebookOutlined, PushpinOutlined, WhatsAppOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

const UserDetails = ({ user }) => {
  const {
    username,
    location,
    createdAt,
    emailAddress,
    whatsApp,
    facebook,
    poGoLevel,
    trainerCode,
    poGoUsername,
    about,
  } = user
  return (

    <Row gutter={16}>
      <Col xs={24}>
        <Title>
          {username}
          s
          {' '}
          profile
        </Title>
        <Paragraph>
          <PushpinOutlined />
          {' '}
          {location}
        </Paragraph>
      </Col>
      <Col xs={24}>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="About"
        >
          {about}
        </Card>
      </Col>
      <Col xs={24}>

        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Pokemon Go stats"
        >
          <Descriptions colon={false} column={1}>
            <Descriptions.Item label="Level:">{poGoLevel}</Descriptions.Item>
            <Descriptions.Item label="Username:">{poGoUsername}</Descriptions.Item>
            <Descriptions.Item label="Friend code:"><Paragraph copyable>{trainerCode}</Paragraph></Descriptions.Item>
          </Descriptions>
        </Card>

      </Col>
      <Col xs={24} sm={16}>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Contact"
        >
          <Space align="top">
            <MailOutlined />
            <Paragraph copyable>{emailAddress}</Paragraph>
          </Space>
          <br />

          <Space align="top">
            <WhatsAppOutlined />
            <Paragraph copyable>{whatsApp}</Paragraph>
          </Space>
          <br />

          <Space align="top">
            <FacebookOutlined />
            <a href={`https://facebook.com/users/${facebook}`} target="_blank" rel="noreferrer" title={`Open ${username}'s Facebook profile`}>{facebook}</a>

          </Space>
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Other info"
        >
          <Space align="top">
            <Paragraph>
              Member since
              {' '}
              {createdAt}
            </Paragraph>
          </Space>
        </Card>
      </Col>
    </Row>
  )
}
export default UserDetails
