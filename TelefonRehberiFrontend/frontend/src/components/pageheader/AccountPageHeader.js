import { PageHeader } from 'antd'
import React, { Fragment } from 'react'

const AccountPageHeader = () => {
  return (
  <Fragment>
     <PageHeader
    

    onBack={() => window.history.back()}
    title="Account"
    subTitle="This is a subtitle"
  />
  </Fragment>
  )
}

export default AccountPageHeader