import { connect } from "react-redux";
import Tabs from "./Tabs";

const mapStateToProps = (state) => {
  return {
    eduInfo: state.education,
    workExpInfo: state.workExperiences,
    achvInfo: state.achievements,
  };
};

export default connect(mapStateToProps)(Tabs);
