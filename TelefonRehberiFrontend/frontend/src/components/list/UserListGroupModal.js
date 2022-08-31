import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../../redux/actions/UserAction";

const UserListGroupModal = ({ user }) => {

  //user update group logic 
  const dispatch = useDispatch()

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState(user.image);
  const [groupId, setGroupId] = useState(user.groupId)

  const handleAddUserToGroup = (id) => {
     dispatch(UpdateUser(id,{name,surname,phoneNumber,description,image,groupId}))
  

    console.log(id)
    console.log(user.name)
    console.log(groupId)
    console.log(name)
 
  }

  useEffect(() => {
    
    setGroupId(10)
    
  }, [groupId,setGroupId])

  return (
    <Fragment>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{user.name}</div>
          {user.description}
        </div>

        <Button type="primary" onClick={() => handleAddUserToGroup(user.id)}>Add {user.id}</Button>
      </li>
    </Fragment>
  );
};

export default UserListGroupModal;
