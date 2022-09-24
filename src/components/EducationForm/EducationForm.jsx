import React from "react";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import Typography from "../UI/Typography/Typography";
import classes from "./EducationForm.module.css";

const EducationForm = ({ closeForm }) => {
  return (
    <div className={classes.form}>
      <form>
        <div className={classes.form_content}>
          <div className={classes.title}>
            <Typography variant={"h2"}>Add new education</Typography>
          </div>
          <div className={classes.input_1}>
            <InputField
              htmlFor={"institute"}
              id={"institute"}
              name={"institute"}
              label={"Institute"}
              type={"text"}
              width={"100%"}
            />
          </div>
          <div className={classes.input_2}>
            <InputField
              htmlFor={"degree"}
              id={"degree"}
              name={"degree"}
              label={"Degree"}
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
            <Button variant={"outlined"} color={"darkGrey"} onClick={closeForm}>
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

export default EducationForm;
