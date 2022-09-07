import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';


function ServiceproviderServicesHistoryDetailsreview () {

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
                                <h2><span><a href="#">Services</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" />Service History</h2>
                            </div>
                        </div>
                        <div class="col-md-4 text-sm-right">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BACK TO LIST</button>
                        </div>
                    </div>


                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-3 align-items-center">
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="serviceListeddetails-head">
                                        <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                        <p>Gordan Entreprise Inc.</p>
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                </div>

                                <div class="col-md-3 my-2 my-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Service booked (till now)</p>
                                        <h6>15</h6>
                                    </div>
                                </div>
                                <div class="col-md-3 my-2 my-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Member since</p>
                                        <h6>4 years 3 months</h6>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col-md-3 mt-2 mt-sm-0"> 
                            <div class="serviceListeddetails-head">
                                <p class="d-flex align-items-center justify-content-end"><img src="images/share.png" height="25px" class="mr-2" alt="" /> Share</p>
                            </div>
                                
                        </div>

                    </div>

                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-3">
                        <div class="col-md-8 mb-3 mb-sm-0">
                            <div class="row mt-1">
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

                                    <div class="included-service mt-4">
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



                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 mt-2 mt-sm-0">

                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox">
                                    <div class="booked-forbox paymentpendingdetailsboxright">
                                        <p>Ended on</p>
                                        <h6>24th Jun, 2022 at 5:45pm</h6>
                                    </div>

                                    <div class="row align-items-end">
                                        <div class="col-md-12 mb-3">
                                            <h2>INVOICE</h2>
                                        </div>
                                        <div class="col-md-8 col-8">
                                            <h1 >$730.00</h1>
                                            <button type="button" class="btn btn-login mt-2" onClick={handleShow} >REVIEW THIS CLIENT</button>
                                        </div>
                                        <div class="col-md-4 col-4">
                                            <img src="images/paid.svg" alt="" />
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

            {/*  */}

            <Modal show={show} onHide={handleClose} className="filter-popup modal-dialog-slideout">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div class="service-head">
                            <img src="images/popup-logo.svg" height="45px" alt="" />
                            <h1>feedback for <span>client</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="serviceListeddetails-head booking-confrd ">
                                <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                <p>Gordan Entreprise Inc.</p>
                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                            </div>
                        </div>

                        <div class="col-md-12 mt-3">
                            <div class="form-group">
                                <textarea class="form-control login-input profile-inpt text-input" placeholder="Write a review here …." rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">SUBMIT MY FEEDBACK</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ServiceproviderServicesHistoryDetailsreview;
