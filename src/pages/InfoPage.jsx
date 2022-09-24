import React, { useState } from 'react'
import AchievementsInfo from '../components/Content/Information/AchievementsInfo'
import EducationInfo from '../components/Content/Information/EducationInfo'
import WorkExperiencesInfo from '../components/Content/Information/WorkExperiencesInfo'
import NavBar from '../components/Content/NavBar/NavBar'
import InfoTypes from '../utils/InfoTypes.json'

const InfoPage = () => {
  const [infoType, setInfoType] = useState(InfoTypes[0].name)
  return (
    <>
      <NavBar InfoTypes={InfoTypes} currentInfoType={infoType} setInfoType={setInfoType}/>
      {infoType === 'Education' && <EducationInfo />}
      {infoType === 'Work Experience' && <WorkExperiencesInfo />}
      {infoType === 'Achievements' && <AchievementsInfo />}
    </>
  )
}

export default InfoPage