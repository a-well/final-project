import { Button, Popconfirm, message } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import deleteApi from 'hooks/deleteApi'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteButton = ({ id }) => {
  const { trigger } = deleteApi(`/api/listings/${id}`)
  const navigate = useNavigate()

  return (
    <Popconfirm
      title="Delete listing"
      description="Are you sure? This cannot be undone."
      okText="Yes, delete it"
      cancelText="No"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={async () => {
        await trigger()
        message.success('Listing was successfully deleted')
        navigate('/home')
      }}
    >

      <Button
        style={{ width: '100%' }}
        type="primary"
        danger
      >
        Delete listing
      </Button>
    </Popconfirm>

  )
}

export default DeleteButton
