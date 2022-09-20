import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { Accordion, Card, Button, Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



function ServiceproviderindividualBrowseprojectFixedBidders() {

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
                        <div class="col-md-8 mt-2 pr-0">
                            <div class="service-head">
                                <h1><span>wc hardware installation for 3 bathrooms</span></h1>
                                <h2><span><a href="#">Browse</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> <span><a href="#">Plumber</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> Drainage</h2>
                            </div>
                        </div>
                        <div class="col-md-2 text-sm-right">
                            <h6 class="mt-sm-5 pt-1 pipe-head"><img src="images/verify.png" class="mr-1 mb-1" alt="" /> COMPANY</h6>
                        </div>
                        <div class="col-md-2 text-sm-right pl-3 pl-sm-0">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BACK TO DETAILS</button>
                        </div>
                    </div>

                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-3 align-items-center">
                        <div class="col-md-8 col-12 mb-2 mb-sm-0">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="serviceListeddetails-head">
                                        <p>Rated by service providers</p>
                                        <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6 my-2 my-sm-0 pl-3 pl-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Projects listed</p>
                                        <h6>21</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6 my-2 my-sm-0">
                                    <div class="serviceListeddetails-head">
                                        <p>Total spent</p>
                                        <h6>$ 47,890</h6>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6 my-2 my-sm-0">
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
                        <div class="col-md-8 mb-3">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="service-detailscont">
                                        <h4>Bidders (10)</h4>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-3">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-3">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-3">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8  col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-3">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-3">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8  col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 col-3 pr-0">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 col-3 pr-0">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 col-3 pr-0">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 col-3 pr-0">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                            <div class="col-md-5">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 col-3 pr-0">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-9">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="service-publicSec">
                                                    <div class="row">
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4 ">
                                                            <h4>Cost</h4>
                                                            <h5>$120.00</h5>
                                                        </div>
                                                        <div class="col-md-3 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Earned</h4>
                                                            <h5>$1,200.00</h5>
                                                        </div>
                                                        <div class="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Booked</h4>
                                                            <h5>10</h5>
                                                        </div>
                                                        <div class="col-md-5  text-left text-sm-right col-6  mt-3 mt-sm-0">
                                                            <button class="btn btn-login new-loginbtn text-uppercase">VIEW MORE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>






                                </div>
                            </div>


                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox new-fixedcost">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>CLIENT BUDGET</h2>
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

                                    <label for="#" class="profile-label mt-2">Your bid for this project</label>
                                    <div class=" position-relative">
                                        <input type="email" class="form-control biding-rightpadding login-input profile-inpt" placeholder="$" />
                                        <button type="button" class="btn btn-login submitmy-bidnew" onClick={handleShow} >SUBMIT MY BID</button>
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
                            <h1>your  <span>cover letter</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row">
                        <div class="col-md-12 mt-2 mt-sm-3">
                            <div class="form-group">
                                <textarea class="form-control login-input profile-inpt text-input" placeholder="Type your cover letter here…   eg: Why should the client hire you and how efficiently you can do the project."  rows="13"></textarea>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">SUBMIT MY BID</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ServiceproviderindividualBrowseprojectFixedBidders;
