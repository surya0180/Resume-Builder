import { combineReducers, createStore } from "redux";
import achievementsReducer from "./achievements";
import bioReducer from "./bio";
import educationReducer from "./education";
import workExperienceReducer from "./workExperience";

const rootReducer = combineReducers({
  bio: bioReducer,
  education: educationReducer,
  workExperience: workExperienceReducer,
  achievements: achievementsReducer,
});

const store = createStore(rootReducer);

export default store;
