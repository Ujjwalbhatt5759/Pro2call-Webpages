import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


function Listed() {

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
                                            <p>Hi, MockLabs Inc.!</p>
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

            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2">SCHEDULED  <span class="notification-numb btn-notification">2</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2">PAYMENT PENDING  <span class="notification-numb btn-notification2">3</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2">SERVICE HISTORY</button>
                            <button class="uploadBtn mr-3 mb-2">LISTED SERVICES</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 ">ADD NEW SERVICE</button>
                        </div>
                    </div>

                    <div className="service-list mt-3">
                        <div class="row  align-items-center">
                            <div class="col-md-1">
                                <div class="service-itemImg">
                                    <img src="images/listed-img.jpg" alt="" />
                                </div>
                            </div>
                            <div class="col-md-5 pl-0">
                                <div class="service-item">
                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span><span class="service-itemdraft">DRAFT</span></p>
                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="service-publicSec">
                                    <div class="row">
                                        <div class="col-md-2">
                                            {/* <div class="toogleSwitch">
                                                <label class="switch">
                                                    <input type="checkbox" checked />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div> */}
                                        </div>
                                        <div class="col-md-2 text-right">
                                            <h4>Cost</h4>
                                            <h5>$120.00</h5>
                                        </div>
                                        <div class="col-md-2 text-right">
                                            <h4>Earned</h4>
                                            <h5>$1,200.00</h5>
                                        </div>
                                        <div class="col-md-2 text-right">
                                            <h4>Booked</h4>
                                            <h5>10</h5>
                                        </div>
                                        <div class="col-md-4 text-right">
                                            <button type="button" class="btn btn-login new-loginbtn">VIEW DETAILS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="service-list mt-3">
                        <div class="row  align-items-center">
                            <div class="col-md-1">
                                <div class="service-itemImg">
                                    <img src="images/listed-img.jpg" alt="" />
                                </div>
                            </div>
                            <div class="col-md-5 pl-0">
                                <div class="service-item">
                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span><span class="service-itemdraft">DRAFT</span></p>
                                    <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis …</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="service-publicSec service-publicpink">
                                    <div class="row">
                                        <div class="col-md-2">
                                            {/* <div class="toogleSwitch">
                                                <label class="switch">
                                                    <input type="checkbox" checked />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div> */}
                                        </div>
                                        <div class="col-md-2 text-right">
                                            <h4>Cost</h4>
                                            <h5>$120.00</h5>
                                        </div>
                                        <div class="col-md-2 text-right">
                                            <h4>Earned</h4>
                                            <h5>$1,200.00</h5>
                                        </div>
                                        <div class="col-md-2 text-right">
                                            <h4>Booked</h4>
                                            <h5>10</h5>
                                        </div>
                                        <div class="col-md-4 text-right">
                                            <button type="button" class="btn btn-login new-loginbtn">VIEW DETAILS</button>
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

export default Listed;