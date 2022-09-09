import { Badge, Button, Drawer, Space, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  AllGroup,
  DeleteGroup,
  GetGroupDetails,
  GetUsersInGroup,
} from "../../redux/actions/GroupAction";
import { AllUser } from "../../redux/actions/PersonAction";
import {
  DELETE_GROUP_RESET,
  UPDATE_GROUP_RESET,
} from "../../redux/constants/GroupConstants";
import {
  DELETE_USER_RESET,
  UPDATE_USER_RESET,
} from "../../redux/constants/PersonConstant";
import UserListGroupModalCard from "../card/UserListGroupModalCard";
import EditGroupForm from "../forms/EditGroupForm.js";
import GroupMembers from "../list/GroupMembers";
import UserListGroupModal from "../list/UserListGroup";
import GroupDetailsPageHeader from "../pageheader/GroupDetailsPageHeader";

const GroupDetailsModal = ({
  showGroupDetailsModal,
  handleCloseGroupDetails,
  groupDetails,
}) => {
  const { loading } = useSelector((state) => state.user);
  const { updateSuccess, deleted } = useSelector(
    (state) => state.groupUpdateDelete
  );
  const dispatch = useDispatch();
  const handleDeleteGroup = (id) => {
    dispatch(DeleteGroup(id));
  };
  useEffect(() => {
    if (deleted) {
      handleCloseGroupDetails();
      dispatch({ type: DELETE_GROUP_RESET });
      dispatch(AllGroup());
    }
  }, [dispatch, updateSuccess, deleted]);

  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditForm = () => {
    setShowEditForm((prev) => !prev);
  };

  return (
    <Drawer
      width={"100vw"}
      onClose={handleCloseGroupDetails}
      visible={showGroupDetailsModal}
      bodyStyle={{
        paddingLeft: 48,
        paddingRight: 48,
        background: "transparent",
        maxHeight: "100vh",
        overflowY: "auto",
      }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={handleCloseGroupDetails} type="primary">
            Search
          </Button>
        </div>
      }
    >
      {groupDetails ? (
        <GroupDetailsPageHeader groupDetails={groupDetails} />
      ) : null}
    </Drawer>
  );
};

export default GroupDetailsModal;
