import { Pagination } from 'antd'
import React from 'react'

const UserPagination = ({current,onChange}) => {
  return (
    <div class="float-end">
    <Pagination current={current} onChange={onChange} defaultCurrent={1} total={100} pageSize={5}  />
    </div>
   
  )
}

export default UserPagination