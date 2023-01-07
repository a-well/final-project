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
import Center from './Center';

const { Header, Content, Footer } = Layout;

function AppLayout({ children }) {
  const nav = useNavigate()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ paddingInline: '10px' }}>
        <div style={{ display: 'flex' }}>
          <Link
            to="/"
            title="Go to start page"
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
                    {' Search listings'}
                  </>
                ),
              },
              {
                key: '/post-listing',
                label: (
                  <>
                    <PlusOutlined />
                    {' Post new listing'}
                  </>
                ),
              },
              {
                key: '/me',
                label: (
                  <>
                    <UserOutlined />
                    {' Profile'}
                  </>
                ),
              },
              // @TODO add MyListings
              {
                key: '/login',
                label: (
                  <>
                    <LoginOutlined />
                    {' Log in'}
                  </>
                ),
              },
              // {key: '/logout', label: (<><LogoutOutlined />{' Log out'}</>)},
              {
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

      <Content style={{ padding: '60px', background: 'white' }}>
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
