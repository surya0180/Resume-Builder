import React from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Tabs.module.css";

const Tabs = ({ tabItems, tabValue, setTabValue }) => {
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
          <Typography variant={"h4"}>{item.label}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
