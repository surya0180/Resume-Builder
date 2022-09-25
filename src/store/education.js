const initState = [];

const educationReducer = (state = initState, action) => {
  const data = action.payload;
  const updatedState = [...state];

  switch (action.type) {
    case "IMPORT_EDUCATION":
      return data;
    case "ADD_EDUCATION":
      data.id = updatedState.length + 1;
      updatedState.push(data);
      return updatedState;
    case "UPDATE_EDUCATION":
      const index = state.findIndex((edu) => edu.id === data.id);
      updatedState[index] = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
      return updatedState;
    case "REMOVE_EDUCATION":
      return updatedState.filter((edu) => edu.id !== data);
    case "DRAG_DROP_EDUCATION":
      const src = data.source;
      const des = data.destination;

      let temp = updatedState[src.index];
      updatedState.splice(src.index, 1);
      updatedState.splice(des.index, 0, temp);
      return updatedState;
    default:
      return state;
  }
};

export default educationReducer;
