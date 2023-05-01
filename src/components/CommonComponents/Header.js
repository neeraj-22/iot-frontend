import React, {Fragment} from 'react'

const Header = () => {
  return (

    // Navigation
    <Fragment>
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
            <div className="container">
                {/* LOGO */}
                <span className="navbar-brand" style={{fontFamily:"JetBrains Mono"}}>{`<NeerajGandhi/>`}</span>
                
                {/* Responsive Menu */}
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>

                {/* Nav-links */}
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#projects">PROJECTS</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#resume">RESUME</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#skills">SKILLS</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fragment>
  )
}

export default Header