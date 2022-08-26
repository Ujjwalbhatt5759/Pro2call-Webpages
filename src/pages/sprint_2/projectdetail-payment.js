import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function ProjectdeatilPayment() {
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

            <section class="client-section  position-relative">

                <div class="login-img d-none d-md-block">
                    <div class="container-fluid h-100">
                        <div class="row h-100">
                            <div class="col-md-5 order-sm-2 pr-0 h-100">
                                <img src="images/client-selector-right.svg" class="loginbg" alt="" />
                            </div>
                            <div class="col-md-7 order-sm-1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container min-heighvh position-relative">
                    <div class="row pt-4">
                        <div class="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                            <h1>checkout</h1>
                            <h2>to book you slot</h2>

                            <div class="row">
                                <div class="col-md-5">
                                    <label for="#" class="profile-label mt-3 mt-sm-4">Payment type</label>
                                    <div class="row">
                                        <div class="col-md-4 pr-0">
                                            <div class="form-group">
                                                <input class="filled-in" type="checkbox" value="" id="Check" />
                                                <label class="checkFrom-label" for="Check">
                                                    Credit/debit card
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <input class="filled-in" type="checkbox" value="" id="Check1" />
                                                <label class=" checkFrom-label" for="Check1">
                                                    Digital wallet (Paypal, stripe etc.)
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pr-0">
                                            <div class="form-group">
                                                <input class="filled-in" type="checkbox" value="" id="Check3" />
                                                <label class="checkFrom-label" for="Check3">
                                                    Pay after service
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group mt-2 mt-sm-3 position-relative">
                                                <img src="images/payment.png" class="payment-checkout" alt="" />
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="1234 5678 1234 5678" />
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Mayank" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Sethi" />
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="12/22" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="880" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <label for="#" class="profile-label mt-2 mt-sm-4">Billing information</label>

                                    <div class="row mt-2">
                                        <div class="col-md-6 col-6">
                                            <div class="select-box form-group">
                                                <select className="form-control select-checkout">
                                                    <option value="3">United States</option>
                                                    <option>Newest listing first</option>
                                                    <option>Lowest budget</option>
                                                    <option>Highest budget</option>
                                                    <option>Oldest listing first</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="select-box form-group">
                                                <select className="form-control select-checkout">
                                                    <option value="3">Washington</option>
                                                    <option>Newest listing first</option>
                                                    <option>Lowest budget</option>
                                                    <option>Highest budget</option>
                                                    <option>Oldest listing first</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="8th Avenue, House no. 8990, Firth Floor" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Seatlle" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Postal code" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row mt-2 mb-4">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-login" onClick={handleShow}>PROCEED TO PAY AND BOOK A SLOT</button>
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
                            <h1>your <span>address</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control login-input profile-inpt" placeholder="Full name" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control login-input profile-inpt" placeholder="Email address" />
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="email" class="form-control login-input profile-inpt" placeholder="Society / Apartment" />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control login-input profile-inpt" placeholder="Block / Flat / Bldg" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control login-input profile-inpt" placeholder="House / Flat no / Floor" />
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-login browse-btn">SAVE THIS ADDRESS</button>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">SELECT DATE & TIME</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ProjectdeatilPayment;