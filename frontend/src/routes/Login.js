import React, { useEffect, useState  } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

// import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../utils/utils'
// import user from 'reducers/user'

const Login = () => {
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
      body: JSON.stringify({username, password})
    }

    fetch(API_URL('api/auth/login'), options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.success) {
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
    <Form onFinish={onFinish} initialValues={{
      username: 'testmanda',
      password: 'testloesen'
    }} >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please enter your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login