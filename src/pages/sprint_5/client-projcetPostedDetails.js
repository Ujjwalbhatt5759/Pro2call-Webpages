import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Form } from 'react-bootstrap';

function ClientprojectPostedDetails() {


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
                        <div class="col-md-8 mt-2 pr-0">
                            <div class="service-head">
                                <h1><span>full bathroom hardware installation for corporate office</span></h1>
                                <h2><span><a href="#">Projects</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> Posted</h2>
                            </div>
                        </div>

                        <div class="col-md-4 text-sm-right">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BACK TO LIST</button>
                        </div>
                    </div>

                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-3 align-items-center">
                                <div class="col-md-6 mb-2 mb-sm-0">
                                    <button type="button" class="btn btn-warning exlpore-btn new-explorebtn text-uppercase mr-3">VIEW BIDDERS</button>
                                    <button class="uploadBtn  text-uppercase">INVITE BIDDERS</button>
                                </div>
                                <div class="col-md-6 text-sm-right text-left">
                                <button type="button" class="btn btn-login">EDIT THIS PROJECT</button>
                                </div>
                            </div>
                  

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-3">
                        <div class="col-md-8 mb-3 mb-sm-0">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="service-detailscont">
                                        <h4>Skills required</h4>
                                    </div>

                                    <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                                    <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                                    <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                                    <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem</button>
                                    <button type="button" class="btn btn-info skill-btn">Skill lorem</button>

                                    <div class="service-detailscont mt-3 mt-sm-4">
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

                                    <div class="border-bottom mt-3"></div>

                                    <div class="service-detailscont mt-3">
                                        <h4>Project milestones</h4>
                                    </div>

                                    <Accordion defaultActiveKey="0" className="accordreact projectmilestoneaccord">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div class="row align-items-center">
                                                    <div class="col-md-6 col-9">
                                                        <div class="projectmilestone-headtext">
                                                            <p><img src="images/milestone.svg" alt="" /> Milestone - 1</p>
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
                                                    <div class="delivery-milestoneboxaccord">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>Deliverables in this milestone</p>

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
                                                        </div>

                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                            <div class="row align-items-center">
                                                    <div class="col-md-6 col-9">
                                                        <div class="projectmilestone-headtext">
                                                            <p><img src="images/milestone.svg" alt="" /> Milestone - 2</p>
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
                                                    <div class="delivery-milestoneboxaccord">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>Deliverables in this milestone</p>

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
                                                        </div>

                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                            <div class="row align-items-center">
                                                    <div class="col-md-6 col-9">
                                                        <div class="projectmilestone-headtext">
                                                            <p><img src="images/milestone.svg" alt="" /> Milestone - 3</p>
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
                                                    <div class="delivery-milestoneboxaccord">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>Deliverables in this milestone</p>

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
                                                        </div>

                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                            <div class="row align-items-center">
                                                    <div class="col-md-6 col-9">
                                                        <div class="projectmilestone-headtext">
                                                            <p><img src="images/milestone.svg" alt="" /> Milestone - 4</p>
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
                                                    <div class="delivery-milestoneboxaccord">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <p>Deliverables in this milestone</p>

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
                                                        </div>

                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>





                                </div>
                            </div>


                        </div>

                        <div class="col-md-4">
                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox new-fixedcost">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>YOUR BUDGET</h2>
                                            <h1>$300 - $500</h1>
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-between">
                                            <div>
                                                <p>Total bids</p>
                                                <span className="new-costvalue">10</span>
                                            </div>
                                            <div>
                                                <p>Shortlisted</p>
                                                <span className="new-costvalue">9</span>
                                            </div>
                                            <div class="pl-sm-0 pl-3">
                                                <p>Days left</p>
                                                <span className="new-costvalue">8</span>
                                            </div>
                                            <div>
                                                <p>Listed on</p>
                                                <h6>12th Jun 2022</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <h3>Average bid for this project is $350.00</h3>

                                    <div class="row mt-3 mt-sm-4">
                                        <div class="col-md-4 col-3">
                                            <h4>Duration</h4>
                                        </div>
                                        <div class="col-md-8 text-right col-9">
                                            <h4>2 - 4 days</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-5 col-5">
                                            <h4>Location</h4>
                                        </div>
                                        <div class="col-md-7 text-right col-7">
                                            <span class="seattle-Washinton">Seattle, Washinton (4 mi.)</span>
                                        </div>
                                    </div>

                                    <div class="row text-center mt-3">
                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-danger remove-btn new-removebtn text-uppercase">CLOSE PROJECT FOR BIDDING</button>
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


        </>
    );
}

export default ClientprojectPostedDetails;
