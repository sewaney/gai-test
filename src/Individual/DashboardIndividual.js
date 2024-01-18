import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import AddressDetails from "../Common/AddressDetails";
import PersonalDetails from "./PersonalDetails";
import { Tabs } from "antd";

export default function DashboardIndividual() {
  const [current, setCurrent] = useState("1");
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const tabList = [
    {
      key: "1",
      label: "Basic Details",
      children: <BasicDetails onChange={onChange} />,
    },
    {
      key: "2",
      label: "Address Details",
      children: <AddressDetails onChange={onChange} />,
    },
    {
      key: "3",
      label: "Personal Details",
      children: <PersonalDetails onChange={onChange} />,
    },
  ];

  return (
    <Tabs
      defaultActiveKey='1'
      activeKey={current}
      tabPosition='left'
      style={{ marginTop: "10%", marginLeft: "35%" }}
      items={tabList}
    />
  );
}
