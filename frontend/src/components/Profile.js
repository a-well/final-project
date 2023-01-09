import React from 'react';
import RecentListings from 'components/RecentListings'
import { Typography, Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import UserDetails from './UserDetails'

const { Title, Text } = Typography

const Profile = ({ username }) => (
  <>
    <Space>
      <Avatar size={64} icon={<UserOutlined />} />
      <Title>

        {username}
        s
        {' '}
        profile
      </Title>
    </Space>
    <Title level={2}>
      About
      {' '}
      {username}
    </Title>
    <UserDetails username={username} />
    <Title level={2}>
      {username}
      s
      {' '}
      listings
    </Title>
    <RecentListings type="wanted" username={username} />
    <RecentListings type="looking-for-a-new-home" username={username} />
  </>
)

export default Profile
