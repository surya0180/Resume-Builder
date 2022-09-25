const initState = [];

const achievementsReducer = (state = initState, action) => {
  const data = action.payload;
  const updatedState = [...state];

  switch (action.type) {
    case "IMPORT_ACHIEVEMENTS":
      return data;
    case "ADD_ACHIEVEMENT":
      data.id = updatedState.length + 1;
      updatedState.push(data);
      return updatedState;
    case "UPDATE_ACHIEVEMENT":
      const index = updatedState.findIndex((achv) => achv.id === data.id);
      updatedState[index] = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
      return updatedState;
    case "REMOVE_ACHIEVEMENT":
      return updatedState.filter((achv) => achv.id !== data);
    case "DRAG_DROP_ACHIEVEMENT":
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

export default achievementsReducer;
