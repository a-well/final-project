/* eslint react/no-array-index-key: 0 */

import React, { useState, useEffect } from 'react'
import {
  Button, Form, Input, Select, message, Typography, Alert,
} from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import postApi from 'hooks/postApi'
import { useDispatch, batch } from 'react-redux'
import user from 'reducers/user'
import Center from 'components/Center'

const { TextArea } = Input

const { Title } = Typography

const { Option } = Select

const pokemonGoMaxLevel = 50
const minLevelToTrade = 10
const pokemonLevels = [...Array((pokemonGoMaxLevel + 1) - minLevelToTrade)]

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { trigger } = postApi('/api/auth/register')

  const [errors, setErrors] = useState(null)
  const [redirectTo, setRedirect] = useState(null)
  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo)
    }
  }, [redirectTo])

  const save = async (values) => {
    const res = await trigger(values)

    if (res.success) {
      batch(() => {
        dispatch(user.actions.setUser(res.user))
        dispatch(user.actions.setAccessToken(res.user.accessToken))
      })
      setRedirect('/home')
      message.success('Sign up successful! Welcome to PokeYAY')
    } else if (res.success === false) {
      window.scrollTo(0, 0);
      setErrors(res.response)
    } else {
      message.error('Something unexpected happened in sign up, please try again')
    }
  }

  return (
    <Center>
      <Form
        onFinish={save}
        layout="vertical"
      >
        <Title>Sign up</Title>

        {errors && (
          <Alert type="error" message="Username and/or email address already in use" style={{ marginBottom: 12 }} />
        )}
        <Form.Item
          label="Username"
          name="username"
          tooltip="Your username on the site, maximum 20 characters"
          rules={[
            {
              required: true,
              max: 20,
              message: 'Please enter a username',
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
            {
              min: 10,
              message: 'password is too short, minimum 10 chars',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Minimum 10 characters" />
        </Form.Item>

        <Form.Item
          label="E-mail address"
          name="emailAddress"
          tooltip="Please fill this is so that other users can contact you for trading"
          rules={[
            {
              required: true,
              message: 'Please enter your email address',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
        </Form.Item>

        <Form.Item
          name="poGoLevel"
          label="PoGO level"
          tooltip="Why do we ask? Trading is only possible from level 10 up,
          and the level which you and the person you are trading with are on
          will the potential HP and CP of the Pokemon traded"
          rules={[
            {
              required: true,
              message: 'Please select your Pokemon Trainer level',
            },
          ]}
        >
          <Select placeholder="Select your level">
            {pokemonLevels.map((_, level) => (
              <Option value={level + minLevelToTrade} key={level + minLevelToTrade}>
                {level + minLevelToTrade}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="PoGO username" name="poGoUsername">
          <Input placeholder="Your username in Pokemon GO" />
        </Form.Item>

        <Form.Item label="PoGO Trainer Code" name="trainerCode">
          <Input placeholder="eg. 0000 0000 0000" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: 'Please input your location',
            },
          ]}
        >
          <Input placeholder="Your location" />
        </Form.Item>

        <Form.Item label="WhatsApp" name="whatsApp">
          <Input placeholder="or mobile phone #" />
        </Form.Item>

        <Form.Item label="Facebook" name="facebook">
          <Input placeholder="Facebook url" />
        </Form.Item>

        <Form.Item label="About" name="about">
          <TextArea showCount maxLength={350} rows={4} placeholder="A short introduction :)" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Sign up
          </Button>
        </Form.Item>
      </Form>

    </Center>
  )
}

export default Signup
