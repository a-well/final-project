import React from 'react';
import {  Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const nav = useNavigate()
  return (
    <Layout>
      <Header>
        <div style={{ color: 'white', float: 'left', fontSize: 24, fontWeight: 'bold'}}>
          PokeYAY
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={e => {
            console.log('click in menu, ', e)
            nav(e.key)
          }}
          items={[
            {key: '/login', label: 'Log in'},
            {key: '/signup', label: 'Sign up'},
            {key: '/search', label: 'Search'},
            {key: '/me', label: 'My Profile'}
          ]}
        />
      </Header>


      <Content style={{ padding: '50px', background: 'white' }}>
        <div style={{minHeight: 400 }}>
          {children}
        </div>
      </Content>


      <Footer style={{textAlign: 'center'}}>Footer</Footer>
    </Layout>
  )
};
export default AppLayout;
