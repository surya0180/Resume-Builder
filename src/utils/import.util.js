const loadBio = (bio) => {
  let resumeBio = {};
  resumeBio.name = !bio.name ? "" : bio.name;
  resumeBio.email = !bio.email ? "" : bio.email;
  resumeBio.shortBio = !bio.shortBio ? "" : bio.shortBio;
  return resumeBio;
};

const loadEducation = (education) => {
  let resume = [];
  for (let i in education) {
    const item = education[i];
    const newItem = {};
    if (!item.id) {
      continue;
    }
    newItem.id = parseInt(item.id);
    newItem.title = !item.title ? "" : item.title;
    newItem.subtitle = !item.subtitle ? "" : item.subtitle;
    newItem.startDate =
      !item.startDate || (item.startDate && !Date.parse(item.startDate))
        ? ""
        : item.startDate;
    newItem.endDate =
      !item.endDate || (newItem.endDate && !Date.parse(newItem.endDate))
        ? ""
        : item.endDate;
    newItem.description = !item.description ? "" : item.description;

    resume.push(newItem);
  }

  return resume;
};

const loadWorkExperiences = (workExperiences) => {
  let resume = [];
  for (let i in workExperiences) {
    const item = workExperiences[i];
    const newItem = {};
    if (!item.id) {
      continue;
    }
    newItem.id = parseInt(item.id);
    newItem.title = !item.title ? "" : item.title;
    newItem.subtitle = !item.subtitle ? "" : item.subtitle;
    newItem.startDate =
      !item.startDate || (item.startDate && !Date.parse(item.startDate))
        ? ""
        : item.startDate;
    newItem.endDate =
      !item.endDate || (newItem.endDate && !Date.parse(newItem.endDate))
        ? ""
        : item.endDate;
    newItem.description = !item.description ? "" : item.description;

    resume.push(newItem);
  }

  return resume;
};

const loadAchievements = (achievements) => {
  let resume = [];
  for (let i in achievements) {
    const item = achievements[i];
    const newItem = {};
    if (!item.id) {
      continue;
    }
    newItem.id = parseInt(item.id);
    newItem.title = !item.title ? "" : item.title;
    newItem.startDate =
      !item.startDate || (item.startDate && !Date.parse(item.startDate))
        ? ""
        : item.startDate;
    newItem.description = !item.description ? "" : item.description;

    resume.push(newItem);
  }

  return resume;
};

export const loadJSONFile = (
  json,
  importBio,
  importEducation,
  importWorkExperiences,
  importAchievements
) => {
  const { bio, education, workExperiences, achievements } = json;

  importBio(loadBio(bio));
  importEducation(loadEducation(education));
  importWorkExperiences(loadWorkExperiences(workExperiences));
  importAchievements(loadAchievements(achievements));
};
