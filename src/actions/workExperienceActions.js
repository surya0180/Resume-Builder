export const addWorkExperience = (exp) => {
  return {
    type: "ADD_WORK_EXPERIENCE",
    payload: exp,
  };
};
export const updateWorkExperience = (exp) => {
  return {
    type: "UPDATE_WORK_EXPERIENCE",
    payload: exp,
  };
};
export const removeWorkExperience = (id) => {
  return {
    type: "REMOVE_WORK_EXPERIENCE",
    payload: id,
  };
};
