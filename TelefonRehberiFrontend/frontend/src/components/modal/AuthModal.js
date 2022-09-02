import React, { Fragment, useEffect, useState } from 'react'
import ContinueWithButtons from '../button/ContinueWithButtons'
import {Modal,Form,Button} from 'antd'
import AuthModalForm from '../forms/AuthModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/AuthAction';

const AuthModal = ({showLoginModal,handleCloseLoginModal}) => {

  const [form] = Form.useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [register, setRegister] = useState(false);
    const {user} = useSelector((state) => state.auth)
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const handleLoginUser = () => {
      dispatch(login({email,password}))
    }
    useEffect(() => {
      if (user && auth.authenticate == true ) {
        handleCloseLoginModal()
      }
    }, [user,auth.authenticate])

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
          name={name}
          setName={setName}
          email ={email}
          setEmail={setEmail}
          register={register}
          password={password}
          setPassword={setPassword}
          setRegister={setRegister}
          handleLoginUser ={handleLoginUser}
        />
      </Modal>
  </Fragment>
  )
}

export default AuthModal