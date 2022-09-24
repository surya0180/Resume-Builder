import React from 'react'
import Header from '../components/Content/Header/Header'
import BioPage from './BioPage'
import InfoPage from './InfoPage'

const MainPage = () => {
  return (
    <>
        {/* Header */}
        <Header />
        {/* Bio */}
        <BioPage />
        {/* Info */}
        <InfoPage />
    </>
  )
}

export default MainPage