import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import Typography from "../UI/Typography/Typography";
import classes from "./WorkExperienceForm.module.css";

const WorkExperienceForm = ({
  item,
  method,

  addWorkExperience,
  updateWorkExperience,
  closeForm,
}) => {
  const initState = item
    ? {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        startDate: item.startDate,
        endDate: item.endDate,
        description: item.description,
      }
    : {
        id: 1,
        title: "",
        subtitle: "",
        startDate: "",
        endDate: "",
        description: "",
      };
  const [formData, setFormData] = useState(initState);

  const titleHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const subtitleHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      subtitle: event.target.value,
    }));
  };

  const startDateHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      startDate: event.target.value,
    }));
  };

  const endDateHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      endDate: event.target.value,
    }));
  };

  const descriptionHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (method === "ADD") {
      addWorkExperience(formData);
    } else if (method === "UPDATE") {
      updateWorkExperience(formData);
    }
    closeForm();
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.formContent}>
          <div className={classes.title}>
            <Typography variant={"h2"}>Add new work experience</Typography>
          </div>
          <div className={classes.input1}>
            <InputField
              htmlFor={"company"}
              id={"company"}
              name={"company"}
              label={"Company"}
              type={"text"}
              value={formData.title}
              onChange={titleHandler}
              width={"100%"}
              required={true}
            />
          </div>
          <div className={classes.input2}>
            <InputField
              htmlFor={"role"}
              id={"role"}
              name={"role"}
              label={"Role"}
              type={"text"}
              value={formData.subtitle}
              onChange={subtitleHandler}
              width={"100%"}
              required={true}
            />
          </div>
          <div className={classes.input34}>
            <InputField
              htmlFor={"startDate"}
              id={"startDate"}
              name={"startDate"}
              label={"Start Date"}
              type={"datetime-local"}
              value={formData.startDate}
              onChange={startDateHandler}
              width={"100%"}
              required={true}
            />
            <InputField
              htmlFor={"endDate"}
              id={"endDate"}
              name={"endDate"}
              label={"End Date"}
              type={"datetime-local"}
              value={formData.endDate}
              onChange={endDateHandler}
              width={"100%"}
              required={true}
            />
          </div>
          <div className={classes.input5}>
            <InputField
              htmlFor={"description"}
              id={"description"}
              name={"description"}
              label={"Description"}
              type={"textarea"}
              value={formData.description}
              onChange={descriptionHandler}
              width={"100%"}
              required={true}
            />
          </div>
          <div className={classes.submit}>
            <Button variant={"contained"} color={"teal"} type={"submit"}>
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

export default WorkExperienceForm;
