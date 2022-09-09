import { Descriptions, Image } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const AccountDescription = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <div class="d-flex flex-column ">
        <Image
          width={240}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />

        <div class="my-3 ">
          <Descriptions column={1}>
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountDescription;
