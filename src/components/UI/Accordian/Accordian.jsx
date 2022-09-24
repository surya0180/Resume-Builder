import React, { useState } from 'react'
import Button from '../Button/Button'
import classes from './Accordian.module.css'
import arrowopen from '../../../assets/Icons/CaretDownFilled.svg'
import arrowclose from '../../../assets/Icons/caretRightFilled.svg'
import Typography from '../Typography/Typography'

const Accordian = ({children, type, id, title, period}) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className={classes.accordian} key={id}>
      <button className={classes.accordian_btn} onClick={() => {
        setToggle(prevState => !prevState)
      }}>
        <div className={classes.accordian_arrow}>
          {toggle && <img src={arrowopen} alt={"arrowopen"} className={classes.accordian_arrow_open}/>}
          {!toggle && <img src={arrowclose} alt={"arrowclose"} className={classes.accordian_arrow_close}/>}
        </div>
        <div className={classes.accordian_btn_content}>
          <Typography variant={'h3'}>{title}</Typography>
          <div className={classes.accordian_period}>
              <Typography variant={'subtitle'}>{period}</Typography>
          </div>
        </div>
      </button>
      <div className={classes.accordian_content}>
        {toggle && children}
      </div>
    </div>
  )
}

export default Accordian