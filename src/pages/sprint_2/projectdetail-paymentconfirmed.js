import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import  { Table, tr, td } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

function ProjectdeatilPaymentconfirmed () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-3 col-5 moblogo">
                                <Link to="/"><img src="images/Logo.svg" alt="" /></Link>
                            </div>
                            <div class="col-md-9 col-7">
                                <ul class="tophead-right">
                                    <li><a href="#"><button type="button" class="btn btn-login">LOGIN / SIGNUP</button></a></li>
                                    <li class="d-none d-sm-inline-block"><a href="#"><button type="button" class="btn btn-outline-primary post-btn">POST A PROJECT</button></a></li>
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
                            <div class="col-md-3 order-sm-2 pr-0 h-100">
                                <img src="images/confirmed-right.png" class="loginbg" alt="" />
                            </div>
                            <div class="col-md-8 order-sm-1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container min-heighvh position-relative">
                    <div class="row pt-4">
                        <div class="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                            <h1>booking  <span>confirmed</span></h1>
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
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</h6>
                                    </div>
                                </div>

                            </div>


                            <div class="row mt-4 mb-4">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-login" onClick={handleShow}>MY BOOKINGS</button>
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
                        <h1>time <span>slot</span></h1>
                    </div>
                   </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="#" class="profile-label mt-0 mt-sm-2">June, 2022</label>
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <table class="table new-table">
                                <tbody>
                                    <tr>
                                        <td class="active">M<br /> 14</td>
                                        <td>T<br />15</td>
                                        <td>W<br />16</td>
                                        <td>T<br />17</td>
                                        <td>F<br />18</td>
                                        <td>S<br />19</td>
                                        <td>S<br />20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <label for="#" class="profile-label mt-1 mt-sm-3">Available time slots</label>

                    <div class="timeinput">
                            <input class="with-gap" type="radio" name="client-selector" id="client1" />
                            <label for="client1">9 am - 10 am</label>
                       
                            <input class="with-gap" type="radio" name="client-selector" id="client2" />
                            <label for="client2">12 pm - 1 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client3" />
                            <label for="client3">1 pm - 12 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client4" />
                            <label for="client4">2 pm - 10 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client5" />
                            <label for="client5">7 pm - 11 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client6" />
                            <label for="client6">8 pm - 12 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client7" />
                            <label for="client7">9 pm - 10 pm</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ProjectdeatilPaymentconfirmed;