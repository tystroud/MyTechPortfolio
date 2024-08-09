import React from 'react'
import Resume from '../resumefile/Tyeisha Stroud Resume.pdf'

const DownloadResume = () => {
  return (
    <a href= {Resume} download="Tyeisha Stroud Resume">
      <p className="resume">Download Resume</p>
    </a>
  )
}

export default DownloadResume