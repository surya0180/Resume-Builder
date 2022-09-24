import React, { useState } from 'react'
import Typography from '../../UI/Typography/Typography'
import classes from './Information.module.css'
import EduInfo from '../../../utils/education.json' 
import Accordian from '../../UI/Accordian/Accordian'
import Button from '../../UI/Button/Button'
import EducationForm from '../../Forms/EducationForm/EducationForm'

const EducationInfo = ({children, type}) => {
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className={classes.container}>
        <button className={classes.add_new_btn} onClick={() => {
          setOpenForm(open => !open)
        }}>
            <Typography variant={'h3'}>Add new</Typography>
        </button>
        {openForm && <EducationForm closeForm={setOpenForm} />}
        <div className={classes.info_cards}>
          {EduInfo.map((obj, idx) => 
            <Accordian 
              id={idx}
              key={idx}
              type={type}
              title={obj.institute}
              period={obj.startDate + "\t-\t" + obj.endDate}
            >
              <div className={classes.info_card_body}>
                <div className={classes.info_1}>
                  <div className={classes.info_1_label}>
                    <Typography variant={'h6'}>Degree</Typography>
                  </div>
                  <Typography variant={'h4'} color={'slowBlack'}>{obj.degree}</Typography>
                </div>
                <div className={classes.info_2}>
                  <div className={classes.info_2_label}>
                    <Typography variant={'h6'}>Description</Typography>
                  </div>
                  <Typography variant={'subtitle'}>{obj.description}</Typography>
                </div>
                <div className={classes.info_card_opts}>
                    <Button variant={'outlined'} color={'darkGrey'}>
                      <Typography variant={'h4'} color={'mediumBlack'}>Edit</Typography>
                    </Button>

                    <Button variant={'outlined'} color={'darkGrey'}>
                      <Typography variant={'h4'} color={'mediumBlack'}>Delete</Typography>
                    </Button>
                </div>
              </div>
            </Accordian>
          )}
        </div>
    </div>
  )
}

export default EducationInfo