import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { GetGroupDetails, GetUsersInGroup } from "../../redux/actions/GroupAction";
import GroupDetailsModal from "../modal/GroupDetailsModal";

const GroupCards = ({ group }) => {
  const [showGroupDetailsModal, setShowGroupDetailsModal] = useState(false);

  const handleShowGroupDetails = () => {
    setShowGroupDetailsModal(true);
  };

  const handleCloseGroupDetails = () => {
    setShowGroupDetailsModal(false);
  };
  const dispatch =useDispatch()

  const handleGetGroupDetails = (id) => {
    dispatch(GetGroupDetails(id))
  }

  const handleGetUsers =(id) => {
      dispatch(GetUsersInGroup(id))
  }

  return (
    <Fragment>
      <div class="card my-2" style={{ width: "24rem" }}>
        <img
          width="100%"
          height={200}
          src="https://images.pexels.com/photos/12161836/pexels-photo-12161836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{group.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
       
          <a
            href="#"
            class="btn btn-outline-primary"
            key={group.id}
            onClick={()=>{
           
              handleGetUsers(group.id)
              handleShowGroupDetails()
            }}
          >
            Group Details {group.id}
          </a>
        </div>
      </div>
      <GroupDetailsModal
        group={group}
        showGroupDetailsModal={showGroupDetailsModal}
        handleCloseGroupDetails={handleCloseGroupDetails}
      />
    </Fragment>
  );
};

export default GroupCards;