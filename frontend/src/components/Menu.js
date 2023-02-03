import React from 'react'
import { Menu } from 'antd'
import {
  SearchOutlined,
  UserOutlined,
  PlusOutlined,
  HomeOutlined,
  LoginOutlined,
  SmileOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutButton from './LogoutButton'

const AppMenu = () => {
  const nav = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)

  return (

    <Menu
      style={{ flex: 'auto', minWidth: 0, justifyContent: 'end' }}
      theme="dark"
      mode="horizontal"
      onClick={(e) => {
        nav(e.key)
      }}
      overflowedIndicator={<MenuOutlined />}
      items={[
        {
          key: '/home',
          label: (
            <>
              <HomeOutlined />
              {' Home'}
            </>
          ),
        },
        {
          key: '/browse',
          label: (
            <>
              <SearchOutlined />
              {' Browse listings'}
            </>
          ),
        },
        accessToken && {
          key: '/post-listing',
          label: (
            <>
              <PlusOutlined />
              {' Post new listing'}
            </>
          ),
        }, accessToken
              && {
                key: '/me',
                label: (
                  <>
                    <UserOutlined />
                    {' Profile'}
                  </>
                ),
              },
        // @TODO add MyListings
        !accessToken && {
          key: '/login',
          label: (
            <>
              <LoginOutlined />
              {' Log in'}
            </>
          ),
        },
        accessToken && {
          key: '/',
          label: <LogoutButton />,
        },
        !accessToken && {
          key: '/signup',
          label: (
            <>
              <SmileOutlined />
              {' Sign up'}
            </>
          ),
        },
      ]}
    />

  )
}
export default AppMenu
