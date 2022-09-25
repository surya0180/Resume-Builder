const initState = [];

const workExperienceReducer = (state = initState, action) => {
  const data = action.payload;
  const updatedState = [...state];

  switch (action.type) {
    case "IMPORT_WORK_EXPERIENCE":
      return data;
    case "ADD_WORK_EXPERIENCE":
      data.id = updatedState.length + 1;
      updatedState.push(data);
      return updatedState;
    case "UPDATE_WORK_EXPERIENCE":
      const index = state.findIndex((exp) => exp.id === data.id);
      updatedState[index] = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
      return updatedState;
    case "REMOVE_WORK_EXPERIENCE":
      return updatedState.filter((exp) => exp.id !== data);
    default:
      return state;
  }
};

export default workExperienceReducer;
