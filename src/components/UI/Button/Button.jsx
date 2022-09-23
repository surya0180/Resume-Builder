import React from 'react'
import classes from './Button.module.css'

const Button = ({children, variant, color = 'black'}) => {
  return (
    <button style={{
        border: `1.4px solid var(--${color})`,
        backgroundColor: variant === 'contained' ? `var(--${color})` : 'white',
        color: variant === 'outlined' ? `var(--${color})` : 'white'
    }} className={classes.button}>{children}</button>
  )
}

export default Button