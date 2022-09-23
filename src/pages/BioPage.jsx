import React, { useState } from 'react'
import BioForm from '../components/Forms/BioForm/BioForm'

const BioPage = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            {/* Bio Form */}
            {!toggle && <BioForm setToggle={setToggle} />}
            {/* Bio Details */}
            {toggle && <>
                
            </>}
        </>
    )
}

export default BioPage