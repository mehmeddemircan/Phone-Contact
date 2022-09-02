import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllUser,
  DeleteUser,
  GetUserDetails,
} from "../../redux/actions/PersonAction";
import UserDeleteButton from "../button/UserDeleteButton";
import UserEditButton from "../button/UserEditButton";
import EditUserModal from "../modal/EditUserModal";

const UserListTable = () => {
  const getAllUser = useSelector((state) => state.getAllUser);

  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    console.log("id deger : " + id);

    dispatch(DeleteUser(id));
  };
  const handleGetUserDetails = (id) => {
    dispatch(GetUserDetails(id));
  };

  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div class="container my-3">
      <h3 class="text-center">Rehberde kayitli olan kullanicilar</h3>

      <table
        class="table table-striped text-center"
        style={{ tableLayout: "fixed", display: "table" }}
      >
        <tbody
          style={{ borderCollapse: "separate", display: "table-row-group" }}
        >
          <tr>
            <th>Adi</th>
            <th>Soyadi</th>

            <th>Telefon No</th>
            <th>Açıklama</th>
            <th>Düzenle</th>
            <th></th>
          </tr>
          {getAllUser.users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.description}</td>
              <td>
                <Button
                  type="link"
                  key={user.id}
                  class="btn border-0 "
                  onClick={() => {
                    handleGetUserDetails(user.id);
                    handleShowEditModal();
                  }}
                >
                  Edit
                </Button>
                {/* <UserEditButton
                  
                  user={user}
                  key={user.id}
                  handleShowEditModal={handleShowEditModal}
                  handleCloseEditModal={handleCloseEditModal}
                /> */}
              </td>
              <td>
                <UserDeleteButton
                  user={user}
                  key={user.id}
                  handleDeleteUser={handleDeleteUser}
                />
              </td>
            </tr>
          ))}

          <EditUserModal
            handleGetUserDetails={handleGetUserDetails}
            setShowEditModal={setShowEditModal}
            showEditModal={showEditModal}
            handleCloseEditModal={handleCloseEditModal}
          />
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
