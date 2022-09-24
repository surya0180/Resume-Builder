const initState = {
  name: "",
  email: "",
  shortBio: "",
};

const bioReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return;
    case "UPDATE":
      return;
    default:
      return state;
  }
};

export default bioReducer;
