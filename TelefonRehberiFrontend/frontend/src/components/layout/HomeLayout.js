import React, { Fragment } from 'react'
import HomeFooter from '../footer/HomeFooter'
import HomeHeader from '../header/HomeHeader'

const HomeLayout = (props) => {
  return (
        <Fragment>
            <HomeHeader />
          <div class="container my-5">
          {props.children}
          </div>
          <HomeFooter />
        </Fragment>


  )
}

export default HomeLayout