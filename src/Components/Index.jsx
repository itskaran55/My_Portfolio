import React from 'react'
import CustomLayout from './Layout/CustomLayout'
import Home from './Home'
import EducationandExperience from './EducationandExperience'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'

const index = () => {
    return (
        <div>
            <CustomLayout>
                <Home/>        
                <EducationandExperience/>
                <Portfolio/>
                <Skills/>
                <Contact/>
            </CustomLayout>
        </div>
    )
}

export default index
