import { Badge, Button, Dropdown, Menu } from "antd";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthAction";
import { Link, useNavigate } from "react-router-dom";
const LoggedInHeader = () => {

  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // logout
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  


  return (
    <Fragment>
      <div style={{ display: "table-cell" }}>
        <Menu mode="horizontal">
          <Menu.Item
            key="wishlists"
            style={{ fontSize: 14, margin: "0px 12px", color: "#484848" }}
          >
            <Badge count={1}>
              <a
                style={{
                  padding: "3px 4px",
                  display: "inline-block",
                  height: 30,
                }}
              >
                {" "}
                Wishlist
              </a>{" "}
            </Badge>
          </Menu.Item>

          <Menu.Item
            key="mygroups"
            style={{ fontSize: 14, margin: "0px 16px", color: "#484848" }}
          >
            <Badge count={1}>
              <a
                style={{
                  padding: "3px 4px",
                  display: "inline-block",
                  height: 30,
                }}
              >
                {" "}
             <Link to={`/user/${auth.user.id}/my-groups`}>My Groups</Link>
              </a>{" "}
            </Badge>
          </Menu.Item>

          <Menu.Item>
            <Dropdown
              overlay={
                <Menu
                  style={{
                    width: 240,
                    borderRadius: 20,
                    padding: "12px 0px",
                  }}
                >
                  <Menu.Item key="1" style={{ padding: "9px 15px" }}>
                    <span style={{ color: "#767676", fontSize: 14 }}>
                      Messages
                    </span>
                    <Badge style={{ marginLeft: 6 }} count={12} />
                  </Menu.Item>
                  <Menu.Item key="2" style={{ padding: "9px 15px" }}>
                    <span style={{ color: "#767676", fontSize: 14 }}>
                      Notifications
                    </span>
                    <Badge style={{ marginLeft: 6 }} count={12} />
                  </Menu.Item>
                  <Menu.Item key="3" style={{ padding: "9px 15px" }}>
                    <a style={{ color: "#767676", fontSize: 14 }}>Trips</a>
                  </Menu.Item>
                  <Menu.Item key="4" style={{ padding: "9px 15px" }}>
                    <a style={{ color: "#767676", fontSize: 14 }}>Wishlists</a>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="5" style={{ padding: "9px 15px" }}>
                    <a style={{ color: "#767676", fontSize: 14 }}>
                      Host your home
                    </a>
                  </Menu.Item>
                  <Menu.Item key="6" style={{ padding: "9px 15px" }}>
                    <a style={{ color: "#767676", fontSize: 14 }}>
                      Host an experience
                    </a>
                  </Menu.Item>
                  <Menu.Item key="7" style={{ padding: "9px 15px" }}>
                    <Link style={{ color: "#767676", fontSize: 14 }} to={`/user/${auth.user.id}/account`}>Account</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="8" style={{ padding: "9px 15px" }}>
                    <a style={{ color: "#767676", fontSize: 14 }}>Help</a>
                  </Menu.Item>
                  <Menu.Item key="9" style={{ padding: "9px 15px" }}>
                    <a
                      style={{ color: "#767676", fontSize: 14 }}
                      onClick={logoutHandler}
                    >
                      {" "}
                      Log out
                    </a>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              {/* <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
Click me <DownOutlined />
</a> */}
              <div style={{ width: "auto", height: "auto" }}>
                <div>
                  <img
                    height={30}
                    width={30}
                    style={{ borderRadius: "50%", padding: "1px" }}
                    src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                  />
                </div>
              </div>
            </Dropdown>
          </Menu.Item>
          {/* <Menu.Item key="user" style={{fontSize: 14 ,margin: '0px 4px'}}>Become a host</Menu.Item> */}
          {/* <span key="wishlists">Become a host</span>
          <span key="Trips">Become a host</span>
          <span key="messages">Become a host</span>
          <span key="help">Become a host</span> */}
        </Menu>
      </div>
    </Fragment>
  );
};

export default LoggedInHeader;
