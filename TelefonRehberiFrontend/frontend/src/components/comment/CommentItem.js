import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Comment, message, Tooltip } from "antd";
import moment from "moment";
import React, { createElement, useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteComment,
  GetCommentLikes,
  UpdateComment,
} from "../../redux/actions/CommentAction";
import CommentEditDelete from "../button/CommentEditDelete";
import EditCommentForm from "../forms/EditCommentForm";
const CommentItem = ({ comment }) => {
  const auth = useSelector((state) => state.auth);
  const [userId, setUserId] = useState(comment.userId);
  const [groupId, setGroupId] = useState(comment.groupId);
  const [status, setStatus] = useState(2);

  const [createdTime, setCreatedTime] = useState(comment.createdTime);
  const [commentText, setCommentText] = useState(comment.commentText);
  const [commentLike, setCommentLike] = useState(comment.commentLike);
  const [commentDislike, setCommentDislike] = useState(comment.commentDislike);
  const [updatedBy, setUpdatedBy] = useState(comment.userId);
  const [updatedTime, setUpdatedTime] = useState("2022-09-09T07:42:44.450Z");
  // const [commentLikes, setCommentLikes] = useState([
  //   {
  //     userId: comment.userId,
  //     commentId: comment.id,
  //     liked: true
  //   },
  // ]);
  // const [commentDislike, setCommentDislike] = useState(comment.commentDislike);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  const [editFormShow, setEditFormShow] = useState(false);

  const a = [{
    userId : comment.userId,
    commentId : comment.id,
    liked : true 
  }]
  
  const [commentLikes, setCommentLikes] = useState(a)
  


  const like = () => {
   
  

    dispatch(UpdateComment(comment.id,{userId,groupId,status,createdTime,commentText,commentLike,commentDislike, commentLikes}))
    // dispatch(GetCommentLikes(comment.id))
    // setAction('liked');
  

  
  };

  const dislike = () => {
    dispatch(UpdateComment(comment.id,{userId,groupId,status,createdTime,commentText,commentLike,commentDislike, commentLikes}))
  };
  const dispatch = useDispatch();
  const handleDeleteComment = () => {
    dispatch(DeleteComment(comment.id));
  };

  const handleShowEditForm = () => {
    setEditFormShow(true);
  };


  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span
        onClick={() => {
          
          setLiked((prev) =>  !prev)
          setCommentLike(liked ?  commentLike  :  commentLike + 1)
         
          like();
        }}
      >
        {createElement(liked === true ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{commentLike}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={() => {
        setDisLiked((prev) =>  !prev)
        setCommentDislike(disliked ? commentDislike  : commentDislike + 1)
       
        dislike();
      }}>
        {React.createElement(
          disliked === true  ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{commentDislike}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to {a[0].userId}</span>,
  ];
  return (
    <Fragment>
      <Comment
        className="w-50 "
        actions={actions}
        author={
          <>
            <a>Han Solo</a>
          </>
        }
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <>
            {editFormShow ? (
              <EditCommentForm
                comment={comment}
                setEditFormShow={setEditFormShow}
              />
            ) : (
              <p>{comment.commentText}</p>
            )}
          </>
        }
        datetime={
          <div class="d-flex ">
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
            {auth.user.id === comment.userId ? (
              <CommentEditDelete
                key={comment.id}
                comment={comment}
                handleDeleteComment={handleDeleteComment}
                editFormShow={editFormShow}
                setEditFormShow={setEditFormShow}
                handleShowEditForm={handleShowEditForm}
              />
            ) : null}
          </div>
        }
      />
    </Fragment>
  );
};
export default CommentItem;
