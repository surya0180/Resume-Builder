const initState = [
  {
    id: "",
    institute: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

const educationReducer = (state = initState, action) => {
  if (action.type === "ADD") {
  }
  if (action.type === "UPDATE") {
  }
  if (action.type === "REMOVE") {
  }
  return state;
};

export default educationReducer;
