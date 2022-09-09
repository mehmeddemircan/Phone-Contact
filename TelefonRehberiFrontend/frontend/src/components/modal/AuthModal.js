import React, { Fragment, useEffect, useState } from 'react'
import ContinueWithButtons from '../button/ContinueWithButtons'
import {Modal,Form,Button} from 'antd'
import AuthModalForm from '../forms/AuthModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { login, register as _register } from '../../redux/actions/AuthAction';
import { toast } from 'react-toastify';

const AuthModal = ({showLoginModal,handleCloseLoginModal}) => {

    const [form] = Form.useForm();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [register, setRegister] = useState(false);

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const userSignup = () => {

      const user = {firstName,lastName,email,password};
      // if ( firstName === "" || email === "") {
      //     toast.error("Name and email can not be empty")
      // }
      // if (password.length < 6) {
      //   toast.error("Password Length must be at least 6 character ")
      // }
      dispatch(_register(user));
    };

    const handleUserAuth = (e) => {
      e.preventDefault();
      if (register) {
        userSignup()
      }else{
        dispatch(login({email,password}))
      }


      console.log("first name " + firstName)
      console.log("first name " + lastName)
      console.log("first name " + email)
      console.log("first name " + password)
    }

    useEffect(() => {
      if ( auth.authenticate == true ) {
        handleCloseLoginModal()
      }
    }, [auth.authenticate])

  return (
  <Fragment>
               <Modal
        centered
        title={
          <div style={{ display: "flex" }}>
            <Button
              style={{ borderRadius: 10, border: "1px solid #222" }}
              onClick={() => setRegister((prev) => !prev)}
            >
              {register ? "Login" : "Signup"}
            </Button>
            <div
              style={{
                textAlign: "center",
                flexGrow: 1,
                marginRight: 60,
                lineHeight: "30px",
                fontSize: 19,
              }}
            >
              {register ? "Signup Form" : "Login Form"}
            </div>
          </div>
        }
        visible={showLoginModal}
 
        onCancel={handleCloseLoginModal}
        onOk={handleCloseLoginModal}
        footer={null}
        width={540}
      >
        <h5 style={{ paddingLeft: 15, paddingBottom: 5 }}>
          Welcome to project
        </h5>
        <AuthModalForm 
          form={form}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email ={email}
          setEmail={setEmail}
          register={register}
          password={password}
          setPassword={setPassword}
          setRegister={setRegister}
          handleUserAuth ={handleUserAuth}
        />
      </Modal>
  </Fragment>
  )
}

export default AuthModal