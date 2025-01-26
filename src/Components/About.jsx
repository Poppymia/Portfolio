import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("2000-02-13");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }

    return age_now;
  }
  
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      
      <div className="words">
        Hi there, I'm Maria Pop
        I'm proficient in 
      </div>
    </div>
  )
}

export default About;
