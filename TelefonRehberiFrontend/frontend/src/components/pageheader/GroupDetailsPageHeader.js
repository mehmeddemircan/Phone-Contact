import React, { Fragment, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Descriptions,
  PageHeader,
  Space,
  Statistic,
  Tabs,
} from "antd";
import { Content } from "antd/lib/layout/layout";
import GroupDetailDescription from "../descriptions/GroupDetailDescription";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteGroup,
  GetGroupDetails,
  GetUsersInGroup,
} from "../../redux/actions/GroupAction";
import GroupMembers from "../list/GroupMembers";
import UserListGroupModalCard from "../card/UserListGroupModalCard";
import EditGroupModal from "../modal/EditGroupModal";
import GroupCommentTab from "../tabs/GroupCommentTab";
import NoUserResult from "../result/NoUserResult";
import GroupMemberCard from "../card/GroupMemberCard";

const { TabPane } = Tabs;
const GroupDetailsPageHeader = ({groupDetails}) => {

  const { loading } = useSelector((state) => state.user);
  // const {group} = useSelector((state) => state.getGroupDetails);
  // const { group } = useSelector((state) => state.getGroupDetails);
  const [showEditForm, setShowEditForm] = useState(false);
  const handleEditForm = () => {
    setShowEditForm((prev) => !prev);
  };

  const dispatch = useDispatch();
  const handleDeleteGroup = (id) => {
    dispatch(DeleteGroup(id));
  };



  return (
    <Fragment> 

       {groupDetails.groupId}
    <div class="container">
    <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Group Details"
        subTitle="This is a subtitle"
        extra={[
          <>
       
            <Button
              class="btn btn-outline-secondary "
              onClick={() => {
                handleEditForm();
              }}
            >
              {showEditForm ? "Cancel" : "Edit"}
            </Button>
          
            {groupDetails.users.length === 0 ? (
              <Button
                href="#"
                class="btn btn-danger float-end"
                key={groupDetails.groupId}
                onClick={() => {
                  handleDeleteGroup(groupDetails.groupId);
                }}
              >
                Delete Group
              </Button>
            ) : null}
          </>,
        ]}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Users" key="1">
      
              <>
                <div class="row">
                  <GroupMemberCard
                    groupDetails={groupDetails}
                    loading = {loading}
                  />

                  <UserListGroupModalCard />
                </div>
              </>
            </TabPane>
            <TabPane tab="Comments" key="2">
                            <GroupCommentTab 
                                 groupDetails={groupDetails}
                            />


            </TabPane>
          </Tabs>
        }
      >
        <Content>
          {" "}
          <GroupDetailDescription 
           
            groupDetails={groupDetails}
            showEditForm={showEditForm}
            handleEditForm={handleEditForm}
          />{" "}
        </Content>
      </PageHeader>
    </div>
    </Fragment>
  );
};

export default GroupDetailsPageHeader;
