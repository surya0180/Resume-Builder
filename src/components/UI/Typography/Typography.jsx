import React from 'react'
import classes from './Typography.module.css'

const Typography = ({children, variant}) => {
  return (
    <>
        {variant === 'h1' && <h1 className={classes[`${variant}`]}>{children}</h1>}
        {variant === 'h2' && <h2 className={classes[`${variant}`]}>{children}</h2>}
        {variant === 'h3' && <h3 className={classes[`${variant}`]}>{children}</h3>}
        {variant === 'h4' && <h4 className={classes[`${variant}`]}>{children}</h4>}
        {variant === 'h5' && <h5 className={classes[`${variant}`]}>{children}</h5>}
        {variant === 'h6' && <h6 className={classes[`${variant}`]}>{children}</h6>}
        {variant === 'subtitle' && <p className={classes[`${variant}`]}>{children}</p>}
    </>
  )
}

export default Typography