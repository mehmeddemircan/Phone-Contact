import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupCards from "../components/card/GroupCards";
import HomeLayout from "../components/layout/HomeLayout";
import AddGroupModal from "../components/modal/AddGroupModal";
import { AllGroup } from "../redux/actions/GroupAction";
import { DELETE_USER_RESET } from "../redux/constants/UserConstant";

const GroupPage = () => {
  const getAllGroup = useSelector((state) => state.getAllGroup);
  const {deleted} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllGroup());

  }, [dispatch]);

  const [showAddGroupModal, setShowAddGroupModal] = useState(false);

  const handleShowAddGroupModal = () => {
    setShowAddGroupModal(true);
  };
  const handleCloseAddGroupModal = () => {
    setShowAddGroupModal(false);
  };

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
