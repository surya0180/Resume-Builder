import React from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Tabs.module.css";

const Tabs = ({
  eduInfo,
  workExpInfo,
  achvInfo,
  tabItems,
  tabValue,
  setTabValue,
}) => {
  const getData = (key) => {
    switch (key) {
      case "education":
        return eduInfo;
      case "workExperiences":
        return workExpInfo;
      case "achievements":
        return achvInfo;
      default:
        return [];
    }
  };

  return (
    <div className={classes.nav_bar}>
      {tabItems.map((item) => (
        <div
          className={
            classes.nav_item +
            " " +
            (tabValue === item.key ? classes.active : "")
          }
          key={item.key}
          onClick={() => {
            setTabValue(item.key);
          }}
        >
          <Typography variant={"h4"}>
            {item.label} ({getData(item.key).length})
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
