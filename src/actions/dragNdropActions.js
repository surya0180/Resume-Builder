export const dragNdropEducationAction = (source, destination) => {
  return {
    type: "DRAG_DROP_EDUCATION",
    payload: {
      source,
      destination,
    },
  };
};
export const dragNdropWorkExperiencesAction = (source, destination) => {
  return {
    type: "DRAG_DROP_WORK_EXPERIENCES",
    payload: {
      source,
      destination,
    },
  };
};
export const dragNdropAchievementsAction = (source, destination) => {
  return {
    type: "DRAG_DROP_ACHIEVEMENT",
    payload: {
      source,
      destination,
    },
  };
};
