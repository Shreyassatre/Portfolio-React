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
                                <small>
                                    - A Covid-19 app tracks & shows the daily statistics about covid-19 cases according to countries & Latest updates. <br />
                                    - Checks the health condition (Symptoms of Covid-19, mantal and physical health) of user with help of quiz. <br />
                                    - Also created payment gateway to make donations & Admin panel.</small><br /><br />
                                <div className="projects__buttons">
                                    <a href="https://github.com/Shreyassatre/MERN-Covid19-webapp" className="demo__button1">GitHub</a>
                                    <a href="https://covid-19-tracker-fe157.web.app/" className="demo__button2">Live Demo</a>
                                </div>
                            </div>

                    </div>

                    <div className="projects__data">
                        <img className='projects__img' src="images/form-validation-project.png" alt="" />
                            <div className="projects__info">
                                <div className="projects__name">Gmail Form Validation</div>
                                <small>
                                    - Tired to mimic the behaviour of Gmail's registration & login form validation using JS regular expressions. <br />
                                    - Used HTML,CSS and BootStrap to create UI of login form and home page of google. <br />
                                    - Used SweetAlert API & Font-Awesome Icons.</small><br /><br />
                                <div className="projects__buttons">
                                    <a href="https://github.com/Shreyassatre/Gmail-Form-Validation-Demo" className="demo__button1">GitHub</a>
                                    <a href="https://shreyassatre.github.io/Gmail-Form-Validation-Demo/" className="demo__button2">Live Demo</a>
                                </div>
                            </div>

                    </div>

                    <div className="projects__data">
                        <img className='projects__img' src="images/internship-project.png" alt="" />
                            <div className="projects__info">
                                <div className="projects__name">Chat Bot</div>
                                <small>
                                    - Created a responsive chat bot for company to clearify doubts of newly admitted interns. <br />
                                    - Used speech API in JS to convert text to speech. <br />
                                    - Dveloped a responsive web UI using BootStrap.</small><br /><br />
                                <div className="projects__buttons">
                                    <a href="https://github.com/Shreyassatre/chat-bot" className="demo__button1">GitHub</a>
                                    <a href="https://shreyassatre.github.io/chat-bot/" className="demo__button2">Live Demo</a>
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
                            <small>
                                - Analyzed Facebook's user data (99,004 records) using Hive. <br />
                                - Understood the concept of how HiveQL queries coverted & runs as MapReduce. <br />
                                - Learned to work on Hortonworks distribution</small><br /><br />
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
                            <small>
                                - Explored/Analyzed Titanic Dataset. <br />
                                - Used libraries like numpy, pandas, matplotlib, seaborn. <br />
                                - Cleaned Data using various methods.
                            </small><br /><br />
                            <div className="projects__buttons">
                                <a href="https://github.com/Shreyassatre/Statistics_for_AI-DS/blob/main/Exploratory_data_Analysis(Titanic_dataset).ipynb" className="demo__button1">GitHub</a>
                                <a href="https://colab.research.google.com/drive/10BfIsmWc589Jwc04IPzoSTfpaAVR7MLJ" className="demo__button2">Live Demo</a>
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