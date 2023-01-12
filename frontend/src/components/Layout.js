import React from 'react'
import { Layout } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Center from './Center'
import Logotype from './Logotype'
import AppMenu from './Menu'

const { Header, Content, Footer } = Layout

function AppLayout({ children }) {
  const nav = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ paddingInline: '10px' }}>
        <div style={{ display: 'flex' }}>
          <Logotype />
          <AppMenu />
        </div>
      </Header>

      <Content className="main-wrapper">
        <div className="main-wrapper__inner">
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
export default AppLayout
