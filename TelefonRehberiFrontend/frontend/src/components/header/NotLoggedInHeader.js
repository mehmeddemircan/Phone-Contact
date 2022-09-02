import React, { Fragment } from 'react'

const NotLoggedInHeader = ({handleShowLoginModal}) => {
  return (
    <Fragment>
         <button class="btn border-0" type="text" onClick={handleShowLoginModal} >
                Sign in
              </button>
    </Fragment>
  )
}

export default NotLoggedInHeader