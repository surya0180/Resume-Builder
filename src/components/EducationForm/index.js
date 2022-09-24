import { connect } from "react-redux";
import {
  addEducation,
  deleteEducation,
  updateEducation,
} from "../../actions/educationActions";
import EducationForm from "./EducationForm";

const mapStateToProps = (state, ownProps) => {
  if (ownProps.method === "ADD") {
    return {
      id: state.education.length + 1,
      title: "",
      subtitle: "",
      startDate: "",
      endDate: "",
      description: "",
    };
  }
  if (ownProps.method === "UPDATE") {
    const id = ownProps.id;
    const education = state.education.filter((edu) => edu.id === id)[0];
    return {
      id: education.id,
      title: education.title,
      subtitle: education.subtitle,
      startDate: education.startDate,
      description: education.description,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEducation: (education) => {
      dispatch(addEducation(education));
    },
    updateEducation: (education) => {
      dispatch(updateEducation(education));
    },
    deleteEducation: (id) => {
      dispatch(deleteEducation(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationForm);
