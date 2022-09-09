
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Button, Comment, Tooltip } from 'antd';
import moment from 'moment';
import React, { createElement, useState , Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteComment } from '../../redux/actions/CommentAction';
import CommentEditDelete from '../button/CommentEditDelete';
import EditCommentForm from '../forms/EditCommentForm';
const CommentItem = ({comment}) => {


    const auth = useSelector((state) => state.auth)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [editFormShow, setEditFormShow] = useState(false)
  
    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction('liked');
    };
  
    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction('disliked');
    };
    const dispatch = useDispatch()
    const handleDeleteComment = () => {
      dispatch(DeleteComment(comment.id))
    }


    const handleShowEditForm = () => {
      setEditFormShow(true)
    }

    

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={dislike}>
            {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
      ];
  return (
   <Fragment>

<Comment
      className='w-50 '
      actions={actions}
      author={<>
        <a>Han Solo</a>
    
      </>
      }
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <>
        {editFormShow ? ( <EditCommentForm comment={comment} setEditFormShow={setEditFormShow}/>)  :  <p>
          {comment.commentText}
        </p>}
        </>
      }
      datetime={
       <div class="d-flex ">
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
          {auth.user.id === comment.userId  ? (
              <CommentEditDelete
                key={comment.id} 
                comment={comment}
                handleDeleteComment={handleDeleteComment}
                editFormShow={editFormShow}
                setEditFormShow={setEditFormShow}
                handleShowEditForm={handleShowEditForm}

              />
          )  : null}
         </div>
      }
    />
    </Fragment>
  );


}
export default CommentItem