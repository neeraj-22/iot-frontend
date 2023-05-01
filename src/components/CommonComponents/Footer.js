import React, {Fragment} from 'react'

const Footer = () => {
  return (
    <Fragment>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    {/* Location */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Pune, India
                        </p>
                    </div>
                    
                    {/* Socials */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" rel="noopener noreferrer" href="mailto:gandhineeraj48@gmail.com"><i className="fab fa-solid fa-envelope"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/neeraj-gandhi-53487a193/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" rel="noopener noreferrer" href="https://github.com/neeraj-22"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target="_blank" rel="noopener noreferrer" href="https://twitter.com/neerajgandhi04"><i className="fab fa-fw fa-twitter"></i></a>
                    </div>

                    {/* More Section */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Want to know more?</h4>
                        <p className="lead mb-0">
                            Let's Connect!
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        </Fragment>
  )
}

export default Footer