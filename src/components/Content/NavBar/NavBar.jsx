import React from "react";
import Typography from "../../UI/Typography/Typography";
import classes from "./NavBar.module.css";

const NavBar = ({ children, InfoTypes, currentInfoType, setInfoType }) => {
  return (
    <div className={classes.nav_bar}>
      {InfoTypes.map((obj, id) => (
        <div
          className={
            classes.nav_item +
            " " +
            (currentInfoType === obj.name ? classes.active : "")
          }
          key={id}
          onClick={() => {
            setInfoType(obj.name);
          }}
        >
          <Typography variant={"h4"}>
            {obj.name} ({obj.items})
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
