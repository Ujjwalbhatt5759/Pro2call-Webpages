import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


function ServiceproviderindividualProjectopen() {

    return (
        <>
            <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-5 col-5 moblogo">
                                <a href="#"><img src="images/Logo.svg" alt="" /></a>
                                <button type="button" class="btn btn-login ml-4 d-none d-sm-inline-block">WANT TO HIRE SOMEONE ?</button>
                            </div>
                            <div class="col-md-7 col-7">
                                <ul class="tophead-right">
                                    <li class="client-loginHead d-none d-sm-block">
                                        <a href="#">
                                            <img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>SERVICE PROVIDER</span>
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
                            <Nav.Link href="#" className="active"><img src="images/bold-noteproject.svg" alt="" />PROJECTS</Nav.Link>
                            <Nav.Link href="#"><img src="images/bold-cal.svg" alt="" />BOOKINGS</Nav.Link>
                            <Nav.Link href="#"><img src="images/dollar.svg" alt="" />EXPENSE</Nav.Link>
                            <Nav.Link href="#"><img src="images/mgs.svg" alt="" />SUPPORT</Nav.Link>
                            <Nav.Link href="#"><img src="images/setting.svg" alt="" />ACCOUNT</Nav.Link>
                            <Nav.Link href="#"><img src="images/archive.svg" alt="" />SAVED</Nav.Link>
                            <Nav.Link href="#"><img src="images/trend.svg" alt="" />REPORTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row mt-2 mt-sm-3 align-items-center">
                        <div class="col-md-7 pr-0">
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 mr-3 text-uppercase">MY BIDS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">INVITED <span class="notification-numb  invite-notification">2</span></button>
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">OPEN PROJECTS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 text-uppercase">PAST PROJECTS</button>
                        </div>
                        <div class="col-md-5 pl-3 pl-sm-0">
                            <div class="row align-items-center">
                                <div class="col-md-7 my-2 my-sm-0">
                                    <div class="incrase-change">
                                        <div class="row">
                                            <div className="col-md-2 text-left text-sm-right pr-0 col-2">
                                                <img src="images/progress-flash.svg" height="25px" alt="" />
                                            </div>
                                            <div className="col-md-10 pl-0 pl-sm-1 pr-0 col-10">
                                                <p>Increase your chance of getting hired.</p>
                                                <h6><a href="#">complete your profile<img src="images/arrow-progress.svg" alt="" /></a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="progess-value">
                                        <div class="row">
                                            <div class="col-md-9 col-8">
                                                <h6>profile completed</h6>
                                            </div>
                                            <div class="col-md-3 col-4 text-right">
                                                <p>80%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="service-list Inprogress-servicelist mt-3">
                        <div class="row  align-items-center">

                            <div class="col-md-6 my-2 my-sm-0">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-2">
                                        <div class="service-individual-browsetext service-individual-browsetextyellow">
                                            <p>HOURLY</p>
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-10">
                                        <div class="service-item service-itemnew pl-0 pl-sm-3">
                                            <p>
                                                <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                            </p>
                                            <h6>WC hardware installation for 3 bathrooms</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /><span class="notification-numb">2</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="service-publicSec service-publicpink">
                                    <div class="row align-items-center">
                                        <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Approved</h4>
                                                <h5>$ 17.00 / hr</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Started on</h4>
                                                <h5>12th Jun 2022</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Status</h4>
                                                <h5><span class="padding-redtext text-uppercase">ON HOLD</span></h5>
                                            </div>
                                        </div>
                                        <div class="col-md-4 text-left text-sm-right col-5">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="service-list Inprogress-servicelist mt-3">
                        <div class="row align-items-center">

                            <div class="col-md-6 my-2 my-sm-0">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-2">
                                        <div class="service-individual-browsetext">
                                            <p>FIXED</p>
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-10">
                                        <div class="service-item service-itemnew pl-0 pl-sm-3">
                                            <p>
                                                <span class="service-itemdraft serviceitemyindividual service-individualcompany"><img src="images/gray-verify.svg" class="mr-1 mb-1" alt="" />INDIVIDUAL</span>
                                                <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-2" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                            </p>
                                            <h6>Full bathroom hardware installation for corporate office</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /><span class="notification-numb">2</span></h2>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="service-publicSec">
                                    <div class="row align-items-center">
                                        <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Budget</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Started on</h4>
                                                <h5>12th Jun 2022</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Completed</h4>
                                                <h5><span class="padding-redtext">$730.00</span></h5>
                                            </div>
                                        </div>

                                        <div class="col-md-4 text-left text-sm-right col-12 ">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-list Inprogress-servicelist mt-3">
                        <div class="row  align-items-center">

                            <div class="col-md-6 my-2 my-sm-0">
                                <div class="row align-items-center">
                                    <div class="col-md-1 col-2">
                                        <div class="service-individual-browsetext service-individual-browsetextyellow">
                                            <p>HOURLY</p>
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-10">
                                        <div class="service-item service-itemnew pl-0 pl-sm-3">
                                            <p>
                                                <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                            </p>
                                            <h6>WC hardware installation for 3 bathrooms</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /><span class="notification-numb">2</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="service-publicSec service-publicpink">
                                    <div class="row align-items-center">
                                        <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Approved</h4>
                                                <h5>$ 17.00 / hr</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Started on</h4>
                                                <h5>12th Jun 2022</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Completed</h4>
                                                <h5><span class="padding-redtext text-uppercase">0%</span></h5>
                                            </div>
                                        </div>
                                        <div class="col-md-4 text-left text-sm-right col-5">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
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

export default ServiceproviderindividualProjectopen;