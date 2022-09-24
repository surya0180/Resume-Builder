import React from 'react'
import classes from './Typography.module.css'

const Typography = ({children, variant, color=""}) => {
  return (
    <>
        {variant === 'h1' && <h1 className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</h1>}
        {variant === 'h2' && <h2 className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</h2>}
        {variant === 'h3' && <h3 className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</h3>}
        {variant === 'h4' && <h4 className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</h4>}
        {variant === 'h5' && <h5 className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</h5>}
        {variant === 'h6' && <h6 className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</h6>}
        {variant === 'subtitle' && <p className={classes[`${variant}`]} style={{color: `var(--${color})`}}>{children}</p>}
    </>
  )
}

export default Typography