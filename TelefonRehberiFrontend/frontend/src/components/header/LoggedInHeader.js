import { Badge, Button, Dropdown, Menu } from 'antd'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/AuthAction';
import { useNavigate } from "react-router-dom";
const LoggedInHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  // logout
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/',{replace:true})
  };

  return (
    
    <Fragment>
            <div style={{ display: "table-cell" }}>
          <Menu mode="horizontal">
          
            <Menu.Item
              key="wishlists"
              style={{ fontSize: 14, margin: "0px 12px", color: "#484848" }}
            >
                  <Badge  count={1}><a style={{padding: '3px 4px',display:'inline-block',height:30}}>   Wishlist</a>   </Badge>
            
            </Menu.Item>
           
    
 
          
            <Menu.Item
              key="messages"
              style={{ fontSize: 14, margin: "0px 16px", color: "#484848" }}
            >
            <Badge count={1}><a style={{padding: '3px 4px',display:'inline-block',height:30}}> Messages</a>   </Badge>
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
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                     <span style={{ color: "#767676", fontSize: 14 }}>Messages</span><Badge style={{marginLeft : 6}} count={12} />
                    </Menu.Item>
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                    <span style={{ color: "#767676", fontSize: 14 }}>Notifications</span><Badge style={{marginLeft : 6}} count={12} />
                    </Menu.Item>
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }}>Trips</a>
                    </Menu.Item>
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }}>
                        Wishlists
                      </a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }}>
                        Host your home
                      </a>
                    </Menu.Item>
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }}>
                        Host an experience
                      </a>
                    </Menu.Item>
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }}>Account</a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }}>Help</a>
                    </Menu.Item>
                    <Menu.Item key="0" style={{ padding: "9px 15px" }}>
                      <a style={{ color: "#767676", fontSize: 14 }} onClick={logoutHandler}> Log out</a>
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
  )
}

export default LoggedInHeader