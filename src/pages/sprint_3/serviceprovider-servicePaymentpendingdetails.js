import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';

function ServiceproviderServicesPaymentpendingdetails() {
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

            <section class="py-5 py-sm-5">
                <div class="container">
                    <div class="row mt-4 mt-sm-4 ">
                        <div class="col-md-8 mt-2">
                            <div class="service-head">
                                <h1><span>drainage pipe blockage removal</span></h1>
                                <h2><span><a href="#">Services</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> Payment Pending</h2>
                            </div>
                        </div>
                        <div class="col-md-4 text-sm-right">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BACK TO LIST</button>
                        </div>
                    </div>


                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-1 mt-sm-3 align-items-center">
                        <div class="col-md-9 mb-2 mb-sm-0">
                            <div class="row">

                                <div class="col-md-2 col-6 mt-2 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Earned</p>
                                        <h6>$ 1,200.00</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6  mt-2 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Booked</p>
                                        <h6>12</h6>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-3 mt-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                        <p>John Snow</p>
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3"> 
                                    <div class="serviceListeddetails-head">
                                        <p class="d-flex align-items-center justify-content-end"><img src="images/share.png" height="25px" class="mr-2" alt="" /> Share</p>
                                    </div>
                                 
                        </div>

                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-3">
                        <div class="col-md-8">

                            <div class="client-chatboxdetails ml-0 ml-sm-3 mt-2">
                                <div class="rightchatboxbg">
                                    <div class="row align-items-center">
                                        <div class="col-md-2 d-none d-sm-inline-block">
                                            <img src="images/client-chatboxrightimg.png" class="chatboxrightimg" alt="" />
                                        </div>
                                        <div class="col-md-5 mb-2 mb-sm-0">
                                            <h1>Chat with the client</h1>
                                            <p>Click here to leave a message.</p>
                                        </div>
                                        <div class="col-md-5 text-right">
                                            <button type="button" class="btn btn-login ml-4 " onClick={handleShow} >CHAT WITH CLIENT NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-5 mb-3 mb-sm-0">
                                    <div class="service-detailscont">
                                        <h4>Client details</h4>
                                    </div>

                                    <div class="scheduled-lefttext">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h6>Customer name</h6>
                                                <p>John Snow</p>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <h6>Location</h6>
                                                <p>ABC blvd, Main Street, Seattle, Washington</p>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <h6>Services taken</h6>
                                                <p>45</p>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <h6>Total spent</h6>
                                                <p>$ 4,500.00</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-7">
                                    <div class="service-detailscont">
                                        <h4>Reviews</h4>
                                        <h5><img src="images/star-r.svg" class="mr-1" alt="" height="15px" />4.7 <span>(147 reviews)</span></h5>
                                    </div>
                                    <div class="reviews-rating mt-2 ">
                                        <div class="row">
                                            <div class="col-md-3 col-6">
                                                <p>Cooperation</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                <p>Flexibility</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                            <div class="col-md-3 col-6">
                                                <p>Communication</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                            <div class="col-md-4 col-6">
                                                <p>Timely payments</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-md-2 col-2">
                                                <h3>443</h3>
                                                <h4>5 stars</h4>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <h3>39</h3>
                                                <h4>4 stars</h4>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <h3>12</h3>
                                                <h4>3 stars</h4>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <h3>3</h3>
                                                <h4>2 stars</h4>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <h3>3</h3>
                                                <h4>1 stars</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-bottom mt-4"></div>



                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="service-detailscont">
                                        <h4>Service details</h4>
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

                                    <div class="included-service mt-4 mb-2">
                                        <div class="included-servicehead">
                                            <div class="row">
                                                <div class="col-md-6 pl-4 pl-sm-5 col-6">
                                                    <h1>Included in this service</h1>
                                                </div>
                                                <div class="col-md-6 pl-4 pl-sm-5 col-6">
                                                    <h1>Included in this service</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-2">
                                            <div class="col-md-6 col-6">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3  pl-4 pl-sm-5">
                                                        <img src="images/box-check.svg" class="" alt="" />
                                                    </div>
                                                    <div class="col-md-9  pl-4 pl-sm-0"><p>Drainage cleaning related activities</p></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-cross.svg" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Additional installations</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-2">
                                            <div class="col-md-6 col-6">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-check.svg" class="" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Grouting repair work</p></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-cross.svg" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Equipments upon inspection</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-2">
                                            <div class="col-md-6 col-6">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-check.svg" class="" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Light cement work</p></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-cross.svg" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Materials upon inspection</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-2">
                                            <div class="col-md-6 col-6">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-check.svg" class="" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Plumbing related consultation</p></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <div class="row">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-cross.svg" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>Other than plumbing service</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-2 pb-3 pb-sm-4">
                                            <div class="col-md-6 col-6">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pl-4 pl-sm-5">
                                                        <img src="images/box-check.svg" class="" alt="" />
                                                    </div>
                                                    <div class="col-md-9 pl-4 pl-sm-0"><p>4 week post service guarantee</p></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-bottom mt-4"></div>

                                    <div class="service-detailscont mt-3">
                                        <h4>Extra charges</h4>
                                    </div>

                                    <div class="included-service mt-4 mb-2">
                                        <div class="included-servicehead">
                                            <div class="row">
                                                <div class="col-md-2 col-2 pl-4 pl-sm-5">
                                                    <h1>Sr. no.</h1>
                                                </div>
                                                <div class="col-md-5 col-5">
                                                    <h1>Particulars</h1>
                                                </div>
                                                <div class="col-md-2 col-2">
                                                    <h1>Qty</h1>
                                                </div>
                                                <div class="col-md-3 col-3 text-right pr-4 pr-sm-5">
                                                    <h1>Cost</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-2">
                                            <div class="col-md-2 col-2 pl-4 pl-sm-5 ">
                                                <p>01</p>
                                            </div>
                                            <div class="col-md-5 col-5">
                                                <p>Drainage cleaning related activities</p>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <p>x 1</p>
                                            </div>
                                            <div class="col-md-3 col-3 text-right pr-4 pr-sm-5">
                                                <p>$109.00</p>
                                            </div>
                                        </div>

                                        <div class="row mt-1 mt-sm-3">
                                            <div class="col-md-2 pl-4 pl-sm-5 col-2">
                                                <p>02</p>
                                            </div>
                                            <div class="col-md-5 col-5">
                                                <p>Grouting repair work</p>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <p>x 2</p>
                                            </div>
                                            <div class="col-md-3 text-right pr-4 pr-sm-5 col-3">
                                                <p>$109.00</p>
                                            </div>
                                        </div>

                                        <div class="row mt-1 mt-sm-3">
                                            <div class="col-md-2 pl-4 pl-sm-5 col-2">
                                                <p>03</p>
                                            </div>
                                            <div class="col-md-5 col-5">
                                                <p>Light cement work</p>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <p>x 1</p>
                                            </div>
                                            <div class="col-md-3 col-3 text-right pr-4 pr-sm-5">
                                                <p>$109.00</p>
                                            </div>
                                        </div>
                                        <div class="row mt-1 mt-sm-3 pb-3 pb-sm-4">
                                            <div class="col-md-2 pl-4 pl-sm-5 col-2">
                                                <p>04</p>
                                            </div>
                                            <div class="col-md-5 col-5">
                                                <p>Plumbing related consultation</p>
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <p>x 4</p>
                                            </div>
                                            <div class="col-md-3 text-right pr-4 pr-sm-5 col-3">
                                                <p>$109.00</p>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 mb-2 mt-2 mt-sm-0">

                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox">
                                    <div class="booked-forbox paymentpendingdetailsboxright">
                                        <p>Ended on</p>
                                        <h6>24th Jun, 2022 at 5:45pm</h6>
                                    </div>

                                    <div class="row align-items-end">
                                        <div class="col-md-12 ">
                                            <h2>INVOICE</h2>
                                            <h1 class="mt-3">$730.00</h1>
                                            <button type="button" class="btn btn-login mt-2">GENERATE PAYMENT REQUEST</button>
                                        </div>

                                    </div>

                                    <div class="dashed-borderfixedbox mt-4"></div>

                                    <div class="row  pt-3">
                                        <div class="col-md-4 col-3">
                                            <h4>Duration</h4>
                                        </div>
                                        <div class="col-md-8 text-right col-9">
                                            <h4>3 hrs 15 min</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-5 col-5">
                                            <h4>Visiting charges</h4>
                                        </div>
                                        <div class="col-md-7 text-right col-7">
                                            <h4>- $20.00</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-8 col-8">
                                            <h4>Extra (by service provider)</h4>

                                        </div>
                                        <div class="col-md-4 text-right col-4">
                                            <h4>$288.00</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-8 col-8">
                                            <h4>Applicable taxes (@10%)</h4>
                                            <h5>GST, VAT all incl.</h5>
                                        </div>
                                        <div class="col-md-4 text-right col-4">
                                            <h4>$75.00</h4>
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

export default ServiceproviderServicesPaymentpendingdetails;
