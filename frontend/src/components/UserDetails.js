import React from 'react'

import {
  Typography, Descriptions, Space, Col, Row, Card, Button,
} from 'antd'
import {
  MailOutlined, FacebookOutlined, PushpinOutlined, WhatsAppOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import moment from 'moment'
import nl2br from 'react-nl2br'

const { Title, Paragraph } = Typography

const UserDetails = ({ user, signedInUser }) => {
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
          {`${username}s profile`}
        </Title>
        <Paragraph>
          <PushpinOutlined style={{ marginRight: 5 }} />
          {location}
          {signedInUser && (<Link to="/edit-profile"><Button type="default" style={{ float: 'right' }}>Edit profile</Button></Link>)}
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
          <Paragraph>
            {nl2br(about)}
          </Paragraph>
        </Card>
      </Col>
      <Col xs={24}>

        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Pokémon GO details"
        >
          <Descriptions colon={false} column={1}>
            <Descriptions.Item label="Level:">{poGoLevel}</Descriptions.Item>
            {poGoUsername && (<Descriptions.Item label="Username:">{poGoUsername}</Descriptions.Item>)}
            {trainerCode && (<Descriptions.Item label="Trainer code:" style={{ paddingBottom: 0 }}><Paragraph copyable>{trainerCode}</Paragraph></Descriptions.Item>)}
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
          <Space direction="vertical">
            <Space align="top">
              <MailOutlined />
              <Paragraph copyable>{emailAddress}</Paragraph>
            </Space>

            {whatsApp && (
            <Space align="top">
              <WhatsAppOutlined />
              <Paragraph copyable>{whatsApp}</Paragraph>
            </Space>
            )}

            {facebook && (
            <Space align="top">
              <FacebookOutlined />
              <a href={`https://facebook.com/users/${facebook}`} target="_blank" rel="noreferrer" title={`Open ${username}'s Facebook profile`}>{facebook}</a>
            </Space>
            )}
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
          <Space>
            <Paragraph>Member since:</Paragraph>
            <Paragraph>{moment(createdAt).format('D MMMM YYYY')}</Paragraph>
          </Space>
        </Card>
      </Col>
    </Row>
  )
}
export default UserDetails
