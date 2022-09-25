import { connect } from "react-redux";
import {
  addAchievement,
  updateAchievement,
} from "../../actions/achievementActions";
import AchievementsForm from "./AchievementsForm";

const mapDispatchToProps = (dispatch) => {
  return {
    addAchievement: (achv) => {
      dispatch(addAchievement(achv));
    },
    updateAchievement: (achv) => {
      dispatch(updateAchievement(achv));
    },
  };
};

export default connect(null, mapDispatchToProps)(AchievementsForm);
