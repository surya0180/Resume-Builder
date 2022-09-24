const initState = [];

const educationReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EDUCATION":
      return;
    case "UPDATE_EDUCATION":
      return;
    case "REMOVE_EDUCATION":
      return;
    default:
      return state;
  }
};

export default educationReducer;
