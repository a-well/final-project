/* eslint react/no-array-index-key: 0 */

import React, { useState } from 'react'
import {
  Button, Form, Input, Select, Row, message,
} from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'

import patchApi from 'hooks/patchApi'
import { useDispatch } from 'react-redux'
import useUser from 'hooks/useUser'
import userReducer from '../reducers/user'

const { TextArea } = Input

const { Option } = Select

const pokemonGoMaxLevel = 50
const minLevelToTrade = 10
const pokemonLevels = [...Array((pokemonGoMaxLevel + 1) - minLevelToTrade)]

function EditProfile() {
  const [messageApi, contextHolder] = message.useMessage()
  const { user } = useUser()
  const dispatch = useDispatch()
  const { trigger } = patchApi('/api/users/me')

  const [errors, setErrors] = useState(null)

  const save = async (values) => {
    console.log(values)
    const res = await trigger(values)

    console.log(res)
    if (res.errors) {
      setErrors(res.errors)
    } else if (res.success) {
      dispatch(userReducer.actions.setUser(res.user))
      messageApi.success('Your info was saved in the database in the cloud in the internet of BYTESZ!');
    } else {
      console.log('Something unexpected happened when updating your profile')
    }
  }

  return (
    <Row justify="center">
      {contextHolder}
      <Form
        requiredMark={false}
        onFinish={save}
        layout="vertical"
        style={{ width: '280px', paddingTop: '70px' }}
        initialValues={user}
      >
        <h1 style={{ textTransform: 'uppercase' }}>Edit profile</h1>

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
          tooltip="Username cannot be changed"
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" disabled />
        </Form.Item>

        <Form.Item
          label="E-mail address"
          name="emailAddress"
          tooltip="Email address cannot be changed"
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" disabled />
        </Form.Item>

        <Form.Item
          name="poGoLevel"
          label="PoGO level"
        >
          <Select>
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
          <TextArea showCount maxLength={350} placeholder="A short introduction :)" rows="4" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Save changes
          </Button>
        </Form.Item>
      </Form>

    </Row>
  )
}

export default EditProfile
