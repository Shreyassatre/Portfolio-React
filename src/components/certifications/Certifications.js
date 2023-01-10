import React, { useState } from 'react'
import './certifications.css'

const Certifications = () => {

    const[toggleTab,setToggle] = useState(0)

  return (
    <div className="certifications section" id='certifications'>
        <div className="section__title">Certifications</div>

        <div className="certifications__container container">
            <div className="certifications__sections">
                <br />
                <div className='certifications__content'>
                    <div className="certifications__data">
                        <img className='certifications__img' src="images/hadoop_spark-cert.png" alt="" />
                        <div className="certifications__info">
                            <div className="certifications__name">Big Data Hadoop and Spark Developer training</div>
                            <small>Issued: 9 Jan 2023 by SimpliLearn</small><br />
                            <small>Cert. ID: 4078570</small>
                            <div className="certifications__logo">
                                <img src="images/simplilearn-logo.png" alt="" />
                            </div>
                            {/* <div className="certifications__buttons">
                                <a href="https://learn.365datascience.com/certificates/CC-EF6D5D9C2C/" target='_blank' className="demo__button">Verify</a>
                            </div> */}
                        </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/ml_with_python-cert.png" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">Machine Learning in Python</div>
                                <small>Issued: 18 Nov 2022 by 365 Data Science</small><br />
                                <small>Cert. ID: CC-EF6D5D9C2C</small>
                                <div className="certifications__logo">
                                    <img src="images/365datascience-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://learn.365datascience.com/certificates/CC-EF6D5D9C2C/" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/power_bi-cert.png" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">Power BI</div>
                                <small>Issued: 15 Nov 2022 by 365 Data Science</small><br />
                                <small>Cert. ID: CC-2D5B33622E</small>
                                <div className="certifications__logo">
                                    <img src="images/365datascience-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://learn.365datascience.com/certificates/CC-EF6D5D9C2C/" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/react_basic-cert.png" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">React(Basic)</div>
                                <small>Issued: 4 Nov 2022 by HackerRank</small><br />
                                <small>Cert. ID: CC-2D5B33622E</small>
                                <div className="certifications__logo">
                                    <img src="images/hackerrank-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://www.hackerrank.com/certificates/700b6fad776f" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>

                    <div className="certifications__data">
                        <center>
                            <img className='certifications__img' src="images/nvidia-cert1.png" alt="" />
                        </center>
                        <div className="certifications__info">
                            <div className="certifications__name">Applications of AI for Anomaly Detection</div>
                            <small>Issued: 17 Sep 2022 by nVIDIA</small><br />
                            <small>Cert. ID: CC-2D5B33622E</small>
                            <div className="certifications__logo">
                                <img src="images/nvidia-logo.png" alt="" />
                            </div>
                            <div className="certifications__buttons">
                                <a href="https://courses.nvidia.com/certificates/aed7658a912544acbc634275f7b4953a/" target='_blank' className="demo__button">Verify</a>
                            </div>
                        </div>

                    </div>

                    <div className="certifications__data">
                        <center>
                            <img className='certifications__img' src="images/nvidia-cert2.png" alt="" />
                        </center>
                        <div className="certifications__info">
                            <div className="certifications__name">Fundamentals of Deep Learning</div>
                            <small>Issued: 29 Jan 2022 by nVIDIA</small><br />
                            <small>Cert. ID: 846865c78a1b49a0809203b9846f6f81</small>
                            <div className="certifications__logo">
                                <img src="images/nvidia-logo.png" alt="" />
                            </div>
                            <div className="certifications__buttons">
                                <a href="https://courses.nvidia.com/certificates/846865c78a1b49a0809203b9846f6f81/" target='_blank' className="demo__button">Verify</a>
                            </div>
                        </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/python-cert1.png" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">Programming for Everybody (Getting Started with Python)</div>
                                <small>Issued: 4 May 2020 by coursera(Michigan University)</small><br />
                                <small>Cert. ID: 7CGJ8ZXJDMTC</small>
                                <div className="certifications__logo">
                                    <img src="images/coursera-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://www.coursera.org/account/accomplishments/verify/7CGJ8ZXJDMTC" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/python-cert2.png" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">Python Data Structures</div>
                                <br />
                                <small>Issued: 5 May 2020 by coursera(Michigan University)</small><br />
                                <small>Cert. ID: H9FXND7YKPMU</small>
                                <div className="certifications__logo">
                                    <img src="images/coursera-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://www.coursera.org/account/accomplishments/verify/H9FXND7YKPMU" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/CN_nptel-cert.png" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">Computer Networks</div>
                                <small>Issued: 1 May 2020 by NPTEL(TCS-ION)</small><br />
                                <small>Cert. ID: 72497-6892585-1016</small>
                                <div className="certifications__logo">
                                    <img src="images/tcs_ion-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://learning.tcsionhub.in/LX/ecertificate/verification" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>

                    <div className="certifications__data">
                        <img className='certifications__img' src="images/goggle_digital_marketing-cert-png.jpg" alt="" />
                            <div className="certifications__info">
                                <div className="certifications__name">Fundamntals of Digital Marketing</div>
                                <small>Issued: 11 May 2020 by Google</small><br />
                                <small>Cert. ID: FDS MC2V3Y</small>
                                <div className="certifications__logo">
                                    <img src="images/google-logo.png" alt="" />
                                </div>
                                <div className="certifications__buttons">
                                    <a href="https://learndigital.withgoogle.com/digitalunlocked/sign-in?destination_url=%2Fcourse%2Fdigital-marketing%2Fcertification%2Fpost-assessment" target='_blank' className="demo__button">Verify</a>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certifications