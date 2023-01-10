import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header" id="header">
            <nav className="nav container">
                <a href="#about" className="nav__logo">S#re@s</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className='uil uil-user nav__icon'></i>
                                <span className="nav__name">About</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className='uil uil-graduation-cap nav__icon'></i>
                                <span className="nav__name">Qualification</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className='uil uil-book-alt nav__icon'></i>
                                <span className="nav__name">Skills</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className='uil uil-laptop nav__icon'></i>
                                <span className="nav__name">Projects</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#certifications" className="nav__link">
                                <i className='uil uil-award nav__icon'></i>
                                <span className="nav__name">Certifications</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contactme" className="nav__link">
                                <i className='uil uil-message nav__icon'></i>
                                <span className="nav__name">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <img src="profile_logo.jpg" alt="" className="nav__img"/>
            </nav>
        </header>
  )
}

export default Header