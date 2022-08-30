import { Button } from 'antd'
import React, { Fragment } from 'react'

const UserDeleteButton = ({user,handleDeleteUser}) => {
  return (
   <Fragment>
     <Button
    class="btn border-0"
    type="link"
    onClick={() => handleDeleteUser(user.id)}
  >
    Sil  {user.id}
  </Button>
   </Fragment>
  )
}

export default UserDeleteButton