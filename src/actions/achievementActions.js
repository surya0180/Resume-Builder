export const addAchievement = (exp) => {
  return {
    type: "ADD_ACHIEVEMENT",
    payload: exp,
  };
};
export const updateAchievement = (exp) => {
  return {
    type: "UPDATE_ACHIEVEMENT",
    payload: exp,
  };
};
export const removeAchievement = (id) => {
  return {
    type: "REMOVE_ACHIEVEMENT",
    payload: id,
  };
};
