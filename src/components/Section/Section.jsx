import React, { useState } from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Section.module.css";
import Accordian from "../UI/Accordian/Accordian";
import WorkExperienceForm from "../WorkExperienceForm";
import AchievementsForm from "../AchievementsForm";
import EducationForm from "../EducationForm";

const Section = ({ eduInfo, workExpInfo, achvInfo, tabValue }) => {
  console.log(eduInfo);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const getData = () => {
    switch (tabValue) {
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

  const openForm = () => {
    setIsFormVisible(true);
  };
  const closeForm = () => {
    setIsFormVisible(false);
  };

  const showForm = () => {
    switch (tabValue) {
      case "education":
        return <EducationForm method={"ADD"} closeForm={closeForm} />;
      case "workExperiences":
        return <WorkExperienceForm method={"ADD"} closeForm={closeForm} />;
      case "achievements":
        return <AchievementsForm method={"ADD"} closeForm={closeForm} />;
      default:
        return null;
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.add_new_btn} onClick={openForm}>
        <Typography variant={"h3"}>Add new</Typography>
      </button>

      {isFormVisible && showForm()}

      <div className={classes.info_cards}>
        {getData().map((item) => {
          return (
            <Accordian
              id={item.id}
              key={item.id}
              tabValue={tabValue}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
