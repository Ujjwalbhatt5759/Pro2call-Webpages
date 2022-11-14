import React from 'react';
import { Link } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';

function ClientreportsProjects () {

    return (
        <>
            <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-6 col-5 moblogo">
                                <a href="#"><img src="images/Logo.svg" alt="" /></a>
                                <button type="button" class="btn btn-login ml-4 d-none d-sm-inline-block">REGISTER AS A SERVICE PROVIDER</button>
                            </div>
                            <div class="col-md-6 col-7">
                                <ul class="tophead-right">
                                    <li class="client-loginHead d-none d-sm-block">
                                        <a href="#"><img src="images/pro-headimg.png" class="pro-headimg" alt="" />You are logged in as a <span>CLIENT</span>
                                        </a>
                                    </li>
                                    <li class="user-picHead">
                                        <a href="#">
                                            <span><img src="images/pro-userpic.jpg" alt="" /></span>
                                            <p>Hi, Vinod !</p>
                                        </a>
                                    </li>
                                    <li><a href="#">
                                        <img src="images/bell.png" alt="" /> <span class="notification-numb">8</span>
                                    </a></li>
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
                            <Nav.Link href="#"><img src="images/dollar.svg" alt="" />EXPENSE</Nav.Link>
                            <Nav.Link href="#"><img src="images/mgs.svg" alt="" />SUPPORT</Nav.Link>
                            <Nav.Link href="#"><img src="images/setting.svg" alt="" />ACCOUNT</Nav.Link>
                            <Nav.Link href="#" ><img src="images/archive.svg" alt="" />SAVED</Nav.Link>
                            <Nav.Link href="#" className="active"  ><img src="images/trend-up.svg" alt="" />REPORTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <section class="service-providerFullbg pb-4 pb-sm-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-7 mb-2 mb-sm-0">
                            <div class="client-profilehead">
                                <h1>analytics</h1>
                                <h2>12th june, 2022</h2>
                            </div>
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
                    <div class="border-bottom mt-2"></div>

                    <div class="row mt-3">
                         <div class="col-md-12">
                           
                            <button type="button" class="btn btn-outline-dark mayment-btn text-uppercase mr-3"> SERVICES</button>
                            <button class="uploadBtn  text-uppercase">PROJECTS</button>
                            
                         </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3 mb-3 mb-sm-0">
                            <div class="client-reportservicesbox">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>HIRED</h1>
                                        <p>Total projects in this month (till now)</p>
                                        <h2> <img src="images/report-calendar.svg" alt="" /> 16</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mb-3 mb-sm-0">
                            <div class="client-reportservicesbox client-reportservicesboxcompleted">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>COMPLETED</h1>
                                        <p>Total completed in this month (till now)</p>
                                        <h2> <img src="images/tick-squaregreen.svg" alt="" /> 10</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mb-3 mb-sm-0">
                            <div class="client-reportservicesbox client-reportservicesboxinprogress">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>IN PROGRESS</h1>
                                        <p>Total in progress in this month (till now)</p>
                                        <h2> <img src="images/mouse-circle.svg" alt="" /> 6</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 ">
                            <div class="client-reportservicesbox client-reportservicesboxcancelled">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>CANCELLED</h1>
                                        <p>Total cancelled this month (till now)</p>
                                        <h2> <img src="images/more-circle.svg" alt="" />2</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               {/* <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3> */}
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3  mt-3">
                            <div class="client-reportservicesbox client-reportservicesboxcompleted">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>EXPENSE</h1>
                                        <p>Total projects in this month (till now)</p>
                                        <h2> <img src="images/dollar-square.svg" alt="" />$8,970.00</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3  mt-3">
                            <div class="client-reportservicesbox client-reportservicesboxcancelled">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>PENDING PAYMENT</h1>
                                        <p>Pending payment for services</p>
                                        <h2> <img src="images/dollar-squarered.svg" alt="" />$1,900.00</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 mt-3">
                            <div class="client-reportservicesbox">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h1>SUCCESS RATIO</h1>
                                        <p>Total profile views vs hired</p>
                                        <h2> <img src="images/home-trend.svg" alt="" />82%</h2>

                                        <div class="row align-items-center mt-2">
                                            <div class="col-md-8 col-8">
                                               <h3><a href="#"><img src="images/referace.svg" alt="" />Click to view the list</a></h3>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
                                                <h4><a href="#">PROJECTS</a></h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>


        </>
    );
}

export default ClientreportsProjects;