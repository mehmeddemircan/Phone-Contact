import { Button, message ,Form} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { Fragment, useState } from 'react'

const PostCommentForm = ({commentText,setCommentText}) => {


  return (
   <Fragment>
     <Form.Item>
      <TextArea rows={5} onChange={(e) => setCommentText(e.target.value) } value={commentText} />
    </Form.Item>
 
   </Fragment>
  )
}

export default PostCommentForm