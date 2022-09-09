import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllGroupComment,
  GroupCommentsDesc,
} from "../../redux/actions/CommentAction";
import { DELETE_COMMENT_RESET, POST_COMMENT_RESET, UPDATE_COMMENT_RESET } from "../../redux/constants/CommentConstants";
import FilterButtons from "../button/FilterButtons";
import CommentItem from "../comment/CommentItem";
import PostCommentModal from "../modal/PostCommentModal";

const GroupCommentTab = ({ groupDetails }) => {
  // onClick  filter buttons for user comments
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [defaultFilter, setDefaultFilter] = useState(true);
  const [filterOrderDesc, setFilterOrderDesc] = useState(false);
  const {success} = useSelector((state) => state.addNewComment);
  const {deleted,updateSuccess} = useSelector((state) => state.commentUpdateDelete);
  const auth = useSelector((state) => state.auth);
  const getGroupCommentsDesc = useSelector(
    (state) => state.getGroupCommentsDesc
  );
  const getGroupComments = useSelector((state) => state.getGroupComments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllGroupComment(groupDetails.groupId));

    if (success) {
      dispatch({ type : POST_COMMENT_RESET });
      setShowCommentModal(false)
    }
    if (deleted) {
      dispatch({ type : DELETE_COMMENT_RESET });
 
    }
    if (updateSuccess) {
      dispatch({type : UPDATE_COMMENT_RESET})
    }
  }, [dispatch, success,deleted,updateSuccess,groupDetails.groupId]);

  const handleDefaultFilter = () => {
    setDefaultFilter(true);
    setFilterOrderDesc(false);
  };

  const handleFilterOrderDesc = () => {
    setFilterOrderDesc(true);
    setDefaultFilter(false);
    dispatch(GroupCommentsDesc(groupDetails.groupId));
  };



  const handleShowComment  = () => {
    setShowCommentModal(true);
  }
  const handleCloseComment = () => {
    setShowCommentModal(false)
  }

  return (
    <Fragment>
      <div class="d-flex justify-content-between align-items-center">
      <FilterButtons
        handleDefaultFilter={handleDefaultFilter}
        handleFilterOrderDesc={handleFilterOrderDesc}
      />
      <button class="btn btn-primary rounded-pill" disabled={auth.user.id !== null ?  false: true} onClick={handleShowComment}>
        Add Comment
      </button>

      <PostCommentModal 
        groupDetails={groupDetails}
        showCommentModal={showCommentModal}
        handleCloseComment={handleCloseComment}
      />
      </div>



      {defaultFilter
        ? getGroupComments.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        : getGroupCommentsDesc.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
    </Fragment>
  );
};

export default GroupCommentTab;
