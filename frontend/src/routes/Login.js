import React, { useEffect, useState } from 'react'
import {
  Alert,
  Button, Form, Input, Typography,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Center from 'components/Center'

import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import user from 'reducers/user'
import { API_URL } from '../utils/utils'

const { Title } = Typography

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errors, setErrors] = useState(null)
  const accessToken = useSelector((store) => store.user.accessToken)
  useEffect(() => {
    if (accessToken) {
      navigate('/home')
    }
  }, [accessToken])

  const onFinish = (values) => {
    const { username, password } = values

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }

    fetch(`${API_URL}/api/auth/login`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setErrors(null)
          batch(() => {
            dispatch(user.actions.setUser(data.response.user))
            dispatch(user.actions.setAccessToken(data.response.accessToken))
          })
        } else {
          setErrors([data.response])
        }
      }).catch((e) => {
        setErrors(['Could not connect to server'])
      })
  }

  return (

    <Center>
      {errors && (
        <Alert type="error" message={errors.join(', ')} />
      )}

      <Form
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Title>Log in</Title>
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
          Not a member?
          {' '}
          <Link to="/signup">Sign up now!</Link>
        </Form.Item>
      </Form>
    </Center>
  )
}

export default Login
