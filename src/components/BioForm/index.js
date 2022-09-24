import { connect } from "react-redux";
import { addBio, updateBio } from "../../actions/bioActions";
import BioForm from "./BioForm";

const matchStateToProps = (state) => ({
  profilePic: state.bio.profilePic,
  name: state.bio.name,
  email: state.bio.email,
  shortBio: state.bio.shortBio,
});

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

export default connect(matchStateToProps, mapDispatchToProps)(BioForm);
