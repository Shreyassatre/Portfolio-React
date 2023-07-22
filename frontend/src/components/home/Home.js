import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Qualification from '../qualification/Qualification';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Certifications from '../certifications/Certifications';
import Contact from '../contact/Contact';

const Home = () => {
  const handleRedirect = () => {
    window.location.href = '/login';
  };

  const [prfilPhto, setPrfilPhoto] = useState("Loding...")

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      // Make the API request to fetch the user's data
      const response = await axios.get('http://localhost:5000/auth/user'); // Replace with the actual backend route for getting user data
      // Update the component state with the user's data
      setPrfilPhoto(response.data.ProfileImg)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <><section class="home section" id="about">
      <div class="home__container container grid">
        <div class="home__content grid">
          <Social/>
          <div className="home__img__container" onClick={handleRedirect}>
            <div
              className="home__img"
              style={{
                backgroundImage: `url(${prfilPhto})`,
              }}
            ></div>
            <br />
            <div className="shadow">
              <center><hr /></center>
            </div>
          </div>
          <Data/>
        </div>
        <ScrollDown/>
      </div>
    </section>
    <Qualification/>
    <Skills/>
    <Projects/>
    <Certifications/>
    <Contact/></>
  )
}

export default Home