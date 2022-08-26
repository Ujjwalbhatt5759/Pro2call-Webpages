import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

import MultiRangeSlider from "multi-range-slider-react";

import Slider from "react-slick";

var clientsettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
};

function Browseservice() {



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

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

            <section class="pt-4 pt-sm-5 browse-section">
                <div class="container">
                    <div class="row pt-5 pt-ms-5">
                        <div class="col-md-5">
                            <div class="top-banner-searchbar browse-searchbar  position-relative">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-8 pr-0 pr-sm-3">
                                        <img src="images/search.svg" class="search-icon" alt="" />
                                        <input type="email" class="form-control search-inpt" placeholder="Drainage in Plumber" />
                                    </div>
                                    <div class="col-md-5 text-right col-4 pr-2 pr-sm-4">
                                        <button type="button" class="btn btn-login mr-2">SEARCH</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-md-12">
                                    <ul>
                                        <li class="first-text">Trending:</li>
                                        <li><a href="#">AC Repair</a></li>
                                        <li><a href="#">Architect</a></li>
                                        <li><a href="#">Web Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 pt-3 pt-sm-0">
                            <div class="top-banner-searchbar browse-searchbar position-relative">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-8 pr-0 pr-sm-3">
                                        <img src="images/location.svg" class="search-icon" alt="" />
                                        <input type="email" class="form-control search-inpt" placeholder="Seattle, Washington" />
                                    </div>
                                    <div class="col-md-5 text-right col-4 pr-2 pr-sm-4">
                                        <button type="button" class="btn btn-login browse-btn mr-2">SEARCH</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-3 found-section">
                <div class="container">
                    <div class="found-box">
                        <div class="row align-items-center">
                            <div class="col-md-7 col-12">
                                <div class="client-profilehead">
                                    <h1>found <span> 132 results</span> in drainage</h1>
                                    <h2>plumber in “Seattle, Washington”</h2>
                                </div>
                            </div>

                            <div class="col-md-5 col-12 mt-3 mt-sm-0">
                                <div class="row align-items-center">
                                    <div class="col-md-4">
                                        <h6 onClick={handleShow} ><img src="images/filter.svg" alt="" height="27px" /> Filter results</h6>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="filter-box">
                                            <div class=" d-flex align-items-center">
                                                <img src="images/arrow.svg" alt="" height="22px" />
                                                <select class="form-control form-select" aria-label=".form-select-lg example">
                                                    <option value="3">Sort listing</option>
                                                    <option>Newest listing first</option>
                                                    <option>Lowest budget</option>
                                                    <option>Highest budget</option>
                                                    <option>Oldest listing first</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-12">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" class="mr-2" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right">
                                            <h5>FIXED COST</h5>
                                            <h3>$750.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img1.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center gay-textfond">
                                            <h6> <img src="images/gray-brwn.svg" class="mr-2" alt="" /> INDIVIDUAL</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/john.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right ">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right hourly-right">
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

                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img2.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" class="mr-2" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right start-right">
                                            <h5>STARTING FROM</h5>
                                            <h3>$299.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img4.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" class="mr-2" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right">
                                            <h5>FIXED COST</h5>
                                            <h3>$790.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img5.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" class="mr-2" alt="" /> VERIFIED</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/pro-userpic.jpg" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right">
                                            <h5>FIXED COST</h5>
                                            <h3>$750.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img6.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" class="mr-2" alt="" /> VERIFIED</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right">
                                            <h5>FIXED COST</h5>
                                            <h3>$499.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row mt-4">
                        <div class="col-md-12">
                            <nav aria-label="...">
                                <ul class="pagination pagination-lg">
                                    <li class="page-item active">
                                        <a href="#" class="page-link">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link newpage-link" href="#">.........</a></li>
                                    <li class="page-item"><a class="page-link" href="#">11</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </section>

            <section class="position-relative py-4 py-sm-5">
                <div class="container">
                    <div class="row">
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
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="service-head ">
                                <img src="images/sec-logo.svg" class="mb-2" alt="" />
                                <h1>protocall <span>trusted by</span></h1>
                                <h2><span><a href="#">view more clients</a></span> <img src="images/service-arrowright.svg" alt="" /></h2>
                                <span class="logo-img">
                                    <img src="images/amazon-logo.svg" height="23px" alt="" /><img src="images/airbus-logo.svg" height="18px" alt="" /><img src="images/deloitte-logo.svg" height="18px" alt="" />
                                    <img src="images/google-logo.svg" height="25px" alt="" /> <br /> <img src="images/facebook-logo.svg" height="18px" class="mt-3" alt="" /><img src="images/Ibm-logo.svg" class="mt-3" height="24px" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="trusted-manSec">
                                <Slider className="clientslider" {...clientsettings}>
                                    <div>
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <img src="images/comma.svg" class="comma-img mb-2" alt="" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                            nisi ut aliquip ex ea commodo consequat.</p>
                                                        <h2>Alan Keech</h2>
                                                        <p>Senior project manager for Example company</p>
                                                        <h5><a href="#">Read more</a></h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="young-manSec">
                                                            <img src="images/Young-Man2.png" class="young-manimg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <img src="images/comma.svg" class="comma-img mb-2" alt="" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                            nisi ut aliquip ex ea commodo consequat.</p>
                                                        <h2>Alan Keech</h2>
                                                        <p>Senior project manager for Example company</p>
                                                        <h5><a href="#">Read more</a></h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="young-manSec">
                                                            <img src="images/Young-Man2.png" class="young-manimg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
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
                            <h1>filter <span>results</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="#" class="profile-label mt-1">Budget</label>
                    <div class="form-group">
                        <input class="filled-in" type="checkbox" value="" id="Check" />
                        <label class="checkFrom-label" for="Check">
                            Fixed price
                        </label>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div className="App">
                                <MultiRangeSlider
                                    min={0}
                                    max={100}
                                    step={5}
                                    ruler={true}
                                    label={true}
                                    preventWheel={false}
                                    minValue={minValue}
                                    maxValue={maxValue}
                                    onInput={(e) => {
                                        handleInput(e);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group mt-3 mb-0">
                        <input class="filled-in" type="checkbox" value="" id="Check1" />
                        <label class="checkFrom-label" for="Check1">
                            Hourly
                        </label>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                        <div className="App">
                                <MultiRangeSlider
                                    min={0}
                                    max={100}
                                    step={5}
                                    ruler={true}
                                    label={true}
                                    preventWheel={false}
                                    minValue={minValue}
                                    maxValue={maxValue}
                                    onInput={(e) => {
                                        handleInput(e);
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="select-box form-group">
                                <select className="form-control select-checkout">
                                    <option value="3">All durations</option>
                                    <option>Newest listing first</option>
                                    <option>Lowest budget</option>
                                    <option>Highest budget</option>
                                    <option>Oldest listing first</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom"></div>
                    <label for="#" class="profile-label mt-2">Type</label>
                    <div class="row">
                        <div class="col-md-3 col-4">
                            <div class="form-group">
                                <input class="filled-in" type="checkbox" value="" id="Check2" />
                                <label class="checkFrom-label" for="Check2">
                                    Individual
                                </label>
                            </div>
                        </div>
                        <div class="col-md-3 col-4">
                            <div class="form-group">
                                <input class="filled-in" type="checkbox" value="" id="Check3" />
                                <label class="checkFrom-label" for="Check3">
                                    Company
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom"></div>
                    <label for="#" class="profile-label mt-2">Rating</label>
                    <div class="row">
                        <div class="col-md-4 col-4 col-6">
                            <div class="form-group">
                                <input class="filled-in" type="checkbox" value="" id="Check4" />
                                <label class="checkFrom-label" for="Check4">
                                    4 - 5 Stars
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 col-6 ">
                            <div class="form-group">
                                <input class="filled-in" type="checkbox" value="" id="Check5" />
                                <label class="checkFrom-label" for="Check5">
                                    3 - 4 stars
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="form-group">
                                <input class="filled-in" type="checkbox" value="" id="Check6" />
                                <label class="checkFrom-label" for="Check6">
                                    2 - 3 stars
                                </label>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-login">Apply filters</button>
                    <button type="button" class="btn btn-outline-danger remove-btnoutline">Remove filters</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default Browseservice;