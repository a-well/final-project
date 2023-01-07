import React, { useEffect } from 'react'
import {
  Button, Checkbox, Form, Input,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Center from 'components/Center'

// import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../utils/utils'
// import user from 'reducers/user'

function Login() {
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const accessToken = false
  // const accessToken = useSelector((store) => store.user.accessToken)
  // const error = useSelector((store) => store.user.error)

  useEffect(() => {
    if (accessToken) {
      navigate('/')
    }
  }, [accessToken])

  const onFinish = (values) => {
    console.log('Success:', values);
    const { username, password } = values

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }

    fetch(API_URL('api/auth/login'), options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          alert('LOGGED IN!!!')
          // batch(() => {
          //   dispatch(user.actions.setUsername(data.response.username))
          //   dispatch(user.actions.setUserId(data.response.id))
          //   dispatch(user.actions.setAccessToken(data.response.accessToken))
          //   dispatch(user.actions.setError(null))
          // })
        } else {
          alert('failed')
          // @todo show errors
        }
      })
  };

  return (
    <Center>
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

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" style={{ float: 'left' }} noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/forgot-password" style={{ float: 'right' }}>
            Forgot password?
          </Link>
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
