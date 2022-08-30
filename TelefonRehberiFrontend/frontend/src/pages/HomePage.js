import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAddButton from "../components/button/UserAddButton";
import AddUserForm from "../components/forms/AddUserForm";
import HomeLayout from "../components/layout/HomeLayout";
import AddUserModal from "../components/modal/AddUserModal";
import UserListTable from "../components/table/UserListTable";
import { AddUser, AllUser } from "../redux/actions/UserAction";
import { ADD_USER_RESET, DELETE_USER_RESET, UPDATE_USER_RESET } from "../redux/constants/UserConstant";

const HomePage = () => {
  const dispatch = useDispatch();

  const getAllUser = useSelector((state) => state.getAllUser);
  const { success } = useSelector((state) => state.addNewUser);
  const { updateSuccess } = useSelector((state) => state.user);
  const [showUserModal, setShowUserModal] = useState(false)
  const {deleted} = useSelector((state)=> state.user)
  const handleShowUserModal = () => {
    setShowUserModal(true)
  }

  const handleCloseUserModal = () => {
    setShowUserModal(false)
  }
  useEffect(() => {
    dispatch(AllUser());

    if (success) {
      dispatch({ type: ADD_USER_RESET });
      setShowUserModal(false)
    }
    if (deleted) {
      dispatch({ type: DELETE_USER_RESET });
    }
    if (updateSuccess) {
      dispatch({ type: UPDATE_USER_RESET });
    }

  }, [dispatch, success,deleted,updateSuccess]);


  return (
    <HomeLayout>
      <div class="d-flex flex-row justify-content-between">
       
          <UserListTable />
          <UserAddButton 
            handleShowUserModal={handleShowUserModal}
          />

        <AddUserModal 
          showUserModal={showUserModal}
          handleCloseUserModal={handleCloseUserModal}
        />
   
     
      
      
      </div>
    </HomeLayout>
  );
};

export default HomePage;
