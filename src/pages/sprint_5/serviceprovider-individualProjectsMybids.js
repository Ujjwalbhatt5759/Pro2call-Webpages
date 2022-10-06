import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

// import Form from 'react-bootstrap/Form';
import { Navbar, Nav } from 'react-bootstrap';

function ServiceproviderindividualProjectMybids () {

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
                        <div class="col-md-6 pr-0">
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">MY BIDS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">INVITED <span class="notification-numb  invite-notification">2</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">OPEN PROJECTS  <span class="notification-numb openproject-notification">3</span> </button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 text-uppercase">POSTED</button>
                        </div>
                        <div class="col-md-6 ">
                            <div class="row align-items-center">
                                <div class="col-md-7 my-2 my-sm-0">
                                    <div class="incrase-change">
                                        <div class="row">
                                            <div className="col-md-3 text-left text-sm-right pr-0 col-2">
                                                <img src="images/progress-flash.svg" height="25px" alt="" />
                                            </div>
                                            <div className="col-md-9 pl-0 pl-sm-1 col-10">
                                                <p>Increase your chance of getting hired.</p>
                                                <h6><a href="#">complete your profile<img src="images/arrow-progress.svg" alt="" /></a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="progess-value">
                                        <div class="row">
                                            <div class="col-md-8 col-8">
                                                <h6>profile completed</h6>
                                            </div>
                                            <div class="col-md-4 col-4 text-right">
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
                        <div class="col-md-6 found-section mt-2">
                            <h6 onClick={handleShow} ><img src="images/filter.svg" alt="" height="27px" />Show shortlisted only</h6>
                        </div>
                    </div>

                </div>
            </section>



            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row mt-2">
                        <div class="col-md-12">

                            <div className="service-list mt-2">
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-1 col-2">
                                                <div class="service-individual-browsetext service-individual-browsetextyellow">
                                                    <p>HOURLY</p>
                                                </div>
                                            </div>
                                            <div class="col-md-8 pl-2 pl-sm-4 col-8">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            <div class="col-md-3 text-right col-2 pl-0 pl-sm-3">
                                                <h2 class="chat-textred client-inprogresschatimg"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /><span class="notification-numb">2</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
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
                                            <div class="col-md-8 pl-2 pl-sm-4 col-8">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyindividual service-individualcompany"><img src="images/gray-verify.svg" class="mr-1 mb-1" alt="" />INDIVIDUAL</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                                </div>
                                            </div>
                                            <div class="col-md-3 text-right col-2 pl-0 pl-sm-3">
                                                <h2 class="chat-textred client-inprogresschatimg"><img src="images/chat-imgscheduled.svg" alt="" height="40px" /><span class="notification-numb">2</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec">
                                            <div class="row">
                                            <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
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
                                            <div class="col-md-8 pl-2 pl-sm-4 col-8">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            <div class="col-md-3 text-right col-2 pl-0 pl-sm-3">
                                                <h2 class="chat-textred client-inprogresschatimg"><img src="images/light-chat.svg" alt="" height="40px" /></h2>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
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
                                            <div class="col-md-8 pl-2 pl-sm-4 col-8">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            <div class="col-md-3 text-right col-2 pl-0 pl-sm-3">
                                                <h2 class="chat-textred client-inprogresschatimg"><img src="images/light-chat.svg" alt="" height="40px" /></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
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
                                            <div class="col-md-8 pl-2 pl-sm-4 col-8">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                            <div class="col-md-3 text-right col-2 pl-0 pl-sm-3">
                                                <h2 class="chat-textred client-inprogresschatimg"><img src="images/light-chat.svg" alt="" height="40px" /></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-8 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
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
                        <div class="col-md-11 col-10 ">
                            <p class="typing-textcolor ml-3">Jaydyn is typing</p>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="email" class="form-control typing-int chatwithpopuprightpadding" placeholder="type a message here…" />
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

export default ServiceproviderindividualProjectMybids;