import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import Typography from "../UI/Typography/Typography";
import classes from "./EducationForm.module.css";

const EducationForm = ({
  id,
  title,
  subtitle,
  startDate,
  endDate,
  description,
  method,

  addEducation,
  updateEducation,
  closeForm,
}) => {
  const [formData, setFormData] = useState({
    id: id,
    title: title,
    subtitle: subtitle,
    startDate: startDate,
    endDate: endDate,
    description: description,
  });

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
      addEducation(formData);
    } else if (method === "UPDATE") {
      updateEducation(formData);
    }
    closeForm();
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
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
              value={formData.title}
              onChange={titleHandler}
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
              value={formData.subtitle}
              onChange={subtitleHandler}
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
              value={formData.startDate}
              onChange={startDateHandler}
              width={"100%"}
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
            />
          </div>
          <div className={classes.input_5}>
            <InputField
              htmlFor={"description"}
              id={"description"}
              name={"description"}
              label={"Description"}
              type={"textarea"}
              value={formData.description}
              onChange={descriptionHandler}
              width={"100%"}
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

export default EducationForm;
