import { connect } from "react-redux";
import {
  addWorkExperience,
  updateWorkExperience,
} from "../../actions/workExperienceActions";
import WorkExperienceForm from "./WorkExperienceForm";

const mapDispatchToProps = (dispatch) => {
  return {
    addWorkExperience: (exp) => {
      dispatch(addWorkExperience(exp));
    },
    updateWorkExperience: (exp) => {
      dispatch(updateWorkExperience(exp));
    },
  };
};

export default connect(null, mapDispatchToProps)(WorkExperienceForm);
