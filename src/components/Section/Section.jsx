import React, { useState } from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Information.module.css";
import EduInfo from "../../data/education.json";
import WorkExpInfo from "../../data/workExperiences.json";
import AchvInfo from "../../data/achievements.json";
import Accordian from "../UI/Accordian/Accordian";
import EducationForm from "../EducationForm";
import WorkExperienceForm from "../WorkExperienceForm";
import AchievementsForm from "../AchievementsForm";

const Section = ({ tabValue }) => {
  console.log(tabValue);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const getData = () => {
    switch (tabValue) {
      case "education":
        return EduInfo;
      case "workExperiences":
        return WorkExpInfo;
      case "achievements":
        return AchvInfo;
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
        return <EducationForm closeForm={closeForm} />;
      case "workExperiences":
        return <WorkExperienceForm closeForm={closeForm} />;
      case "achievements":
        return <AchievementsForm closeForm={closeForm} />;
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
