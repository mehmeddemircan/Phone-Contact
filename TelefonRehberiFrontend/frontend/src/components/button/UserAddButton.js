import { Button } from 'antd'
import React, { Fragment } from 'react'

const UserAddButton = ({handleShowUserModal}) => {
  return (
    <Fragment>
        <Button type="primary" onClick={handleShowUserModal}>
         Add User
      </Button>
    </Fragment>
  )
}

export default UserAddButton