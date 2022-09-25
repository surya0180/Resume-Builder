import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./Accordian.module.css";
import arrowopen from "../../../assets/Icons/CaretDownFilled.svg";
import arrowclose from "../../../assets/Icons/caretRightFilled.svg";
import Typography from "../Typography/Typography";
import { months } from "../../../constants/months";
import { Draggable } from "react-beautiful-dnd";

const getPeriod = (startDate, endDate) => {
  const startDateObject = new Date(startDate);
  const startPeriod =
    months[startDateObject.getMonth()] + " " + startDateObject.getFullYear();

  if (!endDate) {
    return startPeriod;
  }
  const endDateObject = new Date(endDate);
  const endPeriod =
    months[endDateObject.getMonth()] + " " + endDateObject.getFullYear();

  const period = startPeriod + "\t - \t" + endPeriod;
  return period;
};

const Accordian = ({ tabValue, item, index, deleteItem, showEditForm }) => {
  const [toggle, setToggle] = useState(false);
  const { id, title, subtitle, startDate, endDate, description } = item;
  const period = getPeriod(startDate, endDate);

  return (
    <Draggable draggableId={`${id}-${tabValue}`} index={index} key={index}>
      {(provided) => (
        <div
          className={classes.accordian}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={classes.accordianBtn}
            onClick={() => {
              setToggle((prevState) => !prevState);
            }}
          >
            <div className={classes.accordianArrow}>
              {toggle ? (
                <img
                  src={arrowopen}
                  alt={"arrowopen"}
                  className={classes.accordianArrowOpen}
                />
              ) : (
                <img
                  src={arrowclose}
                  alt={"arrowclose"}
                  className={classes.accordianArrowClose}
                />
              )}
            </div>
            <div className={classes.accordianBtnContent}>
              <Typography variant={"h3"}>{title}</Typography>
              <div className={classes.accordianPeriod}>
                <Typography variant={"subtitle"}>{period}</Typography>
              </div>
            </div>
          </div>
          <div className={classes.accordianContent}>
            {toggle && (
              <div className={classes.infoCardBody}>
                {tabValue !== "achievements" && (
                  <div className={classes.info1}>
                    <div className={classes.info1Label}>
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
                <div className={classes.info2}>
                  <div className={classes.info2Label}>
                    <Typography variant={"h6"}>Description</Typography>
                  </div>
                  <Typography variant={"subtitle"}>{description}</Typography>
                </div>
                <div className={classes.infoCardOpts}>
                  <Button
                    variant={"outlined"}
                    color={"darkGrey"}
                    onClick={() => {
                      showEditForm(item);
                    }}
                  >
                    <Typography variant={"h4"} color={"mediumBlack"}>
                      Edit
                    </Typography>
                  </Button>

                  <Button
                    variant={"outlined"}
                    color={"darkGrey"}
                    onClick={() => {
                      deleteItem(id);
                    }}
                  >
                    <Typography variant={"h4"} color={"mediumBlack"}>
                      Delete
                    </Typography>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default React.memo(Accordian);
