/* eslint react/no-array-index-key: 0 */

import React from 'react'
import {
  Button, Checkbox, Form, Input, Select,
} from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import Center from 'components/Center'
import { Link } from 'react-router-dom'

const { TextArea } = Input
const { Option } = Select

const pokemonGoMaxLevel = 50
const minLevelToTrade = 10
const pokemonLevels = [...Array(pokemonGoMaxLevel - minLevelToTrade)]

function Signup() {
  return (
    <Center>
      <Form
        layout="vertical"
        style={{ width: '280px', paddingTop: '70px' }}
      >
        <h1 style={{ textTransform: 'uppercase' }}>Sign up</h1>

        <Form.Item
          label="E-mail address"
          name="emailaddress"
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Minimum 10 characters" />
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
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="And again, please" />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          tooltip="Your nickname on the site, maximum 25 characters"
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
          name="PogoLevel"
          label="PoGo level"
          tooltip="Why do we ask? Trading is only possible from level 10 up, and the level which you and the person you are trading with are on will the potential HP and CP of the Pokemon traded"
          rules={[
            {
              required: true,
              message: 'Please select your Pokemon Trainer level',
            },
          ]}
        >
          <Select placeholder="11">
            {pokemonLevels.map((_, level) => (
              <Option value={level + minLevelToTrade} key={level + minLevelToTrade}>
                {level + minLevelToTrade}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="About me">
          <TextArea showCount maxLength={350} placeholder="Who are you even" />
        </Form.Item>

        <Form.Item name="gdpr-etc" valuePropName="checked">
          <Checkbox>
            <Link to="/gdpr-etc">GDPR and rules are fine by me</Link>
          </Checkbox>
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
