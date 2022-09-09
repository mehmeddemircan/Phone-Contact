import { Button, Tooltip } from 'antd'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteComment } from '../../redux/actions/CommentAction'

const CommentEditDelete = ({comment , handleDeleteComment,handleShowEditForm}) => {



 


  return (
  <Fragment>
     <Tooltip
             title={
               <ul class="list-group">
                 <button
                   type="button"
                   class="btn btn-link btn-sm"
                   style={{ color: "#fff" }}
                   onClick={() => handleDeleteComment(comment.id)}
                 >
                   Delete {comment.id}
                 </button>
                 <button
                   type="button"
                   class="btn btn-link btn-sm"
                   style={{ color: "#fff" }}
                   onClick={handleShowEditForm}
                 >
                   Edit 
                 </button>
               </ul>
             }
             trigger="click"
           >
             <Button
               type='text'
               shape="circle"
               icon={<i class="fa-solid fa-ellipsis"></i>}
             />
           </Tooltip>
  </Fragment>
  )
}

export default CommentEditDelete