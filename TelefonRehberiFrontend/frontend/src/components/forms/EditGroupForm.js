import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllGroup,
  GetGroupDetails,
  GetUsersInGroup,
  UpdateGroup,
} from "../../redux/actions/GroupAction";
import { AllUser } from "../../redux/actions/PersonAction";
import { UPDATE_GROUP_RESET } from "../../redux/constants/GroupConstants";

const EditGroupForm = ({ group, showEditForm, handleEditForm }) => {
  const [title, setTitle] = useState(group.title);
  const [name, setName] = useState(group.name);
  const [thumbNailImage, setThumbNailImage] = useState("string");
  const [description, setDescription] = useState(group.description);
  const [url, setUrl] = useState("string");
  const [capacity, setCapacity] = useState(group.capacity);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { updateSuccess } = useSelector((state) => state.groupUpdateDelete);

  const handleEditGroup = () => {
    dispatch(
      UpdateGroup(group.id, {
        title,
        name,
        thumbNailImage,
        description,
        url,
        capacity,
        users,
      })
    );
  };

  useEffect(() => {
    if (updateSuccess) {
      handleEditForm();
      dispatch(AllGroup());
    }
  }, [dispatch, updateSuccess]);

  return (
    <Fragment>
      {/* <ul class="list-group list-group-flush">
        <li class="list-group-item">{group.name}</li>
        <li class="list-group-item">{group.title}</li>
        <li class="list-group-item">{group.description}</li>
        <li class="list-group-item">{group.capacity}</li>
       
      </ul> */}

      <form>
        <div class="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="form-control "
            disabled={showEditForm ? false : true}
          />
        </div>

        <div class="mb-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="form-control "
            disabled={showEditForm ? false : true}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class="form-control "
            disabled={showEditForm ? false : true}
          />
        </div>

        <div class="mb-3">
          <input
            type="text"
            class="form-control "
            value={showEditForm ? capacity : group.capacity}
            onChange={(e) => setCapacity(e.target.value)}
            disabled={showEditForm ? false : true}
          />
        </div>
        <li class="list-group-item list-group-flush">{group.id}</li>
        {/* <button type="submit" class="btn btn-primary">Submit</button> */}
      </form>
      <div class="">
        {title.length !== group.title.length ||
        name.length !== group.name.length ||
        description.length !== group.description.length ||
        capacity !== group.capacity ? (
          <button
            class="btn btn-outline-success float-end my-2"
            onClick={handleEditGroup}
            style={{ visibility: showEditForm ? "visible" : "hidden" }}
          >
            Complete
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default EditGroupForm;
