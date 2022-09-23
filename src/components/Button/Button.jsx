import React from 'react'
// import classes from './Button.module.css'

const Button = ({children, variant, color = 'black'}) => {
  return (
    <button style={{
        padding: '0.6em 1em',
        border: `1.4px solid var(--${color})`,
        borderRadius: '0.4em',
        margin: '0 0.8em',
        backgroundColor: variant === 'contained' ? `var(--${color})` : 'white',
        color: variant === 'outlined' ? `var(--${color})` : 'white'
    }}>{children}</button>
  )
}

export default Button