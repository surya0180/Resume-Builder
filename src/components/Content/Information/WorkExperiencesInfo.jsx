import React, { useState } from "react";
import classes from "./Information.module.css";
import Typography from "../../UI/Typography/Typography";
import WorkExpInfo from "../../../utils/workExperience.json";
import Button from "../../UI/Button/Button";
import Accordian from "../../UI/Accordian/Accordian";
import WorkExperienceForm from "../../Forms/WorkExperienceForm/WorkExperienceForm";

const WorkExperiencesInfo = ({ children, type }) => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className={classes.container}>
      <button
        className={classes.add_new_btn}
        onClick={() => {
          setOpenForm((open) => !open);
        }}
      >
        <Typography variant={"h3"}>Add new</Typography>
      </button>
      {openForm && <WorkExperienceForm closeForm={setOpenForm} />}
      <div className={classes.info_cards}>
        {WorkExpInfo.map((obj, idx) => (
          <Accordian
            id={idx}
            key={idx}
            type={type}
            title={obj.company}
            period={obj.startDate + "\t-\t" + obj.endDate}
          >
            <div className={classes.info_card_body}>
              <div className={classes.info_1}>
                <div className={classes.info_1_label}>
                  <Typography variant={"h6"}>Role</Typography>
                </div>
                <Typography variant={"h4"} color={"slowBlack"}>
                  {obj.role}
                </Typography>
              </div>
              <div className={classes.info_2}>
                <div className={classes.info_2_label}>
                  <Typography variant={"h6"}>Description</Typography>
                </div>
                <Typography variant={"subtitle"}>{obj.description}</Typography>
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
          </Accordian>
        ))}
      </div>
    </div>
  );
};

export default WorkExperiencesInfo;
