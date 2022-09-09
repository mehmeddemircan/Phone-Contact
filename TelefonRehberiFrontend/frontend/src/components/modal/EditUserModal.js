import { Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../../redux/actions/PersonAction";
import EditUserForm from "../forms/EditUserForm";

const EditUserModal = ({
  showEditModal,
  handleCloseEditModal,
  setShowEditModal,
}) => {
  const dispatch = useDispatch();
  const { updateSuccess } = useSelector((state) => state.user);
  const { user , success } = useSelector((state) => state.getUserDetails);
  const auth = useSelector((state) => state.auth);
  
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("string");
  const [userId, setUserId] = useState(auth.user.id);

  useEffect(() => {
    setName(user.name)
    setSurname(user.surname)
    setPhoneNumber(user.phoneNumber)
    setDescription(user.description)
    setUserId(auth.user.id)
  }, [user,auth.user.id,success,setName,setSurname,setDescription,setPhoneNumber])

  const handleEditUserSubmit = () => {
    console.log("name : " + name);
    console.log("name : " + surname);
    console.log("name : " + phoneNumber);
    console.log("name : " + description);
    console.log("name : " + user.id);
    //dispatch function
    dispatch(
      UpdateUser(user.id, { userId, name, surname, phoneNumber, image, description })
    );
    if (!updateSuccess) {
      setShowEditModal(false);
      console.log("visible : " + showEditModal);
    }
  };

  return (
    <Fragment>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={showEditModal}
        onOk={handleCloseEditModal}
        onCancel={handleCloseEditModal}
      >
        <EditUserForm
       
          name={name}
          surname={surname}
          phoneNumber={phoneNumber}
          description={description}
          setName={setName}
          setSurname={setSurname}
          image={image}
          setImage={setImage}
          setDescription={setDescription}
          setPhoneNumber={setPhoneNumber}
          handleEditUserSubmit={handleEditUserSubmit}
        />
      </Modal>
    </Fragment>
  );
};

export default EditUserModal;
