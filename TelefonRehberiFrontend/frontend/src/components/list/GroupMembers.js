import { Button, Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetGroupDetails, GetUsersInGroup } from "../../redux/actions/GroupAction";
import { AllUser, DeleteUser, UpdateUser } from "../../redux/actions/PersonAction";
import { DELETE_USER_RESET } from "../../redux/constants/PersonConstant";

const GroupMembers = ({ user ,groupDetails }) => {
  const { deleted, updated, updateSuccess } = useSelector(
    (state) => state.user
  );
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState(user.image);
  const [groupId, setGroupId] = useState(user.groupId)
  const [userId, setUserId] = useState(auth.user.id)


  const handleRemoveUser = (id) => {
    dispatch(UpdateUser(id,{name,surname,phoneNumber,description,image,groupId,userId}));
    console.log(groupId)

  };

  useEffect(() => {
    setGroupId(null)
    setUserId(auth.user.id)
    if (  updateSuccess) {
        dispatch(GetGroupDetails(groupId))
        dispatch(AllUser(auth.user.id))
    }
  }, [dispatch,auth.user.id,groupId,updateSuccess])
  return (
    <Fragment>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{user.name}</div>
          {user.description}
        </div>

        <Tooltip
          title={
            <ul class="list-group">
              <button
                type="button"
                class="btn btn-link btn-sm"
                style={{ color: "#fff" }}
                onClick={() => handleRemoveUser(user.id)}
              >
                Remove {user.id}
              </button>
              <button
                type="button"
                class="btn btn-link btn-sm"
                style={{ color: "#fff" }}
              >
                Make Admin
              </button>
            </ul>
          }
          trigger="click"
        >
          <Button
            type="primary"
            shape="circle"
            icon={<i class="fa-solid fa-ellipsis"></i>}
          />
        </Tooltip>
      </li>
    </Fragment>
  );
};

export default GroupMembers;
