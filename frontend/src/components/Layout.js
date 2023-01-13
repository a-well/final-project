import React from 'react'
import { Layout, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
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
          PokeYAY 2023
          <Divider type="vertical" />
          <a href="https://github.com/a-well/final-project">About</a>
          <Divider type="vertical" />
          <a href="mailto:amanda@amandas.dev">Contact</a>
        </Center>
      </Footer>
    </Layout>
  )
}
export default AppLayout
