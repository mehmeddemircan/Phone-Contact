import { Button, Form, message } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateComment } from '../../redux/actions/CommentAction'
const EditCommentForm = ({comment,setEditFormShow}) => {


    const auth = useSelector((state) => state.auth)   
    const {updateSuccess} = useSelector((state) => state.commentUpdateDelete)   

  
 
    const [userId, setUserId] = useState(comment.userId)
    const [groupId, setGroupId] = useState(comment.groupId)
    const [status, setStatus] = useState(2)

    const [createdTime, setCreatedTime] = useState(comment.createdTime)
    const [commentText, setCommentText] = useState(comment.commentText)
    const [updatedBy, setUpdatedBy] = useState(comment.userId)
    const [updatedTime, setUpdatedTime] = useState("2022-09-09T07:42:44.450Z")
    const dispatch= useDispatch()
    const handleEditComment = () => {
        dispatch(UpdateComment(comment.id,{userId,groupId,status,commentText,createdTime,updatedBy,updatedTime}))

        if (!updateSuccess) {
            setEditFormShow(false)
        }
    }

  return (
            <Fragment>
           
                 <Form.Item>
      <TextArea rows={5} onChange={(e) => setCommentText(e.target.value) } value={commentText} />
    </Form.Item>
    <Button onClick={handleEditComment}>Edit</Button>
            </Fragment>
  )
}

export default EditCommentForm