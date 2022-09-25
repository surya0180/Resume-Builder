import React, { useEffect, useState } from "react";
import classes from "./BioForm.module.css";
import upload from "../../assets/Icons/UploadOutlined.svg";
import Typography from "../UI/Typography/Typography";
import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

const initState = {
  profilePic: null,
  name: "",
  email: "",
  shortBio: "",
};

const BioForm = ({
  profilePic,
  name,
  email,
  shortBio,

  addBio,
  updateBio,
  setToggle,
}) => {
  const [formData, setFormData] = useState(initState);
  useEffect(() => {
    setFormData({ profilePic, name, email, shortBio });
  }, [profilePic, name, email, shortBio]);

  const nameChangeHandler = (event) => {
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
          <div className={classes.avatarInput}>
            <img src={upload} alt={"upload"} />
            <label htmlFor="file-upload" className={classes.fileInputLabel}>
              <Typography variant={"h6"}>Upload photo</Typography>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={profilePicHandler}
              className={classes.fileInputBox}
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
        <div className={classes.bioInput}>
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
