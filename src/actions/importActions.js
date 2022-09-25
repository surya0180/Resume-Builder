export const importBio = (bio) => {
  return {
    type: "IMPORT_BIO",
    payload: bio,
  };
};

export const importEducation = (edu) => {
  return {
    type: "IMPORT_EDUCATION",
    payload: edu,
  };
};

export const importWorkExperiences = (exp) => {
  return {
    type: "IMPORT_WORK_EXPERIENCE",
    payload: exp,
  };
};

export const importAchievements = (achv) => {
  return {
    type: "IMPORT_ACHIEVEMENTS",
    payload: achv,
  };
};
