const initState = [];

const achievementsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return;
    case "UPDATE":
      return;
    case "REMOVE":
      return;
    default:
      return state;
  }
};

export default achievementsReducer;
