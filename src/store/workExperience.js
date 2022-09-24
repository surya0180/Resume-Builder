const initState = [
  {
    id: "",
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];

const workExperienceReducer = (state = initState, action) => {
  if (action.type === "ADD") {
  }
  if (action.type === "UPDATE") {
  }
  if (action.type === "REMOVE") {
  }
  return state;
};

export default workExperienceReducer;
