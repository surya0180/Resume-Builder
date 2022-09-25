import { connect } from "react-redux";
import {
  importAchievements,
  importBio,
  importEducation,
  importWorkExperiences,
} from "../../actions/importActions";
import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    bio: state.bio,
    education: state.education,
    workExperiences: state.workExperiences,
    achievements: state.achievements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    importBio: (bio) => {
      dispatch(importBio(bio));
    },
    importEducation: (edu) => {
      dispatch(importEducation(edu));
    },
    importWorkExperiences: (exp) => {
      dispatch(importWorkExperiences(exp));
    },
    importAchievements: (achv) => {
      dispatch(importAchievements(achv));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
