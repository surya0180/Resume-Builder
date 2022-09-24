import React from "react";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import Typography from "../../UI/Typography/Typography";
import classes from "./WorkExperienceForm.module.css";

const WorkExperienceForm = ({ children, closeForm }) => {

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
              htmlFor={"company"}
              id={"company"}
              name={"company"}
              label={"Company"}
              type={"text"}
              width={"100%"}
            />
          </div>
          <div className={classes.input_2}>
            <InputField
              htmlFor={"role"}
              id={"role"}
              name={"role"}
              label={"Role"}
              type={"text"}
              width={"100%"}
            />
          </div>
          <div className={classes.input_34}>
            <InputField
              htmlFor={"startDate"}
              id={"startDate"}
              name={"startDate"}
              label={"Start Date"}
              type={"datetime-local"}
              width={"100%"}
            />
            <InputField
              htmlFor={"endDate"}
              id={"endDate"}
              name={"endDate"}
              label={"End Date"}
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

export default WorkExperienceForm;
