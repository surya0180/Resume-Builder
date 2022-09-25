import React, { useState } from "react";
import Section from "../components/Section";
import Tabs from "../components/Tabs";
import { tabItems } from "../constants/tabItems";

const InfoPage = () => {
  const [tabValue, setTabValue] = useState(tabItems[0].key);
  return (
    <>
      <Tabs tabItems={tabItems} tabValue={tabValue} setTabValue={setTabValue} />
      <Section tabValue={tabValue} />
    </>
  );
};

export default InfoPage;
