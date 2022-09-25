import { connect } from "react-redux";
import { addEducation, updateEducation } from "../../actions/educationActions";
import EducationForm from "./EducationForm";

const mapDispatchToProps = (dispatch) => {
  return {
    addEducation: (education) => {
      dispatch(addEducation(education));
    },
    updateEducation: (education) => {
      dispatch(updateEducation(education));
    },
  };
};

export default connect(null, mapDispatchToProps)(EducationForm);
