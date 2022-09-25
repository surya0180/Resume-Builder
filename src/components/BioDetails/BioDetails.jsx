import React from "react";
import classes from "./BioDetails.module.css";
import Typography from "../UI/Typography/Typography";
import Button from "../UI/Button/Button";

const BioDetails = ({
  profilePic,
  name,
  email,
  shortBio,
  addBio,
  updateBio,
  setToggle,
}) => {
  return (
    <div className={classes.bio_details}>
      <div
        className={classes.avatar}
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundSize: "100%",
        }}
      ></div>
      <div className={classes.details}>
        <div className={classes.name}>
          <Typography variant={"h2"}>{name}</Typography>
        </div>
        <div className={classes.email}>
          <Typography variant={"h4"} color={"mediumBlack"}>
            {email}
          </Typography>
        </div>
        <div className={classes.short_bio}>
          <Typography variant={"subtitle"}>{shortBio}</Typography>
        </div>
        <Button
          variant={"outlined"}
          color={"darkGrey"}
          onClick={() => {
            setToggle(false);
          }}
        >
          <Typography variant={"h4"} color={"mediumBlack"}>
            Edit
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default BioDetails;
