import React from 'react'
import classes from './Button.module.css'

const Button = ({children, variant, onClick, color = 'black', type='button'}) => {
  return (
    <button style={{
        border: `1.4px solid var(--${color})`,
        backgroundColor: variant === 'contained' ? `var(--${color})` : 'white',
        color: variant === 'contained' ? 'white': `var(--${color})`,
    }} className={classes.button} type={type} onClick={onClick}>{children}</button>
  )
}

export default Button