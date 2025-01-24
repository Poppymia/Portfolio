import React, { useState, useRef } from 'react'

import '../styles/Home.css'

//imported libraries from react or node
import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
import { saveAs } from "file-saver"; //file saver is a library that allows you to download files to the users devices by calling the saveAs function :D 
import { Link } from 'react-scroll';

const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Tap again', 'Helllo', 'You found this', 'I added this...', 'because it seemed cool', `so here's something`, 'did you know that...', `You can't breathe and talk.`, 'the earth is 71% water.', `It snows in the Sahara Desert
`,]
  const textContent = useRef();
  const handleDownload = () => {
    saveAs(
      `${process.env.PUBLIC_URL}/Resume.pdf`, //helps generate the correct path
      "MariaPop_Resume.pdf"
    )
  }

  const handleChange = () => {
    textContent.current.style.display = 'inline-block';
    textContent.current.innerText = arrayOfWords[number]
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1)
    }
    if ((arrayOfWords.length - 1) === number) {
      // something will be here soon
      setTimeout(() => {
        textContent.current.style.display = 'none'
        animateScroll.scrollTo(350)
        setNumber(1)
      }, 1000);
    }
  }

  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            Hi, I'm Maria!
          </span>
          <span>
            <span onClick={handleChange}>
              👋🏾
            </span>
            <span ref={textContent} style={{ display: 'none' }}>
              Tap again
            </span>
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'Web Developer',
            "Don't Forget to Scroll"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">
          <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
            Hire Me
          </Link>

          <div onClick={handleDownload} className='btn2'>View Resume</div>
        </div>
      </div>

    </div >
  )
}

export default Home;
