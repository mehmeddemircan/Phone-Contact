import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupCards from "../components/card/GroupCards";
import HomeLayout from "../components/layout/HomeLayout";
import AddGroupModal from "../components/modal/AddGroupModal";
import { AllGroup } from "../redux/actions/GroupAction";
import { ADD_GROUP_RESET } from "../redux/constants/GroupConstants";
import { DELETE_USER_RESET } from "../redux/constants/PersonConstant";

const GroupPage = () => {
  const getAllGroup = useSelector((state) => state.getAllGroup);
  const {deleted} = useSelector((state) => state.user);
  const {success} = useSelector((state) => state.addNewGroup);
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);

  const handleShowAddGroupModal = () => {
    setShowAddGroupModal(true);
  };
  const handleCloseAddGroupModal = () => {
    setShowAddGroupModal(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllGroup());


    if (success) {
      dispatch({ type: ADD_GROUP_RESET });
      setShowAddGroupModal(false)
    }

  }, [dispatch,success]);

 

  return (
    <Fragment>
      <HomeLayout>
        <div class="d-flex justify-content-between mb-3">
          <div></div>
          <div>
            <h4>All Groups</h4>
          </div>
          <div class="btn btn-primary" onClick={handleShowAddGroupModal}>
            Add New Group
          </div>

          <AddGroupModal
            showAddGroupModal={showAddGroupModal}
            handleCloseAddGroupModal={handleCloseAddGroupModal}
          />
        </div>
        <div class="row d-flex flex-wrap justify-content-between">
          {getAllGroup.groups.map((group) => (
            <GroupCards group={group} />
          ))}
        </div>
      </HomeLayout>
    </Fragment>
  );
};

export default GroupPage;
