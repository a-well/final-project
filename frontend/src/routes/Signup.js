import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import Center from 'components/Center'

import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <h1>Sign up</h1>
      <Center>
      <Form
        layout="vertical"
        style={{ width: '280px', paddingTop:'70px'}}>
        <h1 style={{ textTransform: 'uppercase'}}>Sign up</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter your username',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Letters and numbers only" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="Minimum 10 characters" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirm-password"
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="And again, please" />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="emailaddress"
          rules={[
            {
              required: true,
              message: 'Please enter your email address',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
        </Form.Item>

        <Form.Item name="gdpr-etc" valuePropName="checked">
          <Checkbox>
            <Link to='/gdpr-etc'>GDPR and rules are fine by me</Link>
          </Checkbox>
        </Form.Item>

      <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
            Sign up
          </Button>
        </Form.Item>
      </Form>

    </Center>
    </>
  )
}

export default Signup