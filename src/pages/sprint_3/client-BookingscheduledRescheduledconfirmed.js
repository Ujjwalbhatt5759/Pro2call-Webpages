import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function ClientBookingdetailsReScheduledconfirmed () {
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

            <section class="client-section client-sectionconfirmed  position-relative">

                <div class="login-img d-none d-md-block">
                    <div class="container-fluid h-100">
                        <div class="row h-100">
                            <div class="col-md-4 order-sm-2 pr-0 h-100">
                                <img src="images/re-scheduledright.png" class="loginbg" alt="" />
                            </div>
                            <div class="col-md-7 order-sm-1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container min-heighvh position-relative">
                    <div class="row pt-4">
                        <div class="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                            <h1>re-scheduling  <span>confirmed</span></h1>
                            <h2>thank you</h2>


                            <div class="booking-confirmed">
                                <div class="row mt-3 mt-sm-4">
                                    <div class="col-md-4">
                                        <p>Your slot have been confirmed with the booking ID# PR0000238</p>
                                        <h6>If you wish to cancel the booking, please use the my bookings
                                            link below and click on cancel this booking.</h6>
                                        <div class="border-bottom mt-3 mt-sm-4"></div>

                                        <div class="row align-items-center mt-3 ">
                                            <div class="col-md-8 col-8">
                                                <h4>Service</h4>
                                                <h5>Drainage pipe blockage removal</h5>
                                            </div>
                                            <div class="col-md-4 col-4">
                                                <h1>$750.00</h1>
                                            </div>
                                        </div>


                                    </div>


                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="serviceListeddetails-head booking-confrd mt-3 border-bottom pb-4">
                                        <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                        <p>Gordan Entreprise Inc.</p>
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                </div>

                            </div>


                            <div class="row mt-4 mb-4">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-login" onClick={handleShow}>BOOKED SERVICES</button>
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
                            <h1>chat with <span>service provider</span></h1>
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

export default ClientBookingdetailsReScheduledconfirmed;