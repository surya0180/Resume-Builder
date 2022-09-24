import React from "react";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import Typography from "../../UI/Typography/Typography";
import classes from "./AchievementsForm.module.css";

const AchievementsForm = ({ children, closeForm }) => {

  const closeFormHandler = () => {
    closeForm(false);
  };

  return (
    <div className={classes.form}>
      <form>
        <div className={classes.form_content}>
          <div className={classes.title}>
            <Typography variant={"h2"}>Add new work experience</Typography>
          </div>
          <div className={classes.input_1}>
            <InputField
              htmlFor={"title"}
              id={"title"}
              name={"title"}
              label={"Title"}
              type={"text"}
              width={"100%"}
            />
          </div>
          <div className={classes.input_2}>
            <InputField
              htmlFor={"date"}
              id={"date"}
              name={"date"}
              label={"Date"}
              type={"datetime-local"}
              width={"100%"}
            />
          </div>
          <div className={classes.input_5}>
            <InputField
              htmlFor={"description"}
              id={"description"}
              name={"description"}
              label={"Description"}
              type={"text"}
              width={"100%"}
            />
          </div>
          <div className={classes.submit}>
            <Button variant={"contained"} color={"teal"}>
              <Typography variant={"h4"} color={"white"}>
                Save
              </Typography>
            </Button>
            <Button
              variant={"outlined"}
              color={"darkGrey"}
              onClick={closeFormHandler}
            >
              <Typography variant={"h4"} color={"mediumBlack"}>
                Cancel
              </Typography>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AchievementsForm;
