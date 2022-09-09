import { Avatar, List } from "antd";
import React from "react";

const AllUserListItem = ({ user }) => {
  return (
    <List.Item
      key={user.id}
      actions={[
        <a key="list-loadmore-edit" class="mx-2">
          edit
        </a>,
        <a key="list-loadmore-more" class="mx-1">
          more
        </a>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
        title={
          <>
            <a href="https://ant.design">
              {user.firstName} {user.lastName}
            </a>{" "}
            <a class="mx-2">{user.id}</a>
          </>
        }
        description={user.email}
      />
      <div>Details</div>
    </List.Item>
  );
};

export default AllUserListItem;
