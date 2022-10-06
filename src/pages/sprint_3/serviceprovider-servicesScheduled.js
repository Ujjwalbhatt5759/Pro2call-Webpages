import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


function ServiceproviderServicesScheduled () {

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
                            <Nav.Link href="#"><img src="images/note.svg" alt="" />PROJECTS</Nav.Link>
                            <Nav.Link href="#" className="active"><img src="images/calen.svg" alt="" />SERVICES</Nav.Link>
                            <Nav.Link href="#"><img src="images/dollar.svg" alt="" />EARNINGS</Nav.Link>
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
                        <div class="col-md-10 pr-0">
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">SCHEDULED</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">PAYMENT PENDING  <span class="notification-numb btn-notification2">3</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">SERVICE HISTORY</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 mr-3 text-uppercase">LISTED SERVICES</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 text-uppercase">ADD NEW SERVICE</button>
                        </div>
                        <div class="col-md-2 d-none d-sm-block">
                            <h6 class="filter-textservicesscheduled"><img src="images/filter.svg" class="mr-1" alt="" height="25px" /> Filter results</h6>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col-md-12">
                            <h6 class="services-labeltext">June, 2022</h6>
                        </div>
                    </div>
                    <div className="service-list mt-2">
                        <div class="row align-items-center">
                            <div class="col-md-1 col-4">
                                <div class="service-itemschedul-text">
                                    <h6>24</h6>
                                    <p>JUN</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-8 pl-0">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <div class="service-item">
                                            <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                            <h6>Drainage pipe blockage removal</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-4 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /><span class="notification-numb">2</span></h2>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-4 mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                                        <div class="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Total cost</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Earned</h4>
                                                <h5>$20.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Pending</h4>
                                                <h5><span class="padding-redtext"> #DD3636</span></h5>
                                            </div>
                                        </div>
                                        <div class="col-md-3 text-right col-5 ">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-list mt-3">
                        <div class="row  align-items-center">
                            <div class="col-md-1 col-4">
                                <div class="service-itemschedul-text">
                                    <h6>30</h6>
                                    <p>JUN</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-8 pl-0">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <div class="service-item">
                                            <p>#PT0000129899 <span class="service-itemdraft service-itemhourly">Hourly</span></p>
                                            <h6>Drainage pipe blockage removal</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-4 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec service-publicpink">
                                    <div class="row">
                                        <div class="col-md-4 col-12  mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>

                                        <div class="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Total cost</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Earned</h4>
                                                <h5>$20.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Pending</h4>
                                                <h5><span class="padding-redtext"> #DD3636</span></h5>
                                            </div>
                                        </div>

                                        <div class="col-md-3 text-right col-5 ">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <h6 class="services-labeltext">June, 2022</h6>
                        </div>
                    </div>

                    <div className="service-list mt-3">
                        <div class="row align-items-center">
                            <div class="col-md-1 col-4">
                                <div class="service-itemschedul-text">
                                    <h6>02</h6>
                                    <p>JUl</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-8 pl-0">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <div class="service-item">
                                            <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                            <h6>Drainage pipe blockage removal</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-4 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /></h2>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-4 mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                                        <div class="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Total cost</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Earned</h4>
                                                <h5>$20.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Pending</h4>
                                                <h5><span class="padding-redtext"> #DD3636</span></h5>
                                            </div>
                                        </div>
                                        <div class="col-md-3 text-right col-5 ">
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
                                    <h6>10</h6>
                                    <p>JUl</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-8 pl-0">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <div class="service-item">
                                            <p>#PT0000129899 <span class="service-itemdraft serviceitemyfixed">Fixed</span></p>
                                            <h6>Drainage pipe blockage removal</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-4 text-right d-none d-sm-block">
                                        <h2 class="chat-textred"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /></h2>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-4 mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                                        <div class="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Total cost</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Earned</h4>
                                                <h5>$20.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Pending</h4>
                                                <h5><span class="padding-redtext"> #DD3636</span></h5>
                                            </div>
                                        </div>
                                        <div class="col-md-3 text-right col-5 ">
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

export default ServiceproviderServicesScheduled;