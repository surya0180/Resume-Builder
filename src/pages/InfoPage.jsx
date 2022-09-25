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
  eduInfo,
  workExpInfo,
  achvInfo,

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

  const getData = (key) => {
    switch (key) {
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

  const sectionData = getData(tabValue);

  return (
    <>
      <Tabs
        tabItems={tabItems}
        tabValue={tabValue}
        setTabValue={setTabValue}
        getData={getData}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Section tabValue={tabValue} sectionData={sectionData} />
      </DragDropContext>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    eduInfo: state.education,
    workExpInfo: state.workExperiences,
    achvInfo: state.achievements,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
