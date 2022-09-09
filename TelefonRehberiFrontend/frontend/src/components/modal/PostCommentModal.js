import { Button, message, Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddComment } from '../../redux/actions/CommentAction'
import PostCommentForm from '../forms/PostCommentForm'

const PostCommentModal = ({showCommentModal,handleCloseComment,groupDetails}) => {

    const auth = useSelector((state) => state.auth)   

  
 
    const [userId, setUserId] = useState(auth.user.id)
    const [groupId, setGroupId] = useState(groupDetails.groupId)
    const [status, setStatus] = useState(2)
    const [commentText, setCommentText] = useState("")
    const [createdTime, setCreatedTime] = useState("2022-09-08T16:39:34.828Z")


    const dispatch = useDispatch() ; 

    const handlePostComment = () => {
        message.success(commentText)
        message.success(createdTime)
        dispatch(AddComment({userId,groupId,status,commentText,createdTime}))
        
    }

    

  return (
    <Fragment>
        <Modal
              title="Vertically centered modal dialog"
              centered
              visible={showCommentModal}
             onCancel={handleCloseComment}
              onOk={handlePostComment}
              footer={[
              
                <Button key="submit" type="primary"onClick={handlePostComment}>
                  Add Comment
                </Button>
               
              ]}
        >
         <PostCommentForm 
            commentText={commentText}
            setCommentText={setCommentText}
         />
        </Modal>
    </Fragment>
  )
}

export default PostCommentModal