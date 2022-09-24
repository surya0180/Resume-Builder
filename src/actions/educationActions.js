export const addEducation = (education) => {
  return {
    type: "ADD_EDUCATION",
    payload: education,
  };
};
export const updateEducation = (education) => {
  return {
    type: "UPDATE_EDUCATION",
    payload: education,
  };
};
export const deleteEducation = (id) => {
  return {
    type: "DELETE_EDUCATION",
    payload: id,
  };
};
