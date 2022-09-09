import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteGroup,
  GetGroupDetails,
  GetUsersInGroup,
} from "../../redux/actions/GroupAction";
import GroupDetailsModal from "../modal/GroupDetailsModal";
import GroupDetailsPageHeader from "../pageheader/GroupDetailsPageHeader";

const GroupCards = ({ groupItem }) => {
  const [showGroupDetailsModal, setShowGroupDetailsModal] = useState(false);
  const { group, loading, success } = useSelector((state) => state.getGroupDetails);

   
  const handleShowGroupDetails = () => {
    setShowGroupDetailsModal(true);
  };

  const handleCloseGroupDetails = () => {
    setShowGroupDetailsModal(false);
  };
  const dispatch = useDispatch();

  const handleGetGroupDetails = (id) => {
    dispatch(GetGroupDetails(id));
  };

  // const handleGetUsers = (id) => {
  //   dispatch(GetUsersInGroup(id));
  // };

 

  return (
    <Fragment>
      <div class="card my-2" style={{ width: "24rem" }} >
        <img
          width="100%"
          height={200}
          src="https://images.pexels.com/photos/12161836/pexels-photo-12161836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="card-img-top"
          alt="..."
          
        />
        <div class="card-body">
          <h5 class="card-title">{groupItem.title}</h5>
          
          <p class="card-text">
            <a >   Some quick example text to build on the card title and make up the
            bulk of the card's content.</a>
          </p>

          <a
            href="#"
            class="btn btn-outline-primary"
            key={groupItem.id}
             onClick={() => {
              //  handleGetUsers(group.id);
              handleGetGroupDetails(groupItem.id);
              handleShowGroupDetails();
             }}
          >
            Group Details {groupItem.id}
          </a>
       
          
        </div>
      </div>
      {/* {loading === true ? 
        
          <h2>waiting</h2>
        
       : (   */}

           <GroupDetailsModal
       
       groupDetails={success ? group[0] : ""}
       showGroupDetailsModal={showGroupDetailsModal}
       handleCloseGroupDetails={handleCloseGroupDetails}
      
     />
       {/* )} */}

    
      
     
    
    </Fragment>
  );
};

export default GroupCards;
