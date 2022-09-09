import { Descriptions, Image, Input } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllGroup, UpdateGroup } from "../../redux/actions/GroupAction";

const GroupDetailDescription = ({ groupDetails, showEditForm, handleEditForm }) => {
  const [title, setTitle] = useState(groupDetails.groupTitle);
  const [name, setName] = useState(groupDetails.groupName);
  const [thumbNailImage, setThumbNailImage] = useState("string");
  const [description, setDescription] = useState(groupDetails.groupDescription);
  const [url, setUrl] = useState("string");
  const [capacity, setCapacity] = useState(groupDetails.groupCapacity);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();
  const { updateSuccess } = useSelector((state) => state.groupUpdateDelete);

  const handleEditGroup = () => {
    dispatch(
      UpdateGroup(groupDetails.groupId, {
        title,
        name,
        thumbNailImage,
        description,
        url,
        capacity,
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
      <div class="d-flex flex-row justify-content-between my-2">
        <div>
          <Image
            width={240}
            height={150}
            class="img img-fluid "
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div class="mx-4 col-md-6">
          <Descriptions size="small" c column={1}>
            <Descriptions.Item label="Name">
              {" "}
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control "
                disabled={showEditForm ? false : true}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Title">
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                class="form-control "
                disabled={showEditForm ? false : true}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                class="form-control "
                disabled={showEditForm ? false : true}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Capacity">
              <Input
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                class="form-control "
                disabled={showEditForm ? false : true}
              />
            </Descriptions.Item>
          </Descriptions>
          <div>
            {title.length !== groupDetails.groupTitle.length ||
            name.length !== groupDetails.groupName.length ||
            description.length !== groupDetails.groupDescription.length ||
            capacity !== groupDetails.groupCapacity ? (
              <button
                class="btn btn-outline-success float-end my-2"
                onClick={handleEditGroup}
                style={{ visibility: showEditForm ? "visible" : "hidden" }}
              >
                Complete
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GroupDetailDescription;
