const initState = [];

const educationReducer = (state = initState, action) => {
  const data = action.payload;
  let newState = [...state];

  switch (action.type) {
    case "IMPORT_EDUCATION":
      return data;
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
    case "DRAG_DROP_EDUCATION":
      console.log("I am here");
      const src = data.source;
      const des = data.destination;

      let temp = newState[src.index];
      newState.splice(src.index, 1);
      newState.splice(des.index, 0, temp);
      return newState;
    default:
      return state;
  }
};

export default educationReducer;
