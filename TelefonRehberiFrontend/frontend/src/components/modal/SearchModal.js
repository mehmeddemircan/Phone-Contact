import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersByName } from "../../redux/actions/UserAction";
import { Badge, Space } from "antd";
const SearchModal = ({ showSearchModal, handleCloseSearchModal }) => {
  const getAllUser = useSelector((state) => state.getAllUser);
  const getUsersByName = useSelector((state) => state.getUsersByName);

  const [searchedName, setSearchedName] = useState("");
  const dispatch = useDispatch();
  const handleSearchUsers = () => {
    alert(searchedName);
    //dispatch
    dispatch(GetUsersByName(searchedName));
  };
  return (
    <Drawer
      width={"100vw"}
      onClose={handleCloseSearchModal}
      visible={showSearchModal}
      bodyStyle={{
        paddingBottom: 80,
        background: "transparent",
        maxHeight: "100vh",
        overflowY: "auto",
      }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={handleSearchUsers} type="primary">
            Search
          </Button>
        </div>
      }
    >
      <form>
        <input
          placeholder="Type here to search..."
          className="form-control"
          style={{ marginTop: 64, height: 50, borderRadius: 20 }}
          value={searchedName}
          onChange={(e) => setSearchedName(e.target.value)}
        />
        {/* <div style={{height: '200vh'}}></div> */}
      </form>
      <div class="my-5">
        <ul>
          <Space class="d-inline-block">
            <Badge count={getUsersByName.users.length}>
              <h6 class="d-inline-block mx-2">
                {" "}
                {getUsersByName.success === true &&
                getUsersByName.users.length !== 0
                  ? "Bulunan kayitlar"
                  : "Kayitli kullanicilar"}{" "}
              </h6>
            </Badge>
          </Space>

          {getUsersByName.users.length === 0
            ? getAllUser.users.map((user) => (
                <li key={user.id} class="list-unstyled">
                  {user.name}
                </li>
              ))
            : getUsersByName.users.map((user) => (
                <li key={user.id} class="list-unstyled">
                  <a class="mx-2">{user.name} </a>
                  <a class="">{user.surname} </a>
                </li>
              ))}
        </ul>
      </div>
      <div style={{ margin: "80px 0px" }}>
        <div className="row">
          <div className="col-md-6 px-5">
            <h2>Categories</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>

          <div className="col-md-6 px-5">
            <h2>Trends</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
          {/* 
            <CategoryCards /> */}
        </div>
      </div>
    </Drawer>
  );
};

export default SearchModal;
