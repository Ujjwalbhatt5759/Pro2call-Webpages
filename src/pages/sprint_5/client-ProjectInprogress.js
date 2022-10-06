import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


function ClientProjectInprogress() {

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
                        <div class="col-md-9">
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">POSTED</button>
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">IN PROGRESS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">PAST PROJECTS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">POST A PROJECT</button>
                        </div>
                        <div class="col-md-3 found-section text-left text-sm-right">
                            <h6 ><img src="images/filter.svg" alt="" height="27px" /> Filter results</h6>
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
                                        <div class="service-item pl-0 pl-sm-3">
                                            <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                            <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis …</h6>
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
                                                <h4>Budget</h4>
                                                <h5>$ 350.00</h5>
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
                                        <div class="service-item pl-0 pl-sm-3">
                                            <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                            <h6>Drainage pipe blockage removal</h6>
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
                                        <div class="service-item pl-0 pl-sm-3">
                                            <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                            <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis …</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="service-publicSec service-publicpink">
                                    <div class="row align-items-center">
                                        <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Budget</h4>
                                                <h5>$ 20.00 / hr</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Started on</h4>
                                                <h5>12th Jun 2022</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Completed</h4>
                                                <h5><span class="padding-redtext">0%</span></h5>
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

export default ClientProjectInprogress;