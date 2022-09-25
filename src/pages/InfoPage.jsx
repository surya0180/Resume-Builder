import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Section from "../components/Section";
import Tabs from "../components/Tabs";
import { tabItems } from "../constants/tabItems";
import { connect } from "react-redux";
import {
  dragNdropAchievementsAction,
  dragNdropEducationAction,
  dragNdropWorkExperiencesAction,
} from "../actions/dragNdropActions";

const InfoPage = ({
  dragNdropEducation,
  dragNdropWorkExperiences,
  dragNdropAchievements,
}) => {
  const [tabValue, setTabValue] = useState(tabItems[0].key);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    )
      return;

    switch (tabValue) {
      case "education":
        dragNdropEducation(source, destination);
        break;
      case "workExperiences":
        dragNdropWorkExperiences(source, destination);
        break;
      case "achievements":
        dragNdropAchievements(source, destination);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Tabs tabItems={tabItems} tabValue={tabValue} setTabValue={setTabValue} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Section tabValue={tabValue} />
      </DragDropContext>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dragNdropEducation: (source, destination) => {
      dispatch(dragNdropEducationAction(source, destination));
    },
    dragNdropWorkExperiences: (source, destination) => {
      dispatch(dragNdropWorkExperiencesAction(source, destination));
    },
    dragNdropAchievements: (source, destination) => {
      dispatch(dragNdropAchievementsAction(source, destination));
    },
  };
};

export default connect(null, mapDispatchToProps)(InfoPage);
