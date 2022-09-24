const initState = [];

const achievementsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ACHIEVEMENT":
      return;
    case "UPDATE_ACHIEVEMENT":
      return;
    case "REMOVE_ACHIEVEMENT":
      return;
    default:
      return state;
  }
};

export default achievementsReducer;
