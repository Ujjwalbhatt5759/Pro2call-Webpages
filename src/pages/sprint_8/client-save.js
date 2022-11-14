import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function ClientSave () {

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
                            <Nav.Link href="#"><img src="images/setting.svg" alt="" />ACCOUNT</Nav.Link>
                            <Nav.Link href="#" className="active" ><img src="images/bold-archive.svg" alt="" />SAVED</Nav.Link>
                            <Nav.Link href="#"><img src="images/trend.svg" alt="" />REPORTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        
            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="found-result-box found-boxnew">
                                <div class="row">
                                    <div class="col-md-2 pr-0">
                                        <div class="dash-img">
                                            <img src="images/company-img.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-5 col-12">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" class="mr-2" height="22px" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-7 col-12 mb-2 mb-sm-0">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <h2 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span>4.7</span> (147 reviews)</h2>
                                                </div>

                                                <div class="col-md-5 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <h2>2,489</h2>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-2 mb-2 mb-sm-0">
                                       <div class="found-center">
                                           <h1><img src="images/save-remove.svg" height="23px" class="mr-1" alt="" />Remove from list</h1> 
                                       </div>
                                    </div> 

                                    <div class="col-md-3">
                                        <div class="found-right new-foundright">
                                            <h5>FIXED COST</h5>
                                            <h3>$750.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="found-result-box  found-boxnew">
                                <div class="row">
                                    <div class="col-md-2 pr-0">
                                        <div class="dash-img">
                                            <img src="images/company-img1.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-5 ">
                                        <div class="found-center gay-textfond">
                                            <h6> <img src="images/gray-brwn.svg"  height="22px" class="mr-2" alt="" /> INDIVIDUAL</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-7 mb-2 mb-sm-0">
                                                    <img src="images/john.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <h2 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span>4.7</span> (147 reviews)</h2>
                                                </div>

                                                <div class="col-md-5 text-left text-sm-right ">
                                                    <h4>Completed</h4>
                                                    <h2>2,489</h2>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-2 mb-2 mb-sm-0">
                                       <div class="found-center">
                                           <h1><img src="images/save-remove.svg" height="23px" class="mr-1" alt="" />Remove from list</h1> 
                                       </div>
                                    </div> 

                                    <div class="col-md-3">
                                        <div class="found-right hourly-right new-foundright">
                                            <h5>HOURLY</h5>
                                            <h3>$20.00 / hr</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
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
                        <div class="row align-items-end">
                            <div claSS="col-md-7 pr-0">
                                <div class="service-head">
                                    <img src="images/popup-logo.svg" height="45px" alt="" />
                                    <h1>chat with <span>support</span></h1>
                                </div>
                            </div>
                            <div claSS="col-md-5">
                                <button class="btn btn-login new-loginbtnpop text-uppercase">VIEW PROJECT DETAILS</button>
                            </div>
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
                            <p class="typing-textcolor ml-3">Protocall support is typing</p>
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

export default ClientSave;