import React, { useState } from "react";
import CompanyDetails from "./CompanyDetails";
import AddressDetails from "../Common/AddressDetails";
import ContactPersonDetails from "./ContactPersonDetails";

import { Tabs } from "antd";

export default function DashboardCorporate() {
  const [current, setCurrent] = useState("1");
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const tabList = [
    {
      key: "1",
      label: "Company Details",
      children: <CompanyDetails onChange={onChange} />,
    },
    {
      key: "2",
      label: "Address Details",
      children: <AddressDetails onChange={onChange} />,
    },
    {
      key: "3",
      label: "Contact Person Details",
      children: <ContactPersonDetails onChange={onChange} />,
    },
  ];

  return (
    <Tabs
      tabPosition='left'
      activeKey={current}
      style={{ marginTop: "10%", marginLeft: "35%" }}
      items={tabList}
    />
  );
}
