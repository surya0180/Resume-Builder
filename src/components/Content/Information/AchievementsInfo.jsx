import React, { useState } from "react";
import Typography from "../../UI/Typography/Typography";
import classes from "./Information.module.css";
import AchvInfo from "../../../utils/achievements.json";
import Accordian from "../../UI/Accordian/Accordian";
import Button from "../../UI/Button/Button";
import AchievementsForm from "../../Forms/AchievementsForm/AchievementsForm";

const AchievementsInfo = ({ children, type }) => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className={classes.container}>
      <button
        className={classes.add_new_btn}
        onClick={() => {
          setOpenForm((open) => !open);
        }}
      >
        <Typography variant={"h3"}>Add new</Typography>
      </button>
      {openForm && <AchievementsForm closeForm={setOpenForm} />}
      <div className={classes.info_cards}>
        {AchvInfo.map((obj, idx) => (
          <Accordian
            id={idx}
            key={idx}
            type={type}
            title={obj.title}
            period={obj.date}
          >
            <div className={classes.info_card_body}>
              <div className={classes.info_2}>
                <div className={classes.info_2_label}>
                  <Typography variant={"h6"}>Description</Typography>
                </div>
                <Typography variant={"subtitle"}>{obj.description}</Typography>
              </div>
              <div className={classes.info_card_opts}>
                <Button variant={"outlined"} color={"darkGrey"}>
                  <Typography variant={"h4"} color={"mediumBlack"}>
                    Edit
                  </Typography>
                </Button>

                <Button variant={"outlined"} color={"darkGrey"}>
                  <Typography variant={"h4"} color={"mediumBlack"}>
                    Delete
                  </Typography>
                </Button>
              </div>
            </div>
          </Accordian>
        ))}
      </div>
    </div>
  );
};

export default AchievementsInfo;
