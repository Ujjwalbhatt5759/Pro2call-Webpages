import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import Slider from "react-slick";

var sliderfirstsetting = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
};

var slidersecondsetting = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
};



function ClientbrowseDetails() {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

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

            <section class="pt-5 pt-sm-5">
                <div class="container">
                    <div class="row mt-4 mt-sm-4 ">
                        <div class="col-md-9 mt-2">
                            <div class="service-head">
                                <h1><span>full bathroom hardware installation for corporate office</span></h1>
                                <h2><span><a href="#">Services</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> Scheduled service</h2>
                            </div>
                        </div>
                        <div class="col-md-1 text-right d-none d-sm-block pr-0 pl-0">
                            <h6 class="mt-5 pt-1 pipe-head"><img src="images/verify.png" class="mr-1 mb-1" alt="" /> COMPANY</h6>
                        </div>
                        <div class="col-md-2 text-right d-none d-sm-block ">
                            <button type="button" class="btn btn-light details-btn mt-5" >BACK TO LIST</button>
                        </div>
                    </div>


                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-3 align-items-center">
                        <div class="col-md-9 col-12 mb-2 mb-sm-0">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="serviceListeddetails-head">
                                        <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                        <p>Gordan Entreprise Inc.</p>
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6  d-none d-sm-block">
                                    <div class="serviceListeddetails-head">
                                        <p>Completed</p>
                                        <h6>2,489</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6  d-none d-sm-block">
                                    <div class="serviceListeddetails-head">
                                        <p>Total hours</p>
                                        <h6>47,890</h6>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6 d-none d-sm-block">
                                    <div class="serviceListeddetails-head">
                                        <p>Member since</p>
                                        <h6>4 years 3 months</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3 col-8">
                            <div class="row">
                                <div class="col-md-6 col-6">
                                    <div class="serviceListeddetails-head">
                                        <p class="d-flex align-items-center justify-content-end"><img src="images/share.png" height="25px" class="mr-2" alt="" /> Share</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6">
                                    <div class="serviceListeddetails-head">
                                        <p class="d-flex align-items-center justify-content-end"><img src="images/save.png" height="25px" class="mr-2" alt="" /> Save</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-3">
                        <div class="col-md-8 mb-3">

                            <div class="row">
                                <div class="col-md-12">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}  {...sliderfirstsetting}>
                                        <div>
                                            <div class="fixed-costproductimg">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>

                                <div class="col-md-12 mt-2">
                                    <Slider asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        {...slidersecondsetting}
                                    >
                                        <div>
                                            <div class="fixed-costproductimg fixed-costproductimg2">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg fixed-costproductimg2">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg fixed-costproductimg2">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg fixed-costproductimg2">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg fixed-costproductimg2">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fixed-costproductimg fixed-costproductimg2">
                                                <img src="images/details.jpg" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>

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
                                        <div class="row mt-1 mt-sm-2 pb-3 pb-sn-4">
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

                                    <div class="assured-secbox mt-4">
                                        <div class="row ">
                                            <div class="col-md-1">
                                                <img src="images/tickbox.svg" class="" alt="" />
                                            </div>
                                            <div class="col-md-8 pl-3 pl-sm-0">
                                                <h1>Assured by protocall</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br class="d-none d-sm-block" /> eiusmod tempor incididunt ut labore et dolore.</p>
                                                <h6><a href="#">read more <img src="images/right-as.svg" height="20px" alt="" /></a></h6>
                                            </div>
                                            <div class="col-md-3 green-bg">
                                                <img src="images/green-logo.svg" class="mt-1 mt-sm-4" alt="" />
                                                <h5>certified</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-bottom mt-3 mb-3"></div>

                                    <div class="row pt-2">
                                        <div class="col-md-12">
                                            <div class="service-detailscont">
                                                <h4>Frequently asked questions</h4>
                                            </div>

                                            <Accordion defaultActiveKey="0" className="faq-accordian mt-3" >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ? <img src="images/arrow-down.svg" class="accordup" alt="" />
                                                        <img src="images/arrow-up.svg" class="accorddown" alt="" />
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur esse cillum dolore eu
                                                        fugiat nulla pariatur.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ? <img src="images/arrow-down.svg" class="accordup" alt="" />
                                                        <img src="images/arrow-up.svg" class="accorddown" alt="" />
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur esse cillum dolore eu
                                                        fugiat nulla pariatur.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ? <img src="images/arrow-down.svg" class="accordup" alt="" />
                                                        <img src="images/arrow-up.svg" class="accorddown" alt="" />
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur esse cillum dolore eu
                                                        fugiat nulla pariatur.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ? <img src="images/arrow-down.svg" class="accordup" alt="" />
                                                        <img src="images/arrow-up.svg" class="accorddown" alt="" />
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur esse cillum dolore eu
                                                        fugiat nulla pariatur.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                            <div class="border-bottom mt-4 "></div>
                                        </div>
                                    </div>

                                    <div class="service-detailscont mt-4">
                                        <h4>About the service provider</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <a href="#">read more <img src="images/arrow-deatil.svg" height="20px" alt="" /></a>
                                    </div>

                                    <div class="border-bottom mt-3 "></div>

                                    <div class="row mt-3 mt-sm-4">
                                        <div class="col-md-12">
                                            <div class="service-detailscont">
                                                <h4>Reviews</h4>
                                                <h5><img src="images/star-r.svg" class="mr-1" alt="" height="15px" />4.7 <span>(147 reviews)</span></h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-rating mt-2 ">
                                        <div class="row">
                                            <div class="col-md-2 col-6">
                                                <p>Cooperation</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                <p>Flexibility</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                <p>Communication</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                            <div class="col-md-3 col-6">
                                                <p>Timely payments</p>
                                                <h6><img src="images/star-r.svg" class="mr-1" alt="" height="13px" />4.9</h6>
                                            </div>
                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-md-1 col-2">
                                                <h3>443</h3>
                                                <h4>5 stars</h4>
                                            </div>
                                            <div class="col-md-1 col-2">
                                                <h3>39</h3>
                                                <h4>4 stars</h4>
                                            </div>
                                            <div class="col-md-1 col-2">
                                                <h3>12</h3>
                                                <h4>3 stars</h4>
                                            </div>
                                            <div class="col-md-1 col-2">
                                                <h3>3</h3>
                                                <h4>2 stars</h4>
                                            </div>
                                            <div class="col-md-1 col-2">
                                                <h3>3</h3>
                                                <h4>1 stars</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="review-providerSec mt-3 mt-sm-4">
                                        <h1>Reviews by previous service providers</h1>
                                        <div class="border-bottom mt-2 mt-sm-3"></div>
                                        <div class="row mt-4">
                                            <div class="col-md-6 mb-3">
                                                <div class="row">
                                                    <div class="col-md-3 col-3 text-center">
                                                        <div class="review-proimg">
                                                            <img src="images/girlw.jpg" alt="" />
                                                        </div>
                                                        <h2><img src="images/star-rew.svg" height="15px" class="mr-1 pt-1" alt="" />  4.9</h2>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <h3>Mr. John Doe</h3>
                                                        <p>Excellent support with a thoroughly professional outlook. Amazing… good job</p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-8 col-8"><h3>Seattle, Washington</h3></div>
                                                            <div class="col-md-4 col-4 pl-0 text-right"><h3>Jun, 2022</h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <div class="row">
                                                    <div class="col-md-3 col-3 text-center">
                                                        <div class="review-proimg">
                                                            <img src="images/girlw.jpg" alt="" />
                                                        </div>
                                                        <h2><img src="images/star-rew.svg" height="15px" class="mr-1 pt-1" alt="" />  4.9</h2>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <h3>Mr. John Doe</h3>
                                                        <p>Excellent support with a thoroughly professional outlook. Amazing… good job</p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-8 col-8"><h3>Seattle, Washington</h3></div>
                                                            <div class="col-md-4 col-4 pl-0 text-right"><h3>Jun, 2022</h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <div class="row">
                                                    <div class="col-md-3 col-3 text-center">
                                                        <div class="review-proimg">
                                                            <img src="images/girlw.jpg" alt="" />
                                                        </div>
                                                        <h2><img src="images/star-rew.svg" height="15px" class="mr-1 pt-1" alt="" />  4.9</h2>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <h3>Mr. John Doe</h3>
                                                        <p>Excellent support with a thoroughly professional outlook. Amazing… good job</p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-8 col-8"><h3>Seattle, Washington</h3></div>
                                                            <div class="col-md-4 col-4 pl-0 text-right"><h3>Jun, 2022</h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <div class="row">
                                                    <div class="col-md-3 col-3 text-center">
                                                        <div class="review-proimg">
                                                            <img src="images/girlw.jpg" alt="" />
                                                        </div>
                                                        <h2><img src="images/star-rew.svg" height="15px" class="mr-1 pt-1" alt="" />  4.9</h2>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <h3>Mr. John Doe</h3>
                                                        <p>Excellent support with a thoroughly professional outlook. Amazing… good job</p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-8 col-8"><h3>Seattle, Washington</h3></div>
                                                            <div class="col-md-4 col-4 pl-0 text-right"><h3>Jun, 2022</h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <div class="row">
                                                    <div class="col-md-3 col-3 text-center">
                                                        <div class="review-proimg">
                                                            <img src="images/girlw.jpg" alt="" />
                                                        </div>
                                                        <h2><img src="images/star-rew.svg" height="15px" class="mr-1 pt-1" alt="" />  4.9</h2>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <h3>Mr. John Doe</h3>
                                                        <p>Excellent support with a thoroughly professional outlook. Amazing… good job</p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-8 col-8"><h3>Seattle, Washington</h3></div>
                                                            <div class="col-md-4 col-4 pl-0 text-right"><h3>Jun, 2022</h3></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <div class="row">
                                                    <div class="col-md-3 col-3 text-center">
                                                        <div class="review-proimg">
                                                            <img src="images/girlw.jpg" alt="" />
                                                        </div>
                                                        <h2><img src="images/star-rew.svg" height="15px" class="mr-1 pt-1" alt="" />  4.9</h2>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <h3>Mr. John Doe</h3>
                                                        <p>Excellent support with a thoroughly professional outlook. Amazing… good job</p>
                                                        <div class="row mt-2">
                                                            <div class="col-md-8 col-8"><h3>Seattle, Washington</h3></div>
                                                            <div class="col-md-4 col-4 pl-0 text-right"><h3>Jun, 2022</h3></div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div class="border-bottom mt-2 mt-sm-3"></div>
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 mb-2">

                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox">
                                    <div class="row align-items-end">
                                        <div class="col-md-5 col-6">
                                            <h2>FIXED COST</h2>
                                            <h1>$750.00</h1>
                                            <p>Listed on</p>
                                            <h6>12th Jun 2022</h6>
                                        </div>
                                        <div class="col-md-7 col-6 text-right">
                                            <button type="button" class="btn btn-login" onClick={handleShow} >BOOK A SLOT</button>
                                        </div>
                                    </div>

                                    <h3>Pay $20 now and rest to pro after the service.</h3>

                                    <div class="row mt-3 mt-sm-4">
                                        <div class="col-md-4 col-3">
                                            <h4>Duration</h4>
                                        </div>
                                        <div class="col-md-8 text-right col-9">
                                            <h4>Depends on the scope of work</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-5 col-5">
                                            <h4>Visiting charges</h4>
                                        </div>
                                        <div class="col-md-7 text-right col-7">
                                            <h4>$20</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-8">
                                            <h4>Cancellation charges</h4>
                                            <h5>24hrs. after booking the slot</h5>
                                        </div>
                                        <div class="col-md-6 text-right col-4">
                                            <h4>$40</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-8 col-8">
                                            <h4>Applicable taxes (@10%)</h4>
                                        </div>
                                        <div class="col-md-4 text-right col-4">
                                            <h4>$75</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="Conveniencebox service-head p-3 mt-3">
                                    <div class="row">
                                        <div class="col-md-2 col-2">
                                            <img src="images/receipt-item.svg" />
                                        </div>

                                        <div class="col-md-10 col-10 ml-0 pl-0 convenience-bg">
                                            <h4>Convenience fee</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                            <h2><span><a href="#">read more</a></span> <img src="images/service-arrowright.svg" alt="" /></h2>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>

            <section class="pb-4 pb-sm-5">
                <div class="container">
                   
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <img src="images/project-left.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-md-6">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="top-bannerHead">
                                        <h1>post a<span> project</span></h1>
                                        <h2>in less than a minute</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip
                                            ex ea commodo consequat.</p>
                                        <button type="button" class="btn btn-login mt-0 mt-sm-2">POST A PROJECT</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mobile-sec">
                                <div class="row align-items-center">
                                    <div class="col-md-4 offset-md-1">
                                        <div class="mobile-secContent">
                                            <img src="images/mobile-seclogo.png" class="circle-logo" alt="" />
                                            <h1>Download the App</h1>
                                            <p>Explore the community, hire a service provider or post a project</p>
                                            <div class="row mt-3">
                                                <div class="col-md-6 col-6 pr-2">
                                                    <div class="footbtn mobilesec-btn">
                                                        <Link to="/">
                                                            <div class="row align-items-center">
                                                                <div class="col-md-3 pr-0 col-3"><img src="images/mobile-apple.svg" alt="" /></div>
                                                                <div class="col-md-9 pl-2 col-9"><h5>Download on the  <span>App Store</span></h5></div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-6 pl-2">
                                                    <div class="footbtn mobilesec-btn">
                                                        <Link to="/">
                                                            <div class="row align-items-center">
                                                                <div class="col-md-3 pr-0 col-3"><img src="images/mobile-playstore.svg" alt="" /></div>
                                                                <div class="col-md-9 pl-2 col-9"><h5>Download on the <span>Play Store</span></h5></div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="text-right">
                                                <img src="images/mobile-net.png" alt="" class="down-cirle-botom" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-5 offset-md-1 mobile-rightbg">
                                        <img src="images/mobile-right.png" alt="" />
                                    </div>
                                </div>

                            </div>


                            <div class="row justify-content-center mt-1 mt-sm-4">
                                <div class="col-md-10">
                                    <img src="images/mobilesec-bottomimg.png" class="mb-3 mb-sm-0" alt="" />
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

export default ClientbrowseDetails;
