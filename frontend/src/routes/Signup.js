/* eslint react/no-array-index-key: 0 */

import React, { useState, useEffect } from 'react'
import {
  Button, Checkbox, Form, Input, Select,
} from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import Center from 'components/Center'
import { Link, useNavigate } from 'react-router-dom'

import postApi from 'hooks/postApi'
import { useDispatch, useSelector, batch } from 'react-redux'
import user from 'reducers/user'

const { TextArea } = Input

const { Option } = Select

const pokemonGoMaxLevel = 50
const minLevelToTrade = 10
const pokemonLevels = [...Array((pokemonGoMaxLevel + 1) - minLevelToTrade)]

function Signup() {
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
    console.log(values)
    const res = await trigger(values)

    console.log(res)
    if (res.errors) {
      setErrors(res.errors)
    } else if (res.success) {
      batch(() => {
        dispatch(user.actions.setUser(res.user))
        dispatch(user.actions.setAccessToken(res.user.accessToken))
      })
      setRedirect('/home')
    } else {
      console.log('Something unexpected happened in signup')
    }
  }

  return (
    <Center>
      <Form
        onFinish={save}
        layout="vertical"
        style={{ width: '280px', paddingTop: '70px' }}
      >
        <h1 style={{ textTransform: 'uppercase' }}>Sign up</h1>

        {errors && (
        <div>
          <h3>FEL!!</h3>
          <pre>
            {JSON.stringify(errors, null, 2)}
          </pre>
        </div>
        )}
        <Form.Item
          label="Username"
          name="username"
          tooltip="Your username on the site, maximum 25 characters"
          rules={[
            {
              required: true,
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
          tooltip="This address will be used for logging in, and also for resetting your password."
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

        <Form.Item label="Location" name="location">
          <Input placeholder="Your location" />
        </Form.Item>

        <Form.Item label="WhatsApp" name="whatsApp">
          <Input placeholder="or mobile phone #" />
        </Form.Item>

        <Form.Item label="Facebook" name="facebook">
          <Input placeholder="Facebook url" />
        </Form.Item>

        <Form.Item label="About" name="about">
          <TextArea showCount maxLength={350} placeholder="A short introduction :)" />
        </Form.Item>

        {/* <Form.Item name="gdpr-etc" valuePropName="checked">
          <Checkbox>
            <Link to="/gdpr-etc" target="_blank">GDPR and rules are fine by me</Link>
          </Checkbox>
        </Form.Item> */}

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
