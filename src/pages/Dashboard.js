import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Dashboard.css";
import axios from 'axios';

import tempChart from '../pune-april temp.png'

const Dashboard = () => {

    const [temperatureData, setTemperatureData] = useState(null);

    const toggleBtnFunction = () => {
        const toggleBtn = document.querySelector(".toggle");
        toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("active"));
    }

    const getData = async () => {
        let res = await axios.get('https://api.weatherapi.com/v1/current.json?key=8f8d793980104cd48d4134631230105&q=Pune&aqi=no')

        setTemperatureData(res.data.current);
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <Fragment>

            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        <ul>
                            <Link to={"/"}><li style={{ listStyle: "none", fontWeight:"bold" }}>IOT Based Agricultural Monitoring System</li></Link>
                        </ul>


                        {/* <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={"/"}>
                                    Homepage
                                </Link>

                            </li>

                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={"/team"}>
                                    Team
                                </Link>

                            </li>

                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={"/"}>
                                    About
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
            <div id="wrapper">


                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Temperature</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{temperatureData ? temperatureData.temp_c : 30} °C</div>
                                        </div>
                                        <div className="col-auto">
                                            {/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
                                            <i className="fas fa-temperature-high fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Rain</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">1700</div>
                                        </div>
                                        <div className="col-auto">
                                            {/* <i className="fas fa-dollar-sign fa-2x text-gray-300"></i> */}
                                            <i className="fas fa-thermometer fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Humidity
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{temperatureData ? temperatureData.humidity : 30} %</div>

                                            {/* <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                            
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                        style={{width : "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div> */}
                                        </div>
                                        <div className="col-auto">
                                            {/* <i className="fas fa-humidity fa-2x text-gray-300"></i> */}
                                            <i className="fas fa-tint fa-2x text-gray-300"></i>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pending Requests Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Moisture</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">1813</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-cloud fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Content Row --> */}

                    <div className="row">

                        {/* <!-- Area Chart --> */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Previous 30 days Humidity</h6>

                                </div>
                                {/* <!-- Card Body --> */}
                                <img src={tempChart}/>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-2">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Today's Weather</h6>

                                </div>
                                <div className="card-body">
                                    <div >
                                        <h1>{temperatureData ? temperatureData.temp_c : 30} °C</h1>
                                        <h5>Pune, Maharashtra</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Motor Switches</h6>

                                </div>
                                <div className="card-body">
                                    <div className="switch-wrapper">
                                        <div className="label-container">
                                            <span>IOT Sensor 1</span>
                                            <div className="toggle" onClick={toggleBtnFunction}></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard