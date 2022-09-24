const initState = [];

const workExperienceReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_WORK_EXPERIENCE":
      return;
    case "UPDATE_WORK_EXPERIENCE":
      return;
    case "REMOVE_WORK_EXPERIENCE":
      return;
    default:
      return state;
  }
};

export default workExperienceReducer;
