import { connect } from "react-redux";
import Section from "./Section";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    eduInfo: state.education,
    workExpInfo: state.workExperiences,
    achvInfo: state.achievements,
  };
};

export default connect(mapStateToProps)(Section);
