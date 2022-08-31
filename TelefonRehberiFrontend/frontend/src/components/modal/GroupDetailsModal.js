import { Badge, Button, Drawer, Space, Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersInGroup } from "../../redux/actions/GroupAction";
import { DELETE_USER_RESET } from "../../redux/constants/UserConstant";
import UserListGroupModalCard from "../card/UserListGroupModalCard";
import GroupMembers from "../list/GroupMembers";
import UserListGroupModal from "../list/UserListGroupModal";

const GroupDetailsModal = ({
  group,
  showGroupDetailsModal,
  handleCloseGroupDetails,
}) => {

  const dispatch = useDispatch();
  const getUsersByGroup = useSelector((state) => state.getUsersByGroup);


  const { deleted } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(GetUsersInGroup(group.id));
    
    if (deleted) {
      dispatch({ type: DELETE_USER_RESET });
    }
  }, [dispatch, deleted]);

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
            <h2>Group Details</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{group.name}</li>
              <li class="list-group-item">{group.title}</li>
              <li class="list-group-item">{group.description}</li>
              <li class="list-group-item">{group.capacity}</li>
              <li class="list-group-item">{group.id}</li>
            </ul>
          </div>
          <div class="card col-md-6">
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

            <ol class="list-group list-group-numbered">
              {getUsersByGroup.users.map((user) => (
                <GroupMembers key={user.id} user={user} />
              ))}
            </ol>
          </div>
        </div>
      </div>

  
      <div style={{ margin: "80px 0px" }}>
        <div className="row">
                  <UserListGroupModalCard 
                 
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
          {/* 
          <CategoryCards /> */}
        </div>
      </div>
    </Drawer>
  );
};

export default GroupDetailsModal;
