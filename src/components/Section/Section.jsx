import React, { useState } from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Section.module.css";
import Accordian from "../UI/Accordian/Accordian";
import AchievementsForm from "../AchievementsForm";
import EducationForm from "../EducationForm";
import WorkExperienceForm from "../WorkExperienceForm";

const Section = ({
  eduInfo,
  workExpInfo,
  achvInfo,
  tabValue,

  removeEducation,
  removeWorkExperience,
  removeAchievement,
}) => {
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [item, setItem] = useState({});

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

  const openCreateForm = () => {
    setIsCreateFormVisible(true);
  };
  const closeCreateForm = () => {
    setIsCreateFormVisible(false);
  };

  const openEditForm = (item) => {
    setIsEditFormVisible(true);
    setItem(item);
  };
  const closeEditForm = () => {
    setIsEditFormVisible(false);
  };

  const showCreateForm = () => {
    switch (tabValue) {
      case "education":
        return <EducationForm method={"ADD"} closeForm={closeCreateForm} />;
      case "workExperiences":
        return (
          <WorkExperienceForm method={"ADD"} closeForm={closeCreateForm} />
        );
      case "achievements":
        return <AchievementsForm method={"ADD"} closeForm={closeCreateForm} />;
      default:
        return null;
    }
  };

  const showEditForm = () => {
    switch (tabValue) {
      case "education":
        return (
          <EducationForm
            method={"UPDATE"}
            item={item}
            closeForm={closeEditForm}
          />
        );
      case "workExperiences":
        return (
          <WorkExperienceForm
            method={"UPDATE"}
            item={item}
            closeForm={closeEditForm}
          />
        );
      case "achievements":
        return (
          <AchievementsForm
            method={"UPDATE"}
            item={item}
            closeForm={closeEditForm}
          />
        );
      default:
        return null;
    }
  };

  const deleteHandler = (id) => {
    switch (tabValue) {
      case "education":
        removeEducation(id);
        break;
      case "workExperiences":
        removeWorkExperience(id);
        break;
      case "achievements":
        removeAchievement(id);
        break;
      default:
        return;
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.add_new_btn} onClick={openCreateForm}>
        <Typography variant={"h3"}>Add new</Typography>
      </button>

      {isCreateFormVisible && showCreateForm()}
      {isEditFormVisible && showEditForm()}

      <div className={classes.info_cards}>
        {getData().map((item) => {
          return (
            <Accordian
              id={item.id}
              key={item.id}
              tabValue={tabValue}
              item={item}
              deleteItem={deleteHandler}
              showEditForm={openEditForm}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
