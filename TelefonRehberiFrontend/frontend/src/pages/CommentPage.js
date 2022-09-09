import React, { Fragment } from 'react'
import HomeLayout from '../components/layout/HomeLayout'
import CommentPageHeader from '../components/pageheader/CommentPageHeader'

const CommentPage = () => {
  return (
   <Fragment>
    <HomeLayout>
            <CommentPageHeader />
    </HomeLayout>
   </Fragment>
  )
}

export default CommentPage