import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./Accordian.module.css";
import arrowopen from "../../../assets/Icons/CaretDownFilled.svg";
import arrowclose from "../../../assets/Icons/caretRightFilled.svg";
import Typography from "../Typography/Typography";

const Accordian = ({ tabValue, item }) => {
  const [toggle, setToggle] = useState(false);
  const { title, subtitle, startDate, endDate, description } = item;
  const period = startDate.concat(endDate ? `\t-\t${endDate}` : "");

  return (
    <div className={classes.accordian}>
      <button
        className={classes.accordian_btn}
        onClick={() => {
          setToggle((prevState) => !prevState);
        }}
      >
        <div className={classes.accordian_arrow}>
          {toggle ? (
            <img
              src={arrowopen}
              alt={"arrowopen"}
              className={classes.accordian_arrow_open}
            />
          ) : (
            <img
              src={arrowclose}
              alt={"arrowclose"}
              className={classes.accordian_arrow_close}
            />
          )}
        </div>
        <div className={classes.accordian_btn_content}>
          <Typography variant={"h3"}>{title}</Typography>
          <div className={classes.accordian_period}>
            <Typography variant={"subtitle"}>{period}</Typography>
          </div>
        </div>
      </button>
      <div className={classes.accordian_content}>
        {toggle && (
          <div className={classes.info_card_body}>
            {tabValue !== "achievements" && (
              <div className={classes.info_1}>
                <div className={classes.info_1_label}>
                  <Typography variant={"h6"}>
                    {tabValue === "education"
                      ? "Degree"
                      : tabValue === "workExperiences"
                      ? "Role"
                      : null}
                  </Typography>
                </div>
                <Typography variant={"h4"} color={"slowBlack"}>
                  {subtitle}
                </Typography>
              </div>
            )}
            <div className={classes.info_2}>
              <div className={classes.info_2_label}>
                <Typography variant={"h6"}>Description</Typography>
              </div>
              <Typography variant={"subtitle"}>{description}</Typography>
            </div>
            <div className={classes.info_card_opts}>
              <Button variant={"outlined"} color={"darkGrey"}>
                <Typography variant={"h4"} color={"mediumBlack"}>
                  Edit
                </Typography>
              </Button>

              <Button variant={"outlined"} color={"darkGrey"}>
                <Typography variant={"h4"} color={"mediumBlack"}>
                  Delete
                </Typography>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
