import React from "react";
import classes from "./BioForm.module.css";
import upload from "../../../assets/Icons/UploadOutlined.svg";
import Typography from "../../UI/Typography/Typography";
import InputField from "../../UI/InputField/InputField";
import Button from "../../UI/Button/Button";

const BioForm = ({ setToggle }) => {
  return (
    <form>
      <div className={classes.form}>
        <div className={classes.avatar}>
          <div className={classes.avatar_input}>
            <img src={upload} alt={"upload"} />
            <label htmlFor="file-upload" className={classes.file_input_label}>
              <Typography variant={"h6"}>Upload photo</Typography>
            </label>
            <input
              id="file-upload"
              type="file"
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
            width={"100%"}
          />
          <InputField
            htmlFor={"email-id"}
            id={"email-id"}
            label={"Email-ID"}
            type={"email"}
            width={"100%"}
          />
          <Button
            variant={"contained"}
            color={"teal"}
            type={"submit"}
            onClick={() => {
              setToggle(true);
            }}
          >
            <Typography variant={"h4"}>Save</Typography>
          </Button>
        </div>
        <div className={classes.bio_input}>
          <InputField
            htmlFor={"bio"}
            id={"bio"}
            label={"Short Bio"}
            type={"textarea"}
            width={"100%"}
          />
        </div>
      </div>
    </form>
  );
};

export default BioForm;
