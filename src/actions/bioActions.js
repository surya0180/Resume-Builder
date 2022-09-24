export const addBio = (bio) => {
  return {
    type: "ADD_BIO",
    payload: bio,
  };
};

export const updateBio = (bio) => {
  return {
    type: "UPDATE_BIO",
    payload: bio,
  };
};
