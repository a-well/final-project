import React from 'react';
import { Layout, Menu } from 'antd';
import { SearchOutlined, UserOutlined, PlusOutlined, HomeOutlined, LogoutOutlined, LoginOutlined, SmileOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const nav = useNavigate()

  return (
    <Layout>
      <Header>
        <Link to='/' title='Go to start page' style={{ paddingRight: '30px', color: 'white', fontSize: 24, fontWeight: 'bold', float: 'left'}}>PokeYAY</Link>
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={e => {
            console.log('click in menu, ', e)
            nav(e.key)
          }}
          overflowedIndicator={<MenuOutlined />}
          items={[
            
            {key: '/home', label: (<><HomeOutlined />{' Home'}</>)},
            {key: '/search', label: (<><SearchOutlined />{' Search'}</>)},
            {key: '/post-listing', label: (<><PlusOutlined />{' Post new listing'}</>)},
            {key: '/me', label: (<><UserOutlined />{' Profile'}</>)},
            {key: '/login', label: (<><LoginOutlined />{' Log in'}</>)},
            // {key: '/logout', label: (<><LogoutOutlined />{' Log out'}</>)},
            {key: '/signup', label: (<><SmileOutlined />{' Sign up'}</>)}
          ]}
        />
      </Header>


      <Content style={{ padding: '50px', background: 'white' }}>
        <div style={{ minHeight: 400 }}>
          {children}
        </div>
      </Content>


      <Footer style={{textAlign: 'center'}}><Link to='/about'>PokeYAY 2023</Link></Footer>
    </Layout>
  )
};
export default AppLayout;
