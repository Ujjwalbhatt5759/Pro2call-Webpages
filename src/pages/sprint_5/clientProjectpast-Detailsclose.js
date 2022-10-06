import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

function ClientProjectpastDetailsclose() {
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

            <section class="py-5 py-sm-5">
                <div class="container">
                    <div class="row mt-4 mt-sm-4 ">
                        <div class="col-md-9 mt-2">
                            <div class="service-head">
                                <h1><span>full bathroom hardware installation for corporate office</span></h1>
                                <h2><span><a href="#">Projects</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" />In Progress</h2>
                            </div>
                        </div>
                        <div class="col-md-3 text-sm-right">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BACK TO LIST</button>
                        </div>
                    </div>


                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-1 mt-sm-3 align-items-center">
                        <div class="col-md-9 mb-2 mb-sm-0">
                            <div class="row">
                                <div class="col-md-4 mt-3 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                        <p>John Snow</p>
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6 mt-2 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Completed</p>
                                        <h6>21</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6  mt-2 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Total earned</p>
                                        <h6>$ 47,890</h6>
                                    </div>
                                </div>
                                <div class="col-md-3 col-6  mt-2 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Member since</p>
                                        <h6>4 years 3 months</h6>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-3">
                        <div class="col-md-8 mb-3 mb-sm-0">

                            <div class="client-chatboxdetails ml-0 ml-sm-3 mt-2">
                                <div class="rightchatboxbg">
                                    <div class="row align-items-center">
                                        <div class="col-md-2 d-none d-sm-inline-block">
                                            <img src="images/client-chatboxrightimg.png" class="chatboxrightimg" alt="" />
                                        </div>
                                        <div class="col-md-5 mb-2 mb-sm-0">
                                            <h1>Chat with John !</h1>
                                            <p><a href="#">Click here to leave a message.</a></p>
                                        </div>
                                        <div class="col-md-5 text-right">
                                            <button type="button" class="btn btn-login ml-4 ">CHAT WITH CLIENT NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="service-detailscont mt-3">
                                <h4>Project milestones</h4>
                            </div>

                            <Accordion defaultActiveKey="0" className="accordreact projectmilestoneaccord">
                                <Accordion.Item eventKey="0" className="active" >
                                    <Accordion.Header>
                                        <div class="row align-items-center">
                                            <div class="col-md-6 col-9">
                                                <div class="projectmilestone-headtext paidmilestones-text">
                                                    <p><img src="images/milestone-white.svg" alt="" /> Milestone - 1</p>
                                                </div>
                                                <div class="new-paid-milestonelogo">
                                                   <img src="images/paid-milestonelogo.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-3">
                                                <div class="added-blackText milestone-blacktext">
                                                    <span class="d-none d-sm-inline-block">
                                                        <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 5days
                                                        <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 25%
                                                    </span>
                                                    <img src="images/arrow-down.svg" class="accordup ml-1 ml-sm-4" alt="" />
                                                    <img src="images/arrow-up.svg" class="accorddown ml-1 ml-sm-4" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div class="project-milestonesinner">
                                            <p class="d-block d-sm-none my-2 my-sm-3">
                                                <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 5days
                                                <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 25%
                                            </p>
                                            <div class="delivery-milestoneboxaccord ">
                                                <p>Deliverables in this milestone</p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Drainage cleaning related activities</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Grouting repair work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Light cement work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Plumbing related consultation</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>4 week post service guarantee</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row mt-2 align-items-center">
                                                            <div class="col-md-4 col-4 text-right">
                                                                <h2>APPROVED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check" />
                                                                    <label class="checkFrom-label" for="Check"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="completed-bluetext">COMPLETED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check2" />
                                                                    <label class="checkFrom-label" for="Check2"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check3" />
                                                                    <label class="checkFrom-label" for="Check3"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check4" />
                                                                    <label class="checkFrom-label" for="Check4"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check5" />
                                                                    <label class="checkFrom-label" for="Check5"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="uploaddocument-milestones">
                                                <label for="#" class="profile-label">Uploaded documents</label>
                                                <div class="row">
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label for="#" class="profile-label mt-3 mb-0">Remarks by John Snow</label>

                                                <div class="row">
                                                    <div class="col-md-9">
                                                        <h4>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.
                                                            Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.</h4>
                                                    </div>
                                                </div>

                                                <button type="button" class="btn btn-login mt-3 mr-0 mr-sm-3">APPROVE & RELEASE PAYMENT</button>
                                                <button type="button" class="btn btn-warning exlpore-btn new-explorebtn text-uppercase mt-3">RAISE A DISPUTE</button>

                                            </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="active">
                                    <Accordion.Header>
                                        <div class="row align-items-center">
                                            <div class="col-md-6 col-9">
                                                <div class="projectmilestone-headtext paidmilestones-text">
                                                    <p><img src="images/milestone-white.svg" alt="" /> Milestone - 2</p>
                                                </div>
                                                <div class="new-paid-milestonelogo">
                                                   <img src="images/paid-milestonelogo.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-3">
                                                <div class="added-blackText milestone-blacktext">
                                                    <span class="d-none d-sm-inline-block">
                                                        <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 2days
                                                        <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 15%
                                                    </span>
                                                    <img src="images/arrow-down.svg" class="accordup ml-1 ml-sm-4" alt="" />
                                                    <img src="images/arrow-up.svg" class="accorddown ml-1 ml-sm-4" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <div class="project-milestonesinner">
                                            <p class="d-block d-sm-none my-2 my-sm-3">
                                                <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 5days
                                                <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 25%
                                            </p>
                                            <div class="delivery-milestoneboxaccord ">
                                                <p>Deliverables in this milestone</p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Drainage cleaning related activities</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Grouting repair work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Light cement work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Plumbing related consultation</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>4 week post service guarantee</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row mt-2 align-items-center">
                                                            <div class="col-md-4 col-4 text-right">
                                                                <h2>APPROVED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check6" />
                                                                    <label class="checkFrom-label" for="Check6"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="completed-bluetext">COMPLETED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check7" />
                                                                    <label class="checkFrom-label" for="Check7"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check8" />
                                                                    <label class="checkFrom-label" for="Check8"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check9" />
                                                                    <label class="checkFrom-label" for="Check9"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check10" />
                                                                    <label class="checkFrom-label" for="Check10"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="uploaddocument-milestones">
                                                <label for="#" class="profile-label">Uploaded documents</label>
                                                <div class="row">
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label for="#" class="profile-label mt-3 mb-0">Remarks by John Snow</label>

                                                <div class="row">
                                                    <div class="col-md-9">
                                                        <h4>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.
                                                            Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.</h4>
                                                    </div>
                                                </div>

                                                <button type="button" class="btn btn-login mt-3 mr-0 mr-sm-3">APPROVE & RELEASE PAYMENT</button>
                                                <button type="button" class="btn btn-warning exlpore-btn new-explorebtn text-uppercase mt-3">RAISE A DISPUTE</button>

                                            </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="active">
                                    <Accordion.Header>
                                        <div class="row align-items-center">
                                            <div class="col-md-6 col-9">
                                                <div class="projectmilestone-headtext paidmilestones-text">
                                                    <p><img src="images/milestone-white.svg" alt="" /> Milestone - 3</p>
                                                </div>
                                                <div class="new-paid-milestonelogo">
                                                   <img src="images/paid-milestonelogo.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-3">
                                                <div class="added-blackText milestone-blacktext">
                                                    <span class="d-none d-sm-inline-block">
                                                        <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 7days
                                                        <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 40%
                                                    </span>
                                                    <img src="images/arrow-down.svg" class="accordup ml-1 ml-sm-4" alt="" />
                                                    <img src="images/arrow-up.svg" class="accorddown ml-1 ml-sm-4" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <div class="project-milestonesinner">
                                            <p class="d-block d-sm-none my-2 my-sm-3">
                                                <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 5days
                                                <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 25%
                                            </p>
                                            <div class="delivery-milestoneboxaccord ">
                                                <p>Deliverables in this milestone</p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Drainage cleaning related activities</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Grouting repair work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Light cement work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Plumbing related consultation</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>4 week post service guarantee</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row mt-2 align-items-center">
                                                            <div class="col-md-4 col-4 text-right">
                                                                <h2>APPROVED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check11" />
                                                                    <label class="checkFrom-label" for="Check11"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="completed-bluetext">COMPLETED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check12" />
                                                                    <label class="checkFrom-label" for="Check12"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check13" />
                                                                    <label class="checkFrom-label" for="Check13"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check14" />
                                                                    <label class="checkFrom-label" for="Check14"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check15" />
                                                                    <label class="checkFrom-label" for="Check15"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="uploaddocument-milestones">
                                                <label for="#" class="profile-label">Uploaded documents</label>
                                                <div class="row">
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label for="#" class="profile-label mt-3 mb-0">Remarks by John Snow</label>

                                                <div class="row">
                                                    <div class="col-md-9">
                                                        <h4>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.
                                                            Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.</h4>
                                                    </div>
                                                </div>

                                                <button type="button" class="btn btn-login mt-3 mr-0 mr-sm-3">APPROVE & RELEASE PAYMENT</button>
                                                <button type="button" class="btn btn-warning exlpore-btn new-explorebtn text-uppercase mt-3">RAISE A DISPUTE</button>

                                            </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="active">
                                    <Accordion.Header>
                                        <div class="row align-items-center">
                                            <div class="col-md-6 col-9">
                                                <div class="projectmilestone-headtext paidmilestones-text">
                                                    <p><img src="images/milestone-white.svg" alt="" /> Milestone - 4</p>
                                                </div>
                                                <div class="new-paid-milestonelogo">
                                                   <img src="images/paid-milestonelogo.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-3">
                                                <div class="added-blackText milestone-blacktext">
                                                    <span class="d-none d-sm-inline-block">
                                                        <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 1days
                                                        <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 20%
                                                    </span>
                                                    <img src="images/arrow-down.svg" class="accordup ml-1 ml-sm-4" alt="" />
                                                    <img src="images/arrow-up.svg" class="accorddown ml-1 ml-sm-4" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <div class="project-milestonesinner">
                                            <p class="d-block d-sm-none my-2 my-sm-3">
                                                <img src="images/milestone-timer.svg" height="17px" class="mb-1 mr-1 mr-sm-2" alt="" />Duration: 5days
                                                <img src="images/milestone-dollar.svg" height="17px" class="mb-1 mr-1 mr-sm-2 ml-2 ml-sm-3" alt="" />Payment: 25%
                                            </p>
                                            <div class="delivery-milestoneboxaccord ">
                                                <p>Deliverables in this milestone</p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Drainage cleaning related activities</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Grouting repair work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Light cement work</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>Plumbing related consultation</p>
                                                        </div>
                                                        <div class="d-flex justify-content-start mt-2">
                                                            <img src="images/box-check.svg" class="mr-3" alt="" />
                                                            <p>4 week post service guarantee</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row mt-2 align-items-center">
                                                            <div class="col-md-4 col-4 text-right">
                                                                <h2>APPROVED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check16" />
                                                                    <label class="checkFrom-label" for="Check16"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="completed-bluetext">COMPLETED</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check17" />
                                                                    <label class="checkFrom-label" for="Check17"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check18" />
                                                                    <label class="checkFrom-label" for="Check18"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check19" />
                                                                    <label class="checkFrom-label" for="Check19"></label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-1 align-items-center">
                                                            <div class="col-md-4 text-right col-4">
                                                                <h2 class="pending-graytext">PENDING</h2>
                                                            </div>
                                                            <div class="col-md-4 col-5">
                                                                <h3>12th Jun 2022</h3>
                                                            </div>
                                                            <div class="col-md-4 col-3">
                                                                <div class="">
                                                                    <input class="filled-in" type="checkbox" value="" id="Check20" />
                                                                    <label class="checkFrom-label" for="Check20"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="uploaddocument-milestones">
                                                <label for="#" class="profile-label">Uploaded documents</label>
                                                <div class="row">
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-4">
                                                        <div class="fixed-costproductimg fixed-costproductimg2">
                                                            <img src="images/details.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label for="#" class="profile-label mt-3 mb-0">Remarks by John Snow</label>

                                                <div class="row">
                                                    <div class="col-md-9">
                                                        <h4>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.
                                                            Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error.</h4>
                                                    </div>
                                                </div>

                                                <button type="button" class="btn btn-login mt-3 mr-0 mr-sm-3">APPROVE & RELEASE PAYMENT</button>
                                                <button type="button" class="btn btn-warning exlpore-btn new-explorebtn text-uppercase mt-3">RAISE A DISPUTE</button>

                                            </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div class="service-detailscont">
                                <h4>Skills required</h4>
                            </div>

                            <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                            <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                            <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                            <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                            <button type="button" class="btn btn-info skill-btn">Skill lorem</button>








                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="service-detailscont">
                                        <h4>Overview</h4>
                                        <p>You may have experience in fixing a lot of things at home but plumbing isn’t everyone’s cup of tea.
                                            Plumbing issues such as clogged drains, leaky faucets, broken or damaged pipelines etc. can be a
                                            homeowner’s nightmare. Plumbing issues need to be addressed immediately in order to prevent them from
                                            exacerbating or causing further damages. Minor plumbing problems are quite common in every household.
                                            Book our plumbing services for all kinds of general plumbing services such as loose and leaky faucets,
                                            dripping tap, clogged shower head, cistern repair, toilet flush not working, clogged drain and
                                            sink or any other plumbing work. We have a huge network of plumbing contractors in
                                            <strong> Seattle, Washington</strong> to help you with all kinds of emergency plumbing services.</p>
                                        <a href="#">read more <img src="images/arrow-deatil.svg" height="20px" alt="" /></a>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 mb-2">

                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox">
                                    <div class="row align-items-end">
                                        <div class="col-md-6 col-6">
                                            <h2>APPROVED BUDGET</h2>
                                            <h1>$750.00</h1>
                                            <p>Started on</p>
                                            <h6>12th Jun 2022</h6>
                                        </div>
                                        <div class="col-md-6 col-6 text-right pl-0">
                                            <button type="button" class="btn btn-danger remove-btn text-uppercase" onClick={handleShow}>PAUSE PROJECT</button>
                                        </div>
                                    </div>

                                    <h3>You have paid 40% till now. <span>Cancel this project</span></h3>

                                    <div class="row mt-3 mt-sm-4">
                                        <div class="col-md-4 col-3">
                                            <h4>Milestones</h4>
                                        </div>
                                        <div class="col-md-8 text-right col-9">
                                            <h4>05</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-5 col-5">
                                            <h4>Status</h4>
                                        </div>
                                        <div class="col-md-7 text-right col-7">
                                            <h4>40%</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-7">
                                            <h4>Last milestone achieved</h4>
                                            <h5>Milestone 3</h5>
                                        </div>
                                        <div class="col-md-6 text-right col-5">
                                            <h4>12th Jun 2022</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-8 col-7">
                                            <h4>Next deliverable due date</h4>
                                        </div>
                                        <div class="col-md-4 text-right col-5">
                                            <h4>18th Jun 2022</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="assured-secbox  mt-3">
                                    <div class="paymentpendingassuredbox">
                                        <div class="row align-items-center">
                                            <div class="col-md-2 col-3">
                                                <img src="images/tickbox.svg" class="" alt="" />
                                            </div>
                                            <div class="col-md-6 pl-0 col-9">
                                                <h1>Assured by protocall</h1>
                                                <h6><a href="#">read more <img src="images/right-as.svg" height="15px" alt="" /></a></h6>
                                            </div>
                                            <div class="col-md-4 col-6  pl-3 pl-sm-0">
                                                <img src="images/green-logo.svg" alt="" />
                                                <h5>certified</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>


                </div>
            </section>

        

            <section class="py-4 py-sm-5 footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <img src="images/Footer-logo.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br />
                                dolore magna aliqua.Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat.</p>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-3 col-6 mb-2">
                                    <h2>Service providers</h2>
                                    <ul>
                                        <li><a href="#">Explore the community</a></li>
                                        <li><a href="#">Browse via category</a></li>
                                        <li><a href="#">List of companies</a></li>
                                        <li><a href="#">Register as service provider</a></li>
                                        <li><a href="#">Frequently asked questions</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-6 mb-2">
                                    <h2>Clients</h2>
                                    <ul>
                                        <li><a href="#">Post a project</a></li>
                                        <li><a href="#">Project status</a></li>
                                        <li><a href="#">Hire a service provider</a></li>
                                        <li><a href="#">Register as a client</a></li>
                                        <li><a href="#">Frequently asked questions</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-6">
                                    <h2>Policies</h2>
                                    <ul>
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Code of conduct</a></li>
                                        <li><a href="#">Terms & conditions</a></li>
                                        <li><a href="#">Refund policy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-6">
                                    <h2>Protocall apps</h2>
                                    <div class="footbtn">
                                        <div class="row align-items-center">
                                            <div class="col-md-3 pr-0 col-3"><img src="images/Apple-foot.png" alt="" /></div>
                                            <div class="col-md-9 pl-2 col-9"><h5>Download on the <br /> App Store</h5></div>
                                        </div>
                                    </div>

                                    <div class="footbtn mt-3">
                                        <div class="row align-items-center">
                                            <div class="col-md-3 pr-0 col-3"><img src="images/Google-Play.svg" alt="" /></div>
                                            <div class="col-md-9 pl-2 col-9"><h5>Download on the <br /> App Store</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3 mt-sm-5">
                        <div class="col-md-12">
                            <h6 class="border-top">© 2022. Protocall Services. All rights Reserved</h6>
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
                            <h1>review  <span>service provider</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="row">
                        <div class="col-md-6 col-6">
                            <label for="#" class="profile-label">Availablity</label>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text font-weight-bold">4.5 stars</h4>
                        </div>
                        <div class="col-md-12">
                            <Form.Label className="range-labelmgnbtm"></Form.Label><Form.Range className="range-scrollmember" />
                        </div>
                        <div class="col-md-6 col-6">
                            <h4 class="words-text">1 star</h4>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text">5 star</h4>
                        </div>
                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-2">
                        <div class="col-md-6 col-6">
                            <label for="#" class="profile-label">Deadline</label>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text font-weight-bold">4.5 stars</h4>
                        </div>
                        <div class="col-md-12">
                            <Form.Label className="range-labelmgnbtm"></Form.Label><Form.Range className="range-scrollmember" />
                        </div>
                        <div class="col-md-6 col-6">
                            <h4 class="words-text">1 star</h4>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text">5 star</h4>
                        </div>
                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-2">
                        <div class="col-md-6 col-6">
                            <label for="#" class="profile-label">Skills</label>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text font-weight-bold">4.5 stars</h4>
                        </div>
                        <div class="col-md-12">
                            <Form.Label className="range-labelmgnbtm"></Form.Label><Form.Range className="range-scrollmember" />
                        </div>
                        <div class="col-md-6 col-6">
                            <h4 class="words-text">1 star</h4>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text">5 star</h4>
                        </div>
                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-2">
                        <div class="col-md-6 col-6">
                            <label for="#" class="profile-label">Cooperation</label>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text font-weight-bold">4.5 stars</h4>
                        </div>
                        <div class="col-md-12">
                            <Form.Label className="range-labelmgnbtm"></Form.Label><Form.Range className="range-scrollmember" />
                        </div>
                        <div class="col-md-6 col-6">
                            <h4 class="words-text">1 star</h4>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text">5 star</h4>
                        </div>
                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-2">
                        <div class="col-md-6 col-6">
                            <label for="#" class="profile-label">Quality</label>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text font-weight-bold">4.5 stars</h4>
                        </div>
                        <div class="col-md-12">
                            <Form.Label className="range-labelmgnbtm"></Form.Label><Form.Range className="range-scrollmember" />
                        </div>
                        <div class="col-md-6 col-6">
                            <h4 class="words-text">1 star</h4>
                        </div>
                        <div class="col-md-6 text-right col-6">
                            <h4 class="words-text">5 star</h4>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <button type="button" class="btn btn-login">NEXT: WRITE A REVIEW</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ClientProjectpastDetailsclose;
