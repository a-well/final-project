import React from 'react';
import { Button } from 'antd';
import {
  LogoutOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector, batch } from 'react-redux'
import user from 'reducers/user'

const LogoutButton = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => {
      batch(() => {
        dispatch(user.actions.setUser(null))
        dispatch(user.actions.setAccessToken(null))
      })
    }}
    >
      <LogoutOutlined />
      {' Log out'}
    </Button>
  )
}
export default LogoutButton