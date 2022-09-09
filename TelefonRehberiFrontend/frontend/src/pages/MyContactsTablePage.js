import React, { Fragment } from 'react'
import HomeLayout from '../components/layout/HomeLayout'
import UserListTable from '../components/table/UserListTable'

const MyContactsTablePage = () => {
  return (
   <Fragment>
    <HomeLayout>
    <UserListTable />
    </HomeLayout>
   </Fragment>
  )
}

export default MyContactsTablePage