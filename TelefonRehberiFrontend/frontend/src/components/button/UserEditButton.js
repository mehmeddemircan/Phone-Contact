import { Button } from 'antd'
import React, { Fragment } from 'react'

const UserEditButton = ({user,handleShowEditModal}) => {
  return (
    <Fragment>
     <Button
    class="btn border-0"
    type="link"
    onClick={handleShowEditModal}
  >
    edit  {user.id}
  </Button>
   </Fragment>
  )
}

export default UserEditButton