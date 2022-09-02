import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersInGroup } from "../../redux/actions/GroupAction";
import { AllUser, UpdateUser } from "../../redux/actions/PersonAction";
import { UPDATE_USER_RESET } from "../../redux/constants/PersonConstant";

const UserListGroupModal = ({ user, handleCloseGroupDetails }) => {
  //user update group logic
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState(user.image);
  const [groupId, setGroupId] = useState(user.groupId);

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
      })
    );

    console.log(id);
    console.log(user.name);
    console.log(groupId);
    console.log(name);
  };

  useEffect(() => {
    setGroupId(group[0].groupId);
    if (updateSuccess) {
      dispatch(GetUsersInGroup(groupId))
      dispatch(AllUser())
  }
  }, [dispatch,updateSuccess,group[0].groupId]);

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
