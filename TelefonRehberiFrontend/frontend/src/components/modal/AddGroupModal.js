import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import AddGroupForm from "../forms/AddGroupForm";
import { useDispatch, useSelector } from "react-redux";
import { AddGroup } from "../../redux/actions/GroupAction";
const AddGroupModal = ({ showAddGroupModal, handleCloseAddGroupModal }) => {

    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [thumbNailImage, setThumbNailImage] = useState("string")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("string")
    const [capacity, setCapacity] = useState(0)


    const dispatch = useDispatch()

    const handleAddGroupSubmit = ()  => {
      dispatch(AddGroup({title,name,thumbNailImage,description,url,capacity}))
    }

  return (
    <Fragment>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={showAddGroupModal}
        onOk={handleAddGroupSubmit}
        onCancel={handleCloseAddGroupModal}
      >
        <AddGroupForm 
            title ={title}
            name={name}
            thumbNailImage={thumbNailImage}
            description={description}
            url={url}
            capacity={capacity}
         
            setTitle={setTitle}
            setCapacity={setCapacity}
            setDescription={setDescription}
            setName={setName}
            setUrl={setUrl}
            setThumbNailImage={setThumbNailImage}
            handleAddGroupSubmit={handleAddGroupSubmit}
        />
      </Modal>
    </Fragment>
  );
};

export default AddGroupModal;
