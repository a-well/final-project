import React from 'react';
import { Layout, Menu } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  PlusOutlined,
  HomeOutlined,
  LoginOutlined,
  SmileOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Center from './Center'
import LogoutButton from './LogoutButton'

const { Header, Content, Footer } = Layout

function AppLayout({ children }) {
  const nav = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ paddingInline: '10px' }}>
        <div style={{ display: 'flex' }}>
          <Link
            to="/home"
            title="Go to home page"
            style={{
              paddingLeft: '50px', color: 'white', fontSize: 24, fontWeight: 'bold',
            }}
          >
            PokeYAY
          </Link>
          <Menu
            style={{ flex: 'auto', minWidth: 0, justifyContent: 'end' }}
            theme="dark"
            mode="horizontal"
            onClick={(e) => {
              console.log('click in menu, ', e)
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
                key: '/search',
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
                key: '/logout',
                // @TODO add "you have been signed out" message to home
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
        </div>
      </Header>

      <Content className="main-wrapper">
        <div>
          {children}
        </div>
      </Content>

      <Footer>
        <Center>
          <Link to="/about">PokeYAY 2023</Link>
        </Center>
      </Footer>
    </Layout>
  )
}
export default AppLayout;
