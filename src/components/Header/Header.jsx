import React from 'react'
import Button from '../Button/Button'
import classes from './Header.module.css'
import logo from '../../assets/Icons/clipboardOutlined.svg'
import Typography from '../Typography/Typography'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <img src={logo} alt={"logo"} style={{margin: '0 0.5em 0 1em'}} /> 
        <Typography variant={"h1"}>Resume Builder</Typography>
      </div>
      <div className={classes.task}>
        <Button variant={'outlined'} color={'black'} key={"import-btn"}>
          <Typography variant={"h4"}>Import</Typography>
        </Button>
        <Button variant={'contained'} color={'red'} key={"export-btn"}>
          <Typography variant={"h4"}>Export</Typography>
        </Button>
      </div>
    </div>
  )
}

export default Header