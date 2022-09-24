import React, { useState } from "react";
import classes from "./BioForm.module.css";
import upload from "../../assets/Icons/UploadOutlined.svg";
import Typography from "../UI/Typography/Typography";
import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

const BioForm = ({
  profilePic,
  name,
  email,
  shortBio,

  addBio,
  updateBio,
  setToggle,
}) => {
  const [formData, setFormData] = useState({
    profilePic: profilePic,
    name: name,
    email: email,
    shortBio: shortBio,
  });

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    setFormData((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const emailChangeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };

  const bioChangeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        shortBio: event.target.value,
      };
    });
  };

  const profilePicHandler = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        profilePic: URL.createObjectURL(event.target.files[0]),
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name === "") {
      addBio(formData);
    } else {
      updateBio(formData);
    }
    setToggle(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form}>
        <div
          className={classes.avatar}
          style={{
            backgroundImage: `url(${formData.profilePic})`,
            backgroundSize: "100%",
          }}
        >
          <div className={classes.avatar_input}>
            <img src={upload} alt={"upload"} />
            <label htmlFor="file-upload" className={classes.file_input_label}>
              <Typography variant={"h6"}>Upload photo</Typography>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={profilePicHandler}
              className={classes.file_input_box}
            />
          </div>
        </div>
        <div className={classes.details}>
          <InputField
            htmlFor={"name"}
            id={"name"}
            label={"Name"}
            type={"text"}
            value={formData.name}
            onChange={nameChangeHandler}
            width={"100%"}
            required={true}
          />
          <InputField
            htmlFor={"email-id"}
            id={"email-id"}
            label={"Email-ID"}
            type={"email"}
            value={formData.email}
            onChange={emailChangeHandler}
            width={"100%"}
            required={true}
          />
          <Button variant={"contained"} color={"teal"} type={"submit"}>
            <Typography variant={"h4"}>Save</Typography>
          </Button>
        </div>
        <div className={classes.bio_input}>
          <InputField
            htmlFor={"bio"}
            id={"bio"}
            label={"Short Bio"}
            type={"textarea"}
            value={formData.shortBio}
            onChange={bioChangeHandler}
            width={"100%"}
            required={true}
          />
        </div>
      </div>
    </form>
  );
};

export default BioForm;
