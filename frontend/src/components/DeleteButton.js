import { Button } from 'antd'
import deleteApi from 'hooks/deleteApi'
import React from 'react'

const DeleteButton = ({ id }) => {
  const { trigger } = deleteApi(`/api/listings/${id}`)
  return (

    <Button
      style={{ width: '100%' }}
      type="primary"
      danger
      onClick={async () => {
        await trigger()
        console.log('this was deleted')
      }}
    >
      Delete listing
    </Button>

  )
}

export default DeleteButton

// @TODO add popconfirm https://ant.design/components/popconfirm
// @TODO go back to start page and add message that listing was deleted?
