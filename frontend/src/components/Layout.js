import React from 'react';
import {  Layout, Menu } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const nav = useNavigate()
  return (
    <Layout>
      <Header>
        <Link to='/' title='Go to start page' style={{ paddingRight: '30px', color: 'white', float: 'left', fontSize: 24, fontWeight: 'bold'}}>PokeYAY</Link>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={e => {
            console.log('click in menu, ', e)
            nav(e.key)
          }}
          items={[
            {key: '/home', label: 'Home'},
            {key: '/signup', label: 'Sign up'},
            {key: '/login', label: 'Log in'},
            {key: '/post-listing', label: 'Post listing'},
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


      <Footer style={{textAlign: 'center'}}><Link to='/about'>PokeYAY 2023</Link></Footer>
    </Layout>
  )
};
export default AppLayout;
