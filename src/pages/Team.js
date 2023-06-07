import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import OneImg from '../1.png'
import TwoImg from '../2.png'
import ThreeImg from '../3.png'

const Team = () => {
    return (
        <Fragment>
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        <ul>
                            <Link to={"/"}><li style={{ listStyle: "none", fontWeight: "bold" }}>SMARTFIELDS : REVOLUTIONIZING AGRICULTURE WITH IOT-BASED MONITORING AND AUTO-IRRIGATION</li></Link>
                        </ul>


                        {/* <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown no-arrow mx-1">
                            <Link to={"https://imdpune.gov.in/"} target={"_blank"}>
                                    IMD Bulletin
                                </Link>

                            </li>

                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={"/team"}>
                                    Team
                                </Link>

                            </li>

                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={"https://ijrar.org/viewfull.php?&p_id=IJRAR23B2783"} target={"_blank"}>
                                Research Paper
                                </Link>

                            </li>
                            <div className="topbar-divider d-none d-sm-block"></div>


                            {/* <!-- Nav Item - User Information --> */}
                            <li className="nav-item dropdown no-arrow">
                                <Link to={"/dashboard"}>
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Dashboard</span>
                                </Link>
                            </li>

                        </ul>

                    </nav>
                </div>
            </div>
            <div class="container text-center mt-5 mb-2">
                <h1 class="mb-0">Meet our Team</h1><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span></div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-4 mt-5">
                        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src={OneImg} width="90" />
                            <h5 class="mt-3 name">Neeraj Gandhi</h5><span class="work d-block">Web Client Interface development</span>
                            
                        </div>
                    </div>
                    <div class="col-md-4 mt-5">
                        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src={TwoImg} width="90" />
                            <h5 class="mt-3 name">Kunal Das</h5><span class="work d-block">IOT Development</span>
                            
                        </div>
                    </div>
                    <div class="col-md-4 mt-5">
                        <div class="bg-white p-3 text-center rounded box"><img class="img-responsive rounded-circle" src={ThreeImg} width="90" />
                            <h5 class="mt-3 name">Divyansh Agarwal</h5><span class="work d-block">Network Engineer</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team