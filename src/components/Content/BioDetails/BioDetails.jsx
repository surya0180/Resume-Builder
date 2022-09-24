import React from 'react'
import classes from './BioDetails.module.css'
import avatar from '../../../assets/Icons/Challen.png'
import Typography from '../../UI/Typography/Typography'
import Button from '../../UI/Button/Button'

const BioDetails = ({setToggle}) => {
  return (
    <div className={classes.bio_details}>
        <div className={classes.avatar}>
              <img src={avatar} alt={"upload"} className={classes.avatar_img}/>
        </div>
        <div className={classes.details}>
            <div className={classes.name}>
                <Typography variant={"h2"}>Edward Nashton</Typography>
            </div>
            <div className={classes.email}>
                <Typography variant={"h4"} color={"mediumBlack"}>enigma@yopmail.com</Typography>
            </div>
            <div className={classes.short_bio}>
                <Typography variant={"subtitle"}>
                Lorem ipsum dolor , gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi, mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </div>
            <Button variant={'outlined'} color={'darkGrey'} onClick={() => {setToggle(false)}}>
                <Typography variant={'h4'} color={'mediumBlack'}>Edit</Typography>
            </Button>
        </div>
    </div>
  )
}

export default BioDetails