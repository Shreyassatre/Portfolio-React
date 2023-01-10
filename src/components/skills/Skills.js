import React, { useState } from 'react'
import './skills.css'

const Skills = () => {

    const[toggleTab,setToggle] = useState(0)

  return (
    <section className="skills section" id="skills">
        <div className="section__title">Skills</div>
        <span className="My personal journey"></span>

        <div className="skills__container container">
            <center>
                <div className="skills_tabs">
                    <div className={toggleTab===0?"skills__button active__tab button--flex":"skills__button button--flex"} onClick={()=>setToggle(0)}>
                        All
                    </div>
                    <div className={toggleTab===1?"skills__button active__tab button--flex":"skills__button button--flex"} onClick={()=>setToggle(1)}>
                        Web
                    </div>
                    <div className={toggleTab===2?"skills__button active__tab button--flex":"skills__button button--flex"} onClick={()=>setToggle(2)}>
                        Big Data
                    </div>
                    <div className={toggleTab===3?"skills__button active__tab button--flex":"skills__button button--flex"} onClick={()=>setToggle(3)}>
                        Cloud
                    </div>
                    <div className={toggleTab===4?"skills__button active__tab button--flex":"skills__button button--flex"} onClick={()=>setToggle(4)}>
                        Analystics
                    </div>
                </div>
            </center>

            <div className="skills__sections">
                <h5 className={toggleTab===0?"div__title":"div__title-inactive"}>Web Development :</h5>
                <div className={toggleTab===0 || toggleTab===1 ? 'skills__content container skills__content-active':'skills__content container'}>
                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/html-logo.png" alt="" />
                        </div>
                        <center>
                            <small>HTML</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/css-logo.png" alt="" />
                        </div>
                        <center>
                            <small>CSS</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/React-icon.png" alt="" />
                        </div>
                        <center>
                            <small>React JS</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/node-js.png" alt="" />
                        </div>
                        <center>
                            <small>Node JS</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/express-logo.png" alt="" />
                        </div>
                        <center>
                            <small>Express JS</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/bootstrap-logo.png" alt="" />
                        </div>
                        <center>
                            <small>BootStrap</small>
                        </center>
                    </div>
                </div>

                <hr className={toggleTab===0?"":"div__line"} />

                <h5 className={toggleTab===0?"div__title":"div__title-inactive"}>Big Data :</h5>
                <div className={toggleTab===0 || toggleTab===2 ? 'skills__content container skills__content-active':'skills__content container'}>
                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/hadoop-logo.png" alt="" />
                        </div>
                        <center>
                            <small>Hadoop</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/hive-logo.svg" alt="" />
                        </div>
                        <center>
                            <small>Hive</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/spark-logo.png" alt="" />
                        </div>
                        <center>
                            <small>Spark</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/spark-sql.png" alt="" />
                        </div>
                        <center>
                            <small>Spark SQL</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/spark-streaming.png" alt="" />
                        </div>
                        <center>
                            <small>Spark Streaming</small>
                        </center>
                    </div>

                </div>

                <hr className={toggleTab===0?"":"div__line"} />

                <h5 className={toggleTab===0?"div__title":"div__title-inactive"}>Cloud :</h5>
                <div className={toggleTab===0 || toggleTab===3 ? 'skills__content container skills__content-active':'skills__content container'}>
                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/s3-logo.png" alt="" />
                        </div>
                        <center>
                            <small>AWS S3</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/ec2-logo.svg" alt="" />
                        </div>
                        <center>
                            <small>AWS EC2</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/redshift-logo.png" alt="" />
                        </div>
                        <center>
                            <small>AWS Redshift</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/lambda-logo.svg" alt="" />
                        </div>
                        <center>
                            <small>AWS Lambda</small>
                        </center>
                    </div>

                </div>

                <hr className={toggleTab===0?"":"div__line"} />

                <h5 className={toggleTab===0?"div__title":"div__title-inactive"}>Visualization :</h5>
                <div className={toggleTab===0 || toggleTab===4 ? 'skills__content container skills__content-active':'skills__content container'}>
                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/tableau-logo.png" alt="" />
                        </div>
                        <center>
                            <small>Tableau</small>
                        </center>
                    </div>

                    <div className="skills__data">
                        <div className="skills__logo">
                            <img className='skills__img' src="images/power-bi.png" alt="" />
                        </div>
                        <center>
                            <small>Power BI</small>
                        </center>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills