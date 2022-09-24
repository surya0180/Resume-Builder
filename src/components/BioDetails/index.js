import { connect } from "react-redux";
import { addBio, updateBio } from "../../actions/bioActions";
import BioDetails from "./BioDetails";

const matchStateToProps = (state) => {
  return {
    profilePic: state.bio.profilePic,
    name: state.bio.name,
    email: state.bio.email,
    shortBio: state.bio.shortBio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBio: (bio) => {
      dispatch(addBio(bio));
    },
    updateBio: (bio) => {
      dispatch(updateBio(bio));
    },
  };
};

export default connect(matchStateToProps, mapDispatchToProps)(BioDetails);
