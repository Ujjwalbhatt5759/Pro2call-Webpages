import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function ServiceproviderindividualProjectpast() {

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

            <section>
                <div class="container">
                    <div class="row mt-2 mt-sm-3 align-items-center">
                        <div class="col-md-9 pr-0">
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 mr-3 text-uppercase">MY BIDS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">INVITED <span class="notification-numb  invite-notification">2</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">OPEN PROJECTS  <span class="notification-numb openproject-notification">3</span></button>
                            <button class="uploadBtn mb-2 text-uppercase">PAST PROJECTS</button>
                        </div>
                       
                        <div class="col-md-3 found-section mt-2 text-sm-right text-left">
                            <h6 onClick={handleShow} ><img src="images/filter.svg" alt="" height="27px" />Filter results</h6>
                        </div>
                    </div>

                </div>
            </section>


            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row mt-2">
                       
                        <div class="col-md-12">

                        <h6 class="services-labeltext">June, 2022</h6>

                            <div className="service-list mt-2">
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-1 col-2">
                                                <div class="service-individual-browsetext service-individual-browsetextyellow">
                                                    <p>HOURLY</p>
                                                </div>
                                            </div>
                                            <div class="col-md-8 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                <div class="text-sm-right text-center">
                                                        <h4>Earned</h4>
                                                        <h5>$ 700.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Started on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Completed</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-4 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-1 col-2">
                                                <div class="service-individual-browsetext">
                                                    <p>FIXED</p>
                                                </div>
                                            </div>
                                            <div class="col-md-8 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyindividual service-individualcompany"><img src="images/gray-verify.svg" class="mr-1 mb-1" alt="" />INDIVIDUAL</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec">
                                            <div class="row">
                                            <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Earned</h4>
                                                        <h5>$ 700.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Started on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Completed</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                   
                                                </div>
                                                <div class="col-md-4 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-1 col-2">
                                                <div class="service-individual-browsetext service-individual-browsetextyellow">
                                                    <p>HOURLY</p>
                                                </div>
                                            </div>
                                            <div class="col-md-8 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                <div class="text-sm-right text-center">
                                                        <h4>Earned</h4>
                                                        <h5>$ 700.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Started on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Completed</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-4 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 class="services-labeltext mt-3">July, 2022</h6>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-1 col-2">
                                                <div class="service-individual-browsetext service-individual-browsetextyellow">
                                                    <p>HOURLY</p>
                                                </div>
                                            </div>
                                            <div class="col-md-8 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                <div class="text-sm-right text-center">
                                                        <h4>Earned</h4>
                                                        <h5>$ 700.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Started on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Completed</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-4 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/*  */}
            <Modal show={show} onHide={handleClose} className="filter-popup modal-dialog-slideout">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div class="service-head">
                            <img src="images/popup-logo.svg" height="45px" alt="" />
                            <h1>feedback for <span>client</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="serviceListeddetails-head booking-confrd ">
                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                <p>Gordan Entreprise Inc.</p>
                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                            </div>
                        </div>

                        <div class="col-md-12 mt-3">
                            <div class="form-group">
                                <textarea class="form-control login-input profile-inpt text-input" placeholder="Write a review here …."  rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">SUBMIT MY FEEDBACK</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ServiceproviderindividualProjectpast

;