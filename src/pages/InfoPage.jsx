import React, { useState } from "react";
import Tabs from "../components/Tabs/Tabs";
import Section from "../components/Section/Section";
import { tabItems } from "../constants/tabItems";

const InfoPage = () => {
  const [tabValue, setTabValue] = useState(tabItems[0].key);
  return (
    <>
      <Tabs tabItems={tabItems} tabValue={tabValue} setTabValue={setTabValue} />
      <Section tabValue={tabValue} />;
    </>
  );
};

export default InfoPage;
