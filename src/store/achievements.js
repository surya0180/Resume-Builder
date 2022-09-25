const initState = [];

const achievementsReducer = (state = initState, action) => {
  const data = action.payload;
  let newState = [...state];

  switch (action.type) {
    case "ADD_ACHIEVEMENT":
      data.id = state.length + 1;
      state.push(data);
      return state;
    case "UPDATE_ACHIEVEMENT":
      const index = state.findIndex((achv) => achv.id === data.id);
      newState[index] = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
      return newState;
    case "REMOVE_ACHIEVEMENT":
      return newState.filter((achv) => achv.id !== data);
    default:
      return state;
  }
};

export default achievementsReducer;
