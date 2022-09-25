const initState = {
  profilePic: "",
  name: "",
  email: "",
  shortBio: "",
};

const bioReducer = (state = initState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "ADD_BIO":
      return {
        profilePic: data.profilePic,
        name: data.name,
        email: data.email,
        shortBio: data.shortBio,
      };
    case "IMPORT_BIO":
      return {
        profilePic: data.profilePic,
        name: data.name,
        email: data.email,
        shortBio: data.shortBio,
      };
    case "UPDATE_BIO":
      return {
        profilePic: data.profilePic,
        name: data.name,
        email: data.email,
        shortBio: data.shortBio,
      };
    default:
      return state;
  }
};

export default bioReducer;
