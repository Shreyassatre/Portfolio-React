import React, { useState } from 'react'
import './projects.css'

const Projects = () => {

    const[toggleTab,setToggle] = useState(0)

  return (
    <div className="projects section" id='projects'>
        <div className="section__title">Projects</div>

        <div className="projects__container container">
            <div className="projects__tabs">
                <div className={toggleTab===0?"projects__button active__tab button--flex":"projects__button button--flex"} onClick={()=>setToggle(0)}>All</div>
                <div className={toggleTab===1?"projects__button active__tab button--flex":"projects__button button--flex"} onClick={()=>setToggle(1)}>Web</div>
                <div className={toggleTab===2?"projects__button active__tab button--flex":"projects__button button--flex"} onClick={()=>setToggle(2)}>Big Data</div>
                <div className={toggleTab===3?"projects__button active__tab button--flex":"projects__button button--flex"} onClick={()=>setToggle(3)}>Analytics</div>
            </div>

            <div className="projects__sections">
                <h4 className={toggleTab===0?"div__title":"div__title-inactive"}>Web Development :</h4>
                <br />
                <div className={toggleTab===0 || toggleTab===1?"projects__content-active":'projects__content'}>
                    <div className="projects__data">
                        <img className='projects__img' src="images/covid-19-project.png" alt="" />
                            <div className="projects__info">
                                <div className="projects__name">Covid-19 App</div>
                                <small>Small Discrption about project that will make understand project complytly</small><br /><br />
                                <div className="projects__buttons">
                                    <a href="" className="demo__button1">GitHub</a>
                                    <a href="" className="demo__button2">Live Demo</a>
                                </div>
                            </div>

                    </div>

                    <div className="projects__data">
                        <img className='projects__img' src="images/form-validation-project.png" alt="" />
                            <div className="projects__info">
                                <div className="projects__name">Gmail Form Validation</div>
                                <small>Small Discrption about project that will make understand project complytly</small><br /><br />
                                <div className="projects__buttons">
                                    <a href="" className="demo__button1">GitHub</a>
                                    <a href="" className="demo__button2">Live Demo</a>
                                </div>
                            </div>

                    </div>

                    <div className="projects__data">
                        <img className='projects__img' src="images/internship-project.png" alt="" />
                            <div className="projects__info">
                                <div className="projects__name">Chat Bot</div>
                                <small>Small Discrption about project that will make understand project complytly</small><br /><br />
                                <div className="projects__buttons">
                                    <a href="" className="demo__button1">GitHub</a>
                                    <a href="" className="demo__button2">Live Demo</a>
                                </div>
                            </div>

                    </div>
                </div>

                <h4 className={toggleTab===0?"div__title":"div__title-inactive"}>Big Data :</h4>
                <br />
                <div className={toggleTab===0 || toggleTab===2?"projects__content-active":'projects__content'}>
                    <div className="projects__data">
                        <img className='projects__img' src="images/facebook-analysis-project.png" alt="" />
                        <div className="projects__info">
                            <div className="projects__name">Facebook Data Analysis using Hive</div>
                            <small>Small Discrption about project that will make understand project complytly</small><br /><br />
                        </div>
                    </div>
                </div>
 
                <h4 className={toggleTab===0?"div__title":"div__title-inactive"}>Big Data :</h4>
                <br />
                <div className={toggleTab===0 || toggleTab===3?"projects__content-active":'projects__content'}>
                    <div className="projects__data">
                        <img className='projects__img' src="images/titanic-analysis-project.png" alt="" />
                        <div className="projects__info">
                            <div className="projects__name">Exploratory Data Analysis on Titanic Dataset</div>
                            <small>Small Discrption about project that will make understand project complytly</small><br /><br />
                            <div className="projects__buttons">
                                <a href="" className="demo__button1">GitHub</a>
                                <a href="" className="demo__button2">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects