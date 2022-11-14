import React from 'react';
import { Link } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';

function ServiceproviderindividualEarnigsProjects () {

    return (
        <>
            <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-5 col-5 moblogo">
                                <a href="#"><img src="images/Logo.svg" alt="" /></a>

                            </div>
                            <div class="col-md-7 col-7">
                                <ul class="tophead-right">
                                    <li class="client-loginHead d-none d-sm-block">
                                        <a href="#">
                                            <img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>SERVICE PROVIDER </span>
                                        </a>
                                    </li>
                                    <li class="user-picHead">
                                        <a href="#">
                                            <span><img src="images/pro-userpic.jpg" alt="" /></span>
                                            <p>Hi, Vinod !</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/bell.png" alt="" />
                                            <span class="notification-numb">8</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar expand="lg" class="listed-bar">
                <div class="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#"><img src="images/status.svg" alt="" />BROWSE</Nav.Link>
                            <Nav.Link href="#"><img src="images/note.svg" alt="" />PROJECTS</Nav.Link>
                            <Nav.Link href="#"><img src="images/bold-cal.svg" alt="" />BOOKINGS</Nav.Link>
                            <Nav.Link href="#" className="active"><img src="images/dollar-squareblue.svg" alt="" />EARNINGS</Nav.Link>
                            <Nav.Link href="#"><img src="images/mgs.svg" alt="" />SUPPORT</Nav.Link>
                            <Nav.Link href="#"><img src="images/setting.svg" alt="" />ACCOUNT</Nav.Link>
                            <Nav.Link href="#" ><img src="images/archive.svg" alt="" />SAVED</Nav.Link>
                            <Nav.Link href="#"><img src="images/trend.svg" alt="" />REPORTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <section class=" pb-4 pb-sm-5">
                <div class="container">
                    <div class="row  mt-2">
                        <div class="col-md-7 mb-2 mb-sm-0">
                            <button class="uploadBtn  text-uppercase mr-3">PROJECTS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn text-uppercase "> SERVICES</button>

                            <h1 class="earning-projecthead">12th June, 2022 to 24th Jun, 2022 <span>$ 1900.00 earned this month</span> </h1>
                        </div>
                        <div class="col-md-5">
                            <div class="row">
                                <div class="col-md-6 col-6">
                                    <div class="select-box report-selctbox">
                                        <select className="form-control select-checkout">
                                            <option value="3">Start date</option>
                                            <option>Newest listing first</option>
                                            <option>Lowest budget</option>
                                            <option>Highest budget</option>
                                            <option>Oldest listing first</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6">
                                    <div class="select-box report-selctbox">
                                        <select className="form-control select-checkout">
                                            <option value="3">End date</option>
                                            <option>Newest listing first</option>
                                            <option>Lowest budget</option>
                                            <option>Highest budget</option>
                                            <option>Oldest listing first</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row mt-3">
                        <div cLASS="col-md-12">
                            <div className="service-list ">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-4">
                                        <div class="service-itemschedul-text">
                                            <h6>30</h6>
                                            <p>JUN</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-8 pl-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-8">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                                    <h6>Project title here</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-5">
                                        <div class="service-publicSec background-nonecolor">
                                            <div class="row">
                                                <div class="col-md-4 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0 col-3 my-2 my-sm-0">
                                                    <h4>Earned</h4>
                                                    <h5>$750.00</h5>
                                                </div>
                                                <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3  col-4  my-2 my-sm-0">
                                                    <h4>Credited</h4>
                                                    <h5>12th Jun 2022</h5>
                                                </div>
                                                <div class="col-md-5 text-right col-5 my-2 my-sm-0">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-4">
                                        <div class="service-itemschedul-text">
                                            <h6>24</h6>
                                            <p>JUN</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-8 pl-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-8">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="service-itemdraft service-itemhourly">Hourly</span></p>
                                                    <h6>Project title here</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-5">
                                        <div class="service-publicSec background-nonecolor">
                                            <div class="row">
                                                <div class="col-md-4 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0 col-3 my-2 my-sm-0">
                                                    <h4>Earned</h4>
                                                    <h5>$750.00</h5>
                                                </div>
                                                <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3 col-4 my-2 my-sm-0">
                                                    <h4>Credited</h4>
                                                    <h5>12th Jun 2022</h5>
                                                </div>
                                                <div class="col-md-5 text-right col-5 my-2 my-sm-0">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-4">
                                        <div class="service-itemschedul-text">
                                            <h6>24</h6>
                                            <p>JUN</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-8 pl-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-8">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="service-itemdraft service-itemhourly">Hourly</span></p>
                                                    <h6>Project title here</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-5">
                                        <div class="service-publicSec background-nonecolor">
                                            <div class="row">
                                                <div class="col-md-4 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0  col-3 my-2 my-sm-0">
                                                    <h4>Earned</h4>
                                                    <h5>$750.00</h5>
                                                </div>
                                                <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3  col-4 my-2 my-sm-0">
                                                    <h4>Credited</h4>
                                                    <h5>12th Jun 2022</h5>
                                                </div>
                                                <div class="col-md-5 text-right col-5 my-2 my-sm-0">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-4">
                                        <div class="service-itemschedul-text">
                                            <h6>30</h6>
                                            <p>JUN</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-8 pl-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-8">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                                    <h6>Project title here</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-5">
                                        <div class="service-publicSec background-nonecolor">
                                            <div class="row">
                                                <div class="col-md-4 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0  col-3 my-2 my-sm-0">
                                                    <h4>Earned</h4>
                                                    <h5>$750.00</h5>
                                                </div>
                                                <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3  col-4 my-2 my-sm-0">
                                                    <h4>Credited</h4>
                                                    <h5>12th Jun 2022</h5>
                                                </div>
                                                <div class="col-md-5 text-right col-5 my-2 my-sm-0">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-4">
                                        <div class="service-itemschedul-text">
                                            <h6>24</h6>
                                            <p>JUN</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-8 pl-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-8">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="service-itemdraft service-itemhourly">Hourly</span></p>
                                                    <h6>Project title here</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-5">
                                        <div class="service-publicSec background-nonecolor">
                                            <div class="row">
                                                <div class="col-md-4 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0 col-3 my-2 my-sm-0">
                                                    <h4>Earned</h4>
                                                    <h5>$750.00</h5>
                                                </div>
                                                <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3 col-4 my-2 my-sm-0">
                                                    <h4>Credited</h4>
                                                    <h5>12th Jun 2022</h5>
                                                </div>
                                                <div class="col-md-5 text-right col-5 my-2 my-sm-0">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <nav aria-label="...">
                                        <ul class="pagination pagination-lg">
                                            <li class="page-item active">
                                                <a href="#" class="page-link">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link newpage-link" href="#">.........</a></li>
                                            <li class="page-item"><a class="page-link" href="#">11</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


        </>
    );
}

export default ServiceproviderindividualEarnigsProjects;