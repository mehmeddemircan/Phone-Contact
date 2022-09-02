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
import { DELETE_GROUP_RESET, UPDATE_GROUP_RESET } from "../../redux/constants/GroupConstants";
import {
  DELETE_USER_RESET,
  UPDATE_USER_RESET,
} from "../../redux/constants/PersonConstant";
import UserListGroupModalCard from "../card/UserListGroupModalCard";
import EditGroupForm from "../forms/EditGroupForm.js";
import GroupMembers from "../list/GroupMembers";
import UserListGroupModal from "../list/UserListGroup";

const GroupDetailsModal = ({
  group,
  showGroupDetailsModal,
  handleCloseGroupDetails,
}) => {
  const getUsersByGroup = useSelector((state) => state.getUsersByGroup);
  const { loading } = useSelector((state) => state.user);
  const { updateSuccess,deleted } = useSelector((state) => state.groupUpdateDelete);
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
  }, [dispatch, updateSuccess,deleted]);

  const [showEditForm, setShowEditForm] = useState(false)

  const handleEditForm = () => {
    setShowEditForm((prev) => !prev)

  
  }

  return (
    <Drawer
      width={"100vw"}
      onClose={handleCloseGroupDetails}
      visible={showGroupDetailsModal}
      bodyStyle={{
        paddingBottom: 80,
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
      {/* <form>
      <input
        placeholder="Type here to search..."
        className="form-control"
        style={{ marginTop: 64, height: 50, borderRadius: 20 }}
        value={searchedName}
        onChange={(e) => setSearchedName(e.target.value)}
      />
   <div style={{height: '200vh'}}></div> 
    </form> */}
      <div class="container-fluid">
        <div class="row">
          <div className="card col-md-6 px-5">
            <div class="d-flex flex-row align-items-center justify-content-between">
            <h2 >Group Details</h2>
            <Button class="btn btn-outline-secondary " onClick={() => {
                handleEditForm(); 
            }}>{showEditForm ? "Cancel" : "Edit"}</Button>
            </div>
            {/* group form */}
            <EditGroupForm 
              group={group}
              showEditForm = {showEditForm}
              handleEditForm = {handleEditForm}
            />
          </div>
          <div class="card col-md-6">
            <div class="d-flex justify-content-between align-items-center">
              <Space class="d-inline-block py-3">
                <Badge count={getUsersByGroup.users.length}>
                  <h6 class="d-inline-block mx-3">
                    {" "}
                    {getUsersByGroup.success === true &&
                    getUsersByGroup.users.length !== 0
                      ? "Grup Üyeleri"
                      : "Henüz Hic Üye yok"}{" "}
                  </h6>
                </Badge>
              </Space>
              {getUsersByGroup.users.length === 0 ? (
                <Button
                  href="#"
                  class="btn btn-danger float-end"
                  key={group.id}
                  onClick={() => {
                    handleDeleteGroup(group.id);
                  }}
                >
                  Delete Group
                </Button>
              ) : null}
            </div>

            <ol class="list-group list-group-numbered">
              {loading === true ? (
                <h2>loading</h2>
              ) : (
                getUsersByGroup.users.map((user) => (
                  <GroupMembers key={user.id} user={user} />
                ))
              )}
            </ol>
          </div>
        </div>
      </div>

      <div style={{ margin: "80px 0px" }}>
        <div className="row">
          <UserListGroupModalCard
            handleCloseGroupDetails={handleCloseGroupDetails}
          />
          <div className="col-md-6 px-5">
            <h2>Trends</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default GroupDetailsModal;
