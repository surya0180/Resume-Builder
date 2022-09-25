import React, { useState } from "react";
import Typography from "../UI/Typography/Typography";
import classes from "./Section.module.css";
import Accordian from "../UI/Accordian/Accordian";
import AchievementsForm from "../AchievementsForm";
import EducationForm from "../EducationForm";
import WorkExperienceForm from "../WorkExperienceForm";
import { Droppable } from "react-beautiful-dnd";

const Section = ({
  sectionData,
  tabValue,
  removeEducation,
  removeWorkExperience,
  removeAchievement,
}) => {
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [item, setItem] = useState({});

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
      <button className={classes.addNewBtn} onClick={openCreateForm}>
        <Typography variant={"h3"}>Add new</Typography>
      </button>

      {isCreateFormVisible && showCreateForm()}
      {isEditFormVisible && showEditForm()}

      <Droppable droppableId={tabValue}>
        {(provided, snapshot) => (
          <div
            className={classes.infoCards}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {sectionData.map((item, idx) => {
              return (
                <Accordian
                  id={item.id}
                  key={item.id}
                  index={idx}
                  tabValue={tabValue}
                  item={item}
                  deleteItem={deleteHandler}
                  showEditForm={openEditForm}
                />
              );
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Section;
