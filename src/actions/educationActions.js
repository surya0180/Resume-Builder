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
export const removeEducation = (id) => {
  return {
    type: "REMOVE_EDUCATION",
    payload: id,
  };
};
