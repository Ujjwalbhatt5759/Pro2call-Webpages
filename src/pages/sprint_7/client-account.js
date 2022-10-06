import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function ClientAccount () {

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
                            <Nav.Link href="#"><img src="images/bold-cal.svg" alt="" />BOOKINGS</Nav.Link>
                            <Nav.Link href="#"><img src="images/dollar.svg" alt="" />EXPENSE</Nav.Link>
                            <Nav.Link href="#"><img src="images/mgs.svg" alt="" />SUPPORT</Nav.Link>
                            <Nav.Link href="#" className="active"><img src="images/bold-setting.svg" alt="" />ACCOUNT</Nav.Link>
                            <Nav.Link href="#"><img src="images/archive.svg" alt="" />SAVED</Nav.Link>
                            <Nav.Link href="#"><img src="images/trend.svg" alt="" />REPORTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <section class="client-section position-relative">

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

                    <div class="row mt-2 align-items-center">
                        <div class="col-md-6 mb-3 mb-sm-0">
                            <div class="client-accountbox">
                                <p>Hey Vinod, you are registered as a Client with Protocall. However if you wish you can <span><a href="#"> bid for a project </a></span> and earn money.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row justify-content-end">
                                <div class="col-md-9">
                                    <div class="incrase-change">
                                        <div class="row">
                                            <div className="col-md-2 text-left text-sm-right pr-0 col-2">
                                                <img src="images/progress-flash.svg" height="25px" alt="" />
                                            </div>
                                            <div className="col-md-10 pl-0 pl-sm-1  col-10">
                                                <p>98% clients get better results when profile is completed.</p>
                                                <h6><a href="#">complete your profile<img src="images/arrow-progress.svg" alt="" /></a></h6>

                                                <div class="row mt-2">
                                                    <div class="col-md-8">
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
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div class="col-md-6">
                            <div class="row mt-4">
                                <div class="col-md-8">
                                    <div class="account-Profile-Settings">
                                        <div class="row align-items-center">
                                            <div class="col-md-8 col-8">
                                                <div class="profile-Settingstext-box">
                                                    <h6>Profile <br /> Settings</h6>
                                                    <p><a href="#">Click to update</a></p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-4">
                                                <div class="account-Profile-SettingsrightBox">
                                                    <div class="account-Profile-SettingsrightBoximg">
                                                        <img src="images/user-square.svg" alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="account-Profile-Settings mt-3">
                                        <div class="row align-items-center">
                                            <div class="col-md-8 col-8">
                                                <div class="profile-Settingstext-box">
                                                    <h6>Update<br /> KYC </h6>
                                                    <p><a href="#">Click to update</a></p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-4">
                                                <div class="account-Profile-SettingsrightBox">
                                                    <div class="account-Profile-SettingsrightBoximg">
                                                        <img src="images/clipboard-text.svg" alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button type="button" class="btn btn-outline-primary post-btn mt-4" onClick={handleShow} >LOGOUT FROM PROTOCALL</button>
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
                        <div class="col-md-11 col-10 ">
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

export default ClientAccount;