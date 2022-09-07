import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'


function ServiceproviderServicesHistory () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">SCHEDULED <span class="notification-numb btn-notification">2</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">PAYMENT PENDING  <span class="notification-numb btn-notification2">3</span></button>
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">SERVICE HISTORY</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">LISTED Services</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 text-uppercase">ADD NEW SERVICE</button>
                        </div>
                        <div class="col-md-2 d-none d-sm-block">
                            <h6 class="filter-textservicesscheduled" onClick={handleShow} ><img src="images/filter.svg" class="mr-1" alt="" height="25px"  /> Filter results</h6>
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

                                </div>

                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-4 col-12  mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                                         <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-3 pl-sm-0  col-3  mb-2 mb-sm-0 ">
                                            <h4>Earned</h4>
                                            <h5>$750.00</h5>
                                        </div>
                                        <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3  col-4  mb-2 mb-sm-0 ">
                                            <h4>Earned</h4>
                                            <h5>12th Jun 2022</h5>
                                        </div> 

                                        <div class="col-md-3 text-right col-5  mb-2 mb-sm-0 ">
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
                                        <div class="col-md-2 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0  col-3  mb-2 mb-sm-0 ">
                                            <h4>Earned</h4>
                                            <h5>$750.00</h5>
                                        </div>
                                        <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3   col-4  mb-2 mb-sm-0">
                                            <h4>Earned</h4>
                                            <h5>12th Jun 2022</h5>
                                        </div>

                                        <div class="col-md-3 text-right col-5  mb-2 mb-sm-0 ">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <h6 class="services-labeltext">May, 2022</h6>
                        </div>
                    </div>

                    <div className="service-list mt-3">
                        <div class="row align-items-center">
                            <div class="col-md-1 col-4">
                                <div class="service-itemschedul-text">
                                    <h6>04</h6>
                                    <p>may</p>
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

                                </div>

                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-4 col-12  mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-3 pl-sm-0  col-3   mb-2 mb-sm-0">
                                            <h4>Earned</h4>
                                            <h5>$750.00</h5>
                                        </div>
                                        <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3   col-4  mb-2 mb-sm-0">
                                            <h4>Earned</h4>
                                            <h5>12th Jun 2022</h5>
                                        </div>

                                        <div class="col-md-3 text-right col-5 order-3 order-sm-5 ">
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
                                    <h6>11</h6>
                                    <p>may</p>
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

                                </div>

                            </div>
                            <div class="col-md-7">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-4 col-12  mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                <p>Gordan Entreprise Inc.</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-3 pl-sm-0  col-3 mb-2 mb-sm-0">
                                            <h4>Earned</h4>
                                            <h5>$750.00</h5>
                                        </div>
                                        <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3   col-4 mb-2 mb-sm-0">
                                            <h4>Earned</h4>
                                            <h5>12th Jun 2022</h5>
                                        </div>

                                        <div class="col-md-3 text-right col-5 mb-2 mb-sm-0 ">
                                            <button class="btn btn-login new-loginbtn text-uppercase">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row mt-4 mt-sm-5">
                        <div class="col-md-12">
                            <nav aria-label="...">
                                <ul class="pagination pagination-lg">
                                    <li class="page-item active" aria-current="page">
                                        <a href="#" class="page-link">
                                            1
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link newpage-link" href="#">.........</a></li>
                                    <li class="page-item"><a class="page-link" href="#">11</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </section>
             {/*  */}

             <Modal show={show} onHide={handleClose} className="bookingcancel-popup">
                <Modal.Header closeButton>
                    <Modal.Title>
                    <img src="images/new-popuplogo.svg" height="27px" alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="cancel-bookingpopup">
                    <div class="row text-center">
                        <div class="col-md-12">
                        <div class="new-popupimg">
                           <img src="images/new-popupimg.svg" alt="" />
                        </div>
                         
                          <h1>Are you sure you want to cancel this booking ?</h1>
                          <p>This action is not reversible, and you might have to re-book it.</p>
                          <button type="button" class="btn btn-outline-primary post-btn mt-3">YES, CANCEL THIS BOOKING</button>
                          <button type="button" class="btn btn-login mt-2 mb-2">NO, I CAN RE-SCHEDULE THIS BOOKING</button>
                        </div>
                    </div>
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                   
                </Modal.Footer> */}
            </Modal>




        </>
    );
}

export default ServiceproviderServicesHistory;