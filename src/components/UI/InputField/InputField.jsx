import React from 'react'
import classes from './InputField.module.css'

const InputField = ({children, htmlFor, id, name, label, type, width=''}) => {
  return (
    <div className={classes.input_field}>
        <label htmlFor={htmlFor} id={id} className={classes.input_label}>{label}</label>
        {type !== 'textarea' && <input id={id} name={name} type={type} className={classes.input_box} style={{width}}/>}
        {type === 'textarea' && <textarea id={id} name={name} rows={6} className={classes.input_box} style={{width}}></textarea>}
    </div>
  )
}

export default InputField