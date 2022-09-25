import React, { useState } from "react";
import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";
import Typography from "../UI/Typography/Typography";
import classes from "./AchievementsForm.module.css";

const AchievementsForm = ({
  item,
  method,

  addAchievement,
  updateAchievement,
  closeForm,
}) => {
  const initState = item
    ? {
        id: item.id,
        title: item.title,
        startDate: item.startDate,
        description: item.description,
      }
    : {
        id: 1,
        title: "",
        startDate: "",
        description: "",
      };
  const [formData, setFormData] = useState(initState);

  const titleHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const startDateHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      startDate: event.target.value,
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
      addAchievement(formData);
    } else if (method === "UPDATE") {
      updateAchievement(formData);
    }
    closeForm();
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.form_content}>
          <div className={classes.title}>
            <Typography variant={"h2"}>Add new achievement</Typography>
          </div>
          <div className={classes.input_1}>
            <InputField
              htmlFor={"title"}
              id={"title"}
              name={"title"}
              label={"Title"}
              type={"text"}
              width={"100%"}
              value={formData.title}
              onChange={titleHandler}
              required={true}
            />
          </div>
          <div className={classes.input_2}>
            <InputField
              htmlFor={"date"}
              id={"date"}
              name={"date"}
              label={"Date"}
              type={"datetime-local"}
              value={formData.startDate}
              onChange={startDateHandler}
              required={true}
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
              required={true}
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

export default AchievementsForm;
