import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav } from 'react-bootstrap';
import MultiRangeSlider from "multi-range-slider-react";



function ServiceproviderindividualProfileswitch () {

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
                                <a href="#"><img src="images/Logo.svg" alt="" /></a>
                            </div>
                            <div class="col-md-9 col-7">
                                <ul class="tophead-right">
                                    <li class="client-loginHead d-none d-sm-block">
                                        <a href="#">
                                            <img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>SERVICE PROVIDER</span>
                                        </a>
                                    </li>
                                    <li class=" d-none d-sm-block">
                                        <a href="#">
                                            <div class="filter-box  switch-selctbox">
                                                <div class=" d-flex align-items-center">
                                                    <img src="images/switch-user.svg" alt="" height="14px" />
                                                    <select class="form-control form-select switch-select" aria-label=".form-select-lg example">
                                                        <option value="3">Switch Profile</option>
                                                        <option>Newest listing first</option>
                                                        <option>Lowest budget</option>
                                                        <option>Highest budget</option>
                                                        <option>Oldest listing first</option>
                                                    </select>
                                                </div>
                                            </div>
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
                            <Nav.Link href="#" className="active"><img src="images/blue-status.svg" alt="" />BROWSE</Nav.Link>
                            <Nav.Link href="#"><img src="images/note.svg" alt="" />PROJECTS</Nav.Link>
                            <Nav.Link href="#"><img src="images/bold-cal.svg" alt="" />SERVICES</Nav.Link>
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
                    <div class="row pt-2 pt-sm-3 align-items-center">
                        <div class="col-md-5 mb-2 mb-sm-0">
                            <div class="top-banner-searchbar browse-searchbar  position-relative">
                                <div class="row align-items-center">
                                    <div class="col-md-8 col-8 pr-0 pr-sm-3">
                                        <img src="images/search.svg" class="search-icon" alt="" />
                                        <input type="email" class="form-control search-inpt" placeholder="Hardware installation in Plumber" />
                                    </div>
                                    <div class="col-md-4 text-right col-4 pr-2 pr-sm-4">
                                        <button type="button" class="btn btn-login mr-2">SEARCH</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mb-2 mb-sm-0">
                            <h4 class="words-text">Set proximity radius</h4>
                            <div class="mt-2">
                                <Form.Label></Form.Label><Form.Range className="range-scrollmember" />
                            </div>

                            <h4 class="words-text text-center">25mi.</h4>
                        </div>
                        <div class="col-md-4 found-section">
                            <div class="row align-items-center">
                                <div class="col-md-5 mb-2 mb-sm-0">
                                    <h6 onClick={handleShow} ><img src="images/filter.svg" alt="" height="27px" /> Filter results</h6>
                                </div>
                                <div class="col-md-7 pl-3 pl-sm-0">

                                    <div class="filter-box sprint4filetrbox">
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
            </section>

            <section class="pt-3 found-section">
                <div class="container">
                    <div class="found-box">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <div class="client-profilehead">
                                    <h1>found <span>297 results</span> in hardware installation</h1>
                                    <h2>plumber in “Seattle, Washington (25mi. radius)”</h2>
                                </div>
                            </div>
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
                                            <div class="col-md-11 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Posted on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">BID NOW</button>
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
                                            <div class="col-md-11 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyindividual service-individualcompany"><img src="images/gray-verify.svg" class="mr-1 mb-1" alt="" />INDIVIDUAL</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$20.00 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Posted on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">BID NOW</button>
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
                                            <div class="col-md-11 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyfixed service-individualcompany"><img src="images/verify.png" class="mr-1 mb-1" alt="" />COMPANY</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>WC hardware installation for 3 bathrooms</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$ … / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>0</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Posted on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">15 days</span></h5>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">BID NOW</button>
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
                                            <div class="col-md-11 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyindividual service-individualcompany"><img src="images/gray-verify.svg" class="mr-1 mb-1" alt="" />INDIVIDUAL</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$ …</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>0</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Posted on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">BID NOW</button>
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
                                            <div class="col-md-11 pl-2 pl-sm-4 col-10">
                                                <div class="service-item service-itemnew">
                                                    <p>
                                                        <span class="service-itemdraft serviceitemyindividual service-individualcompany"><img src="images/gray-verify.svg" class="mr-1 mb-1" alt="" />INDIVIDUAL</span>
                                                        <img src="images/Iconly-Bold-Star.svg" class="mb-2 ml-3" alt="" height="15px" /> <span class="gorden-ratetext"> 4.7 </span> (147 reviews)
                                                    </p>
                                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$ …</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Bids</h4>
                                                        <h5>0</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Posted on</h4>
                                                        <h5>12th Jun 2022</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5><span class="padding-redtext">9 days</span></h5>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">BID NOW</button>
                                                </div>
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

                    <div class="form-group mt-3 mb-3 mb-sm-0">
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

export default ServiceproviderindividualProfileswitch;