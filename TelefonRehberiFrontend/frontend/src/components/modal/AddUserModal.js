import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import AddUserForm from "../forms/AddUserForm";
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../../redux/actions/PersonAction";
import { toast } from "react-toastify";
const AddUserModal = ({ showUserModal, handleCloseUserModal }) => {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.addNewUser);

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("string");
  const handleAddSubmit = () => {
    if (name.length < 2) {
      // setErrors((prevArray) => [
      //   ...prevArray,
      //   `İsim en az 2 karakter olmalı`,
      // ]);
      errors.push("DSASADSAD")
    }
    if (surname.length < 2) {
      // setErrors((prevArray) => [
      //   ...prevArray,
      //   `Soyisim en az 2 karakter olmalı`,
      // ]);
      errors.push("DSASADSAD")
    }
    if (phoneNumber.length !== 10) {
      // setErrors((prevArray) => [
      //   ...prevArray,
      //   `Telefon numarasi 10 karakter olmalı`,
      // ]);
      errors.push("DSASADSAD")
    }
    if (description.length === 0) {
      // setErrors((prevArray) => [...prevArray, `Açıklama boş bırakılamaz`]);
      errors.push("DSASADSAD")
    }
    if (errors.length > 0) {
      errors.forEach((err) => {
        toast.error(err);
      });
     
    }
    if (errors.length === 0) {
      dispatch(AddUser({ name, surname, phoneNumber, image, description }));
    }
    errors.length = 0 
    console.log("error length : " + errors.length);
    console.log("error length : " + errors);
  };

  useEffect(() => {
    if (success === false) {
     
    }
  }, [success]);
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
