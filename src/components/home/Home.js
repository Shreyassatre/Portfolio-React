import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section class="home section" id="about">
      <div class="home__container container grid">
        <div class="home__content grid">
          <Social/>
          <div className="home__img__container">
            <div className="home__img"></div>
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
  )
}

export default Home