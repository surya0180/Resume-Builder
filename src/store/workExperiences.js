const initState = [];

const workExperienceReducer = (state = initState, action) => {
  const data = action.payload;
  let newState = [...state];

  switch (action.type) {
    case "ADD_WORK_EXPERIENCE":
      data.id = state.length + 1;
      state.push(data);
      return state;
    case "UPDATE_WORK_EXPERIENCE":
      const index = state.findIndex((exp) => exp.id === data.id);
      newState[index] = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
      return newState;
    case "REMOVE_WORK_EXPERIENCE":
      return newState.filter((exp) => exp.id !== data);
    default:
      return state;
  }
};

export default workExperienceReducer;
