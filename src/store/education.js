const initState = [];

const educationReducer = (state = initState, action) => {
  const data = action.payload;
  let newState = [...state];

  switch (action.type) {
    case "ADD_EDUCATION":
      data.id = state.length + 1;
      state.push(data);
      return state;
    case "UPDATE_EDUCATION":
      const index = state.findIndex((edu) => edu.id === data.id);
      newState[index] = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
      return newState;
    case "REMOVE_EDUCATION":
      return newState.filter((edu) => edu.id !== data);
    default:
      return state;
  }
};

export default educationReducer;
