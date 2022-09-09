import { Button, Descriptions, PageHeader, Statistic, Tabs } from "antd";
import React from "react";
import CommentItem from "../comment/CommentItem";
import CommentTab from "../tabs/CommentTab";
const { TabPane } = Tabs;




const CommentPageHeader = () => {
  return (
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      footer={
        <>
          <CommentTab />
        </>
       
      }
    ></PageHeader>
  );
};

export default CommentPageHeader;
