import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/Icons/clipboardOutlined.svg";
import Typography from "../UI/Typography/Typography";
import { loadJSONFile } from "../../utils/import.util";
import { exportResume } from "../../utils/export.util";

const Header = ({
  bio,
  education,
  workExperiences,
  achievements,

  importBio,
  importEducation,
  importWorkExperiences,
  importAchievements,
}) => {
  const [file, setFile] = useState("");

  const parseJSONFile = (event) => {
    let json = JSON.parse(event.target.result);
    loadJSONFile(
      json,
      importBio,
      importEducation,
      importWorkExperiences,
      importAchievements
    );
    return json;
  };

  const importHandler = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = parseJSONFile;
      reader.readAsText(event.target.files[0]);
    }
    setFile("");
  };

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <img src={logo} alt={"logo"} style={{ margin: "0 0.5em 0 1em" }} />
        <Typography variant={"h1"}>Resume Builder</Typography>
      </div>
      <div className={classes.task}>
        <label htmlFor={"json-upload"} className={classes.import_label}>
          <Typography variant={"h4"}>Import</Typography>
        </label>
        <input
          id="json-upload"
          type="file"
          accept=".json"
          value={file}
          onChange={importHandler}
          className={classes.file_input_box}
        />
        <a
          id="exportResume"
          href="d"
          className={classes.export_label}
          onClick={(event) => {
            exportResume({ bio, education, workExperiences, achievements });
          }}
          download={"resume.json"}
        >
          <Typography variant={"h4"}>Export</Typography>
        </a>
      </div>
    </div>
  );
};

export default Header;
