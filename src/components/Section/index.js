import { connect } from "react-redux";
import { removeAchievement } from "../../actions/achievementActions";
import { removeEducation } from "../../actions/educationActions";
import { removeWorkExperience } from "../../actions/workExperienceActions";
import Section from "./Section";

const mapStateToProps = (state) => {
  return {
    eduInfo: state.education,
    workExpInfo: state.workExperiences,
    achvInfo: state.achievements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeEducation: (id) => {
      dispatch(removeEducation(id));
    },
    removeWorkExperience: (id) => {
      dispatch(removeWorkExperience(id));
    },
    removeAchievement: (id) => {
      dispatch(removeAchievement(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
