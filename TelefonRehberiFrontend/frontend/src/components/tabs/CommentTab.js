import { Tabs } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllUserComments, GroupCommentsDesc } from "../../redux/actions/CommentAction";
import { POST_COMMENT_RESET } from "../../redux/constants/CommentConstants";
import FilterButtons from "../button/FilterButtons";
import CommentItem from "../comment/CommentItem";
import NoCommentResutl from "../result/NoCommentResutl";

const { TabPane } = Tabs;
const CommentTab = () => {


  const getMyComments = useSelector((state) => state.getMyComments);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllUserComments(auth.user.id));


  }, [dispatch, auth]);

  // onClick  filter buttons for user comments

  const [defaultFilter, setDefaultFilter] = useState(false)
  const [filterOrderDesc, setFilterOrderDesc] = useState(false)
  const [filterByGrouping, setfilterByGrouping] = useState(false)

  const getGroupCommentsDesc = useSelector((state) => state.getGroupCommentsDesc)

  const handleDefaultFilter = () => {
    setDefaultFilter(true)
    setFilterOrderDesc(false)
  }

  const handleFilterOrderDesc = () => {
    setFilterOrderDesc(true)
    dispatch(GroupCommentsDesc(17))
  }


  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane tab="My All Comment" key="1">
          <>
            <FilterButtons 
            handleDefaultFilter={handleDefaultFilter}
            handleFilterOrderDesc={handleFilterOrderDesc}
            />
            {filterOrderDesc ? getGroupCommentsDesc.comments.map((comment) => (
                <CommentItem 
                  key={comment.id}
                  comment={comment}
                />
            )) : getMyComments.comments.length < 1 ? (
              <NoCommentResutl />
            )  :  getMyComments.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            )) }
           
          </>
        </TabPane>
        <TabPane tab="Edited Comments" key="2">
          tab2
        </TabPane>
        <TabPane tab="Comments By Group" key="3">
          tab3
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default CommentTab;
