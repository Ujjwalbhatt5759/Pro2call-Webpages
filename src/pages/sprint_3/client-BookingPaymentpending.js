import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'



function ClientBookingPendingpayment () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Nav.Link href="#" className="active"><img src="images/calen.svg" alt="" />BOOKINGS</Nav.Link>
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
                        <div class="col-md-10 pr-0">
                             <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">SCHEDULED  <span class="notification-numb btn-notification">2</span></button>
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">PAYMENT PENDING</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">PAST BOOKINGS</button>
                        </div>
                        <div class="col-md-2 d-none d-sm-block">
                        <h6 class="filter-textservicesscheduled"><img src="images/filter.svg" class="mr-1" alt="" height="25px" /> Filter results</h6>
                        </div>
                    </div>

                  
                    <div className="service-list mt-3 mt-sm-4">
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
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px"/> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                        </div>

                                        <div class="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Total cost</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Paid</h4>
                                                <h5>$20.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Pending</h4>
                                                <h5><span class="padding-redtext">$730.00</span></h5>
                                            </div>
                                        </div>

                                        <div class="col-md-3  text-sm-right text-left col-12 ">
                                           <button class="btn btn-login new-loginbtn text-uppercase" onClick={handleShow}>PAY NOW</button>
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
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px"/> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                        </div>

                                        <div class="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                                            <div class="text-sm-right text-center">
                                                <h4>Total cost</h4>
                                                <h5>$750.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Paid</h4>
                                                <h5>$20.00</h5>
                                            </div>
                                            <div class="text-sm-right text-center">
                                                <h4>Pending</h4>
                                                <h5><span class="padding-redtext">$730.00</span></h5>
                                            </div>
                                        </div>

                                        <div class="col-md-3 text-sm-right text-left col-12">
                                           <button class="btn btn-login new-loginbtn text-uppercase">PAY NOW</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> 
                    </div>

                 

                  


                </div>
            </section>

            
            {/*  */}

            <Modal show={show} onHide={handleClose} className="filter-popup2 modal-dialog-slideout">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div class="service-head">
                            <img src="images/popup-logo.svg" height="45px" alt="" />
                            <h1>chat with  <span>client</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row mt-3 mt-sm-5 justify-content-end">
                        <div class="col-md-7">
                            <div class="arrow_box">
                                <p>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis</p>
                            </div>
                            <p class="caht-timming">9:00 AM</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-7">
                            <div class="row text-right">
                                <div class="col-md-12">
                                    <button type="button" class="btn chat-boxbtn ">Oct 2nd, 2021</button>
                                </div>
                            </div>
                            <div class="arrow_box arrow_boxblue mt-2">
                                <p>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis</p>
                            </div>
                            <div class="row text-right mt-3">
                                <div class="col-md-12">
                                    <button type="button" class="btn chat-boxbtn mr-3">Today</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row mt-3 justify-content-end">
                        <div class="col-md-7">
                            <div class="arrow_box">
                                <p>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis</p>
                            </div>
                            <p class="caht-timming">9:00 AM</p>
                        </div>
                    </div>

                    <div class="row align-items-center mt-3">
                        <div class="col-md-1 col-1">
                            <div class="typing-boximg">
                                <img src="images/typing-text.svg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-10 col-10">
                            <p class="typing-textcolor ml-3">Jaydyn is typing</p>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="email" class="form-control typing-int" placeholder="type a message here…" />
                                <button type="button" class="btn send-btn"><img src="images/send.svg" alt="" height="25px" /></button>
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

export default ClientBookingPendingpayment;