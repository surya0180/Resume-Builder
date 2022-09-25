import React from "react";
import classes from "./InputField.module.css";

const InputField = ({
  children,
  htmlFor,
  id,
  name,
  label,
  type,
  value,
  required,
  onChange,
  width = "",
}) => {
  return (
    <div className={classes.inputField}>
      <label htmlFor={htmlFor} id={id} className={classes.inputLabel}>
        {label}
      </label>
      {type !== "textarea" && (
        <input
          id={id}
          name={name}
          type={type}
          className={classes.inputBox}
          style={{ width }}
          onChange={onChange}
          required={required}
          value={value}
        />
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          name={name}
          rows={6}
          className={classes.inputBox}
          style={{ width }}
          onChange={onChange}
          required={required}
          value={value}
        ></textarea>
      )}
    </div>
  );
};

export default React.memo(InputField);
