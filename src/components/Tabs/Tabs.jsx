import React from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Tabs.module.css";

const Tabs = ({ getData, tabItems, tabValue, setTabValue }) => {
  return (
    <div className={classes.tabs}>
      {tabItems.map((item) => (
        <div
          className={
            classes.tab + " " + (tabValue === item.key ? classes.active : "")
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
