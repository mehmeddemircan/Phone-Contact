import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetGroupDetails, GetUsersInGroup } from "../../redux/actions/GroupAction";
import { AllUser, UpdateUser } from "../../redux/actions/PersonAction";
import { UPDATE_USER_RESET } from "../../redux/constants/PersonConstant";

const UserListGroupModal = ({ user }) => {
  //user update group logic
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth) 
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState(user.image);
  const [groupId, setGroupId] = useState(user.groupId);
  const [userId, setUserId] = useState(auth.user.id);

  const { group } = useSelector((state) => state.getGroupDetails);
  const { updateSuccess } = useSelector((state) => state.user);

  const handleAddUserToGroup = (id) => {
    dispatch(
      UpdateUser(id, {
        name,
        surname,
        phoneNumber,
        description,
        image,
        groupId,
        userId,
      })
    );

    console.log(id);
    console.log(user.name);
    console.log(groupId);
    console.log(name);
  };

  useEffect(() => {
    setGroupId(group[0].groupId);
    setUserId(auth.user.id)
    if (updateSuccess) {
      dispatch(GetGroupDetails(groupId))
      dispatch(AllUser())
  }
  }, [dispatch,auth.user.id,groupId,updateSuccess,group[0].groupId]);

  return (
    <Fragment>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{user.name}</div>
          {user.description}
        </div>

        <Button type="primary" disabled={user.groupId === group[0].groupId ? true : false} onClick={() => handleAddUserToGroup(user.id)}>
          Add {user.id}
        </Button>
      </li>
    </Fragment>
  );
};

export default UserListGroupModal;
