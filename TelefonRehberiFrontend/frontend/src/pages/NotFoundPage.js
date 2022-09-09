import { Button, Result } from 'antd'
import React, { Fragment } from 'react'
import HomeLayout from '../components/layout/HomeLayout'

const NotFoundPage = () => {
  return (
   <Fragment>
    <HomeLayout>
    <Result
      status="404"
      title="404"
      subTitle={<span class="fs-3">Aradığınız sayfa bulunamadı</span>}
      extra={
        <Button type="primary" size='large'  href="/">
        Anasayfa 
        </Button>
      }
    />
    </HomeLayout>

   </Fragment>
  )
}

export default NotFoundPage