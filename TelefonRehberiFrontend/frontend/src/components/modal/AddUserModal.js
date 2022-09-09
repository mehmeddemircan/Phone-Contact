import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import AddUserForm from "../forms/AddUserForm";
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../../redux/actions/PersonAction";
import { toast } from "react-toastify";
const AddUserModal = ({ showUserModal, handleCloseUserModal }) => {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.addNewUser);
  const { user } = useSelector((state) => state.auth);
  
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("string");
  const [userId, setUserId] = useState(user.id)
  const handleAddSubmit = () => {
    if (name.length === 0) {
    
      errors.push("Name can not be empty")
    }
    if (surname.length === 0) {
     
      errors.push("Surname can not be empty")
    }
    if (phoneNumber.length !== 10) {
 
      errors.push("phone number must be 10 length")
    }
    if (description.length === 0) {
   
      errors.push("Description can not be empty")
    }
    if (errors.length > 0) {
      errors.forEach((err) => {
        toast.error(err);
      });
     
    }
    if (errors.length === 0) {
      dispatch(AddUser({ userId ,name, surname, phoneNumber, image, description }));
    }
    errors.length = 0 
    console.log("error length : " + errors.length);
    console.log("error length : " + errors);
  };

  useEffect(() => {
    setUserId(user.id)
  }, [success,user.id]);
  return (
    <Fragment>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={showUserModal}
        onOk={handleCloseUserModal}
        onCancel={handleCloseUserModal}
      >
        <AddUserForm
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
          handleAddSubmit={handleAddSubmit}
        />
      </Modal>
    </Fragment>
  );
};

export default AddUserModal;
