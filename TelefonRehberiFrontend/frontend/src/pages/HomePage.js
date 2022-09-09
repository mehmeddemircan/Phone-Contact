import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAddButton from "../components/button/UserAddButton";
import FilterDropdown from "../components/dropdown/FilterDropdown";
import FilterDropdownAntd from "../components/dropdown/FilterDropdownAntd";
import AddUserForm from "../components/forms/AddUserForm";
import HomeLayout from "../components/layout/HomeLayout";
import PersonList from "../components/list/PersonList";
import AddUserModal from "../components/modal/AddUserModal";
import UserListTable from "../components/table/UserListTable";
import { AddUser, AllUser, GetPeopleOrderByDesc, GroupPeopleByLetter } from "../redux/actions/PersonAction";
import { ADD_USER_RESET, DELETE_USER_RESET, UPDATE_USER_RESET } from "../redux/constants/PersonConstant";

const HomePage = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth)
  const getAllUser = useSelector((state) => state.getAllUser);
  const { success } = useSelector((state) => state.addNewUser);
  const { updateSuccess } = useSelector((state) => state.user);
  const  groupPeopleByLetter = useSelector((state) => state.groupPeopleByLetter);
  const [showUserModal, setShowUserModal] = useState(false)
  const {deleted} = useSelector((state)=> state.user)
  const handleShowUserModal = () => {
    setShowUserModal(true)
  }

  const handleCloseUserModal = () => {
    setShowUserModal(false)
  }
  useEffect(() => {
    dispatch(AllUser(user.id));

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
  
  }, [dispatch,user.id,success,deleted,updateSuccess]);

  const [filterByFirstLetter, setFilterByFirstLetter] = useState(false)
  const [filterOrderDesc, setFilterOrderDesc] = useState(false)
  const [defaultFilter, setDefaultFilter] = useState(true)

    const handleDefaultFilter = () => {
      dispatch(AllUser(user.id))

      setDefaultFilter(true)
      setFilterByFirstLetter(false)
      setFilterOrderDesc(false)
    }

    const handleGroupPeople = () => {
      dispatch(GroupPeopleByLetter())
  
      setFilterByFirstLetter(true)
      setFilterOrderDesc(false)
      setDefaultFilter(false)
      
    }
    const handleOrderByDesc = () =>{
      dispatch(GetPeopleOrderByDesc())

      setFilterOrderDesc(true)
      setFilterByFirstLetter(false)
      setDefaultFilter(false)
    }
    // useEffect(() => {
    //     if (groupPeopleByLetter.success) {
    //       setFilterByFirstLetter(true)
    //     }
    // }, [groupPeopleByLetter.success])

  return (
    <HomeLayout>
      <div class="d-flex flex-row justify-content-between">
       
          <FilterDropdownAntd 
            filterByFirstLetter={filterByFirstLetter}
            handleGroupPeople={handleGroupPeople}
            handleOrderByDesc={handleOrderByDesc}
            filterOrderDesc={filterOrderDesc}
            handleDefaultFilter={handleDefaultFilter}
          />

          <UserAddButton 
            handleShowUserModal={handleShowUserModal}
          />

    
     
      
      
      </div>

      <AddUserModal 
          showUserModal={showUserModal}
          handleCloseUserModal={handleCloseUserModal}
        />

        <div class="my-3">

          <PersonList 
           filterByFirstLetter={filterByFirstLetter} 
           filterOrderDesc={filterOrderDesc}
           defaultFilter={defaultFilter}
           />
        </div>
      
    </HomeLayout>
  );
};

export default HomePage;
