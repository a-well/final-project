import React, { useEffect, useState } from 'react'
import {
  Alert,
  Button, Checkbox, Form, Input,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Center from 'components/Center'

import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import user from 'reducers/user'
import { API_URL } from '../utils/utils'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errors, setErrors] = useState(null)
  const accessToken = useSelector((store) => store.user.accessToken)
  console.log(accessToken)
  useEffect(() => {
    if (accessToken) {
      navigate('/home')
    }
  }, [accessToken])

  const onFinish = (values) => {
    console.log('Success')
    const { username, password } = values

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }

    fetch(`${API_URL}api/auth/login`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
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
        console.log(e)
        setErrors(['Could not connect to server'])
      })
  };

  console.log(errors)
  return (

    <Center>

      {errors && (
        <Alert type="error" message={errors.join(', ')} />
      )}

      <Form
        layout="vertical"
        style={{ width: '280px', paddingTop: '70px' }}
        onFinish={onFinish}
        requiredMark={false}
        initialValues={{
          username: 'testmanda',
          password: 'testloesen',
        }}
      >
        <h1 style={{ textTransform: 'uppercase' }}>Log in</h1>
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

        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" style={{ float: 'left' }} noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/forgot-password" style={{ float: 'right' }}>
            Forgot password?
          </Link>
        </Form.Item> */}

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
