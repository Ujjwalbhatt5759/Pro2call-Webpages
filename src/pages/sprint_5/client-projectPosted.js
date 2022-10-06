import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

import { Navbar, Nav } from 'react-bootstrap';
import MultiRangeSlider from "multi-range-slider-react";


function ClientprojectPosted() {

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
                        <div class="col-md-9">
                            <button class="uploadBtn mr-3 mb-2 text-uppercase">POSTED</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">IN PROGRESS  <span class="notification-numb  clientproject-postedbtn">2</span></button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mr-3 mb-2 text-uppercase">PAST PROJECTS</button>
                            <button type="button" class="btn btn-outline-dark mayment-btn mb-2 text-uppercase">POST A PROJECT</button>
                        </div>
                        <div class="col-md-3 found-section text-left text-sm-right">
                            <h6 onClick={handleShow} ><img src="images/filter.svg" alt="" height="27px" /> Filter results</h6>
                        </div>
                    </div>

                </div>
            </section>



            <section class="pb-4 pb-sm-5">
                <div class="container">
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <div className="service-list mt-0 mt-sm-2">
                                <div class="row align-items-center">
                                    <div class="col-md-5 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-2 col-2">
                                                <div class="service-individual-browsetext client-project-postedDraft">
                                                    <p>DRAFT</p>
                                                </div>
                                            </div>
                                            <div class="col-md-10  col-10 pl-3 pl-sm-0">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span></p>
                                                    <h6>Full bathroom hardware installation for corporate office</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your budget</h4>
                                                        <h5>$0.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$0.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Total bids</h4>
                                                        <h5>0</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Shortlisted</h4>
                                                        <h5>0</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5>0</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="uploadBtn ">POSTED</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-5 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-2 col-2">
                                                <div class="service-individual-browsetext service-individual-browsetextyellow">
                                                    <p>HOURLY</p>
                                                </div>
                                            </div>
                                            <div class="col-md-10 pl-3 pl-sm-0 col-10">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span></p>
                                                    <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="service-publicSec service-publicpink">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your budget</h4>
                                                        <h5>$20 - $40 / hr</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$0.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Total bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Shortlisted</h4>
                                                        <h5>2</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5>9</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-5 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-2 col-2">
                                                <div class="service-individual-browsetext">
                                                    <p>FIXED</p>
                                                </div>
                                            </div>
                                            <div class="col-md-10  col-10 pl-3 pl-sm-0">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span></p>
                                                    <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis …</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your budget</h4>
                                                        <h5>$300 - $500</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$0.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Total bids</h4>
                                                        <h5>0</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Shortlisted</h4>
                                                        <h5>2</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5>15</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-5 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-2 col-2">
                                                <div class="service-individual-browsetext">
                                                    <p>FIXED</p>
                                                </div>
                                            </div>
                                            <div class="col-md-10  col-10 pl-3 pl-sm-0">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span></p>
                                                    <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis…</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your budget</h4>
                                                        <h5>$300 - $500</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$0.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Total bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Shortlisted</h4>
                                                        <h5>2</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5>9</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
                                                    <button class="btn btn-login new-loginbtn text-uppercase">VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-list mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-5 mb-2 mb-sm-0 mt-2 mt-sm-0">
                                        <div class="row align-items-center">
                                            <div class="col-md-2 col-2">
                                                <div class="service-individual-browsetext">
                                                    <p>FIXED</p>
                                                </div>
                                            </div>
                                            <div class="col-md-10  col-10 pl-3 pl-sm-0">
                                                <div class="service-item">
                                                    <p>#PT0000129899 <span class="servie-itemnmb">12th Jun 2022</span></p>
                                                    <h6>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis …</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="service-publicSec">
                                            <div class="row">
                                                <div class="col-md-9 mb-2 mb-sm-0 d-flex justify-content-between">
                                                    <div class="text-sm-right text-center">
                                                        <h4>Your budget</h4>
                                                        <h5>$300 - $500</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Avg. bid</h4>
                                                        <h5>$0.00</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Total bids</h4>
                                                        <h5>10</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Shortlisted</h4>
                                                        <h5>2</h5>
                                                    </div>
                                                    <div class="text-sm-right text-center">
                                                        <h4>Days left</h4>
                                                        <h5>9</h5>
                                                    </div>

                                                </div>
                                                <div class="col-md-3 text-left text-sm-right">
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

export default ClientprojectPosted;