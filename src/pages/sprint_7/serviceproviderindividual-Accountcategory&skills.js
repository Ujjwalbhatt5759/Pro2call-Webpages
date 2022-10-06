import React from 'react';
import { Link } from "react-router-dom";
// import { Accordion, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

function ServiceproviderindividualAccountcategoryandskills () {

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
                                    <li class="client-loginHead d-none d-sm-block"><a href="#"><img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>CLIENT</span></a></li>
                                    <li class="user-picHead">
                                        <a href="#">
                                            <span><img src="images/pro-userpic.jpg" alt="" /></span>
                                            <p>Hi, Vinod !</p>
                                        </a>
                                    </li>
                                    <li><a href="#"><img src="images/bell.png" alt="" /></a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </header>

            <section class="service-providerFullbg">
                <div class="container">
                    <div class="row pt-4 align-items-center">
                        <div class="col-md-6 mt-2 pt-5 mt-sm-5">
                            <div class="client-profilehead">
                                <h1>category & skills</h1>
                                <h2>edit or update profile</h2>
                            </div>
                        </div>
                        <div class="col-md-6  mt-0 pt-2 pt-sm-5 mt-sm-5">
                            <div class="row ">
                                <div class="col-md-7 my-2 my-sm-0 pr-3 pr-sm-0">
                                    <div class="incrase-change">
                                        <div class="row">
                                            <div className="col-md-3 text-left text-sm-right pr-0 col-2">
                                                <img src="images/progress-flash.svg" height="25px" alt="" />
                                            </div>
                                            <div className="col-md-9 pl-0 pl-sm-1 pr-0 col-10">
                                                <p>Increase your chance of getting hired.</p>
                                                <h6><a href="#">complete your profile<img src="images/arrow-progress.svg" alt="" /></a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="progess-value">
                                        <div class="row">
                                            <div class="col-md-9 col-8">
                                                <h6>profile completed</h6>
                                            </div>
                                            <div class="col-md-3 col-4 text-right">
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
                    </div>

                    <div class="row mt-4 align-items-end">
                        <div class="col-md-3">
                            <img src="images/girl-meditation.svg" alt="" />
                        </div>

                        <div class="col-md-6">


                            <label for="#" class="profile-label mt-3">You are best suited for ? <span>(you can select both too)</span></label>
                            <div class="client-radio category-newbox">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-6">
                                        <div class="pl-4 mb-1">
                                            <input class="filled-in" type="checkbox" value="" id="Check1" />
                                            <label class=" checkFrom-label" for="Check1"></label>
                                        </div>
                                        <p>Onsite</p>
                                        <h6>Projects related to handyman or similar services, eg: plumber, carpenter etc.</h6>
                                    </div>
                                    <div class="col-md-5 col-6 text-right">
                                        <div class="category-skillsrightimg">
                                           <img src="images/Hire-left.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="client-radio category-newbox mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-6">
                                        <div class="pl-4 mb-1">
                                            <input class="filled-in" type="checkbox" value="" id="Check2" />
                                            <label class=" checkFrom-label" for="Check2"></label>
                                        </div>
                                        <p>Offsite</p>
                                        <h6>Projects related to handyman or similar services, eg: plumber, carpenter etc.</h6>
                                    </div>
                                    <div class="col-md-5 col-6 text-right">
                                        <div class="category-skillsrightimg">
                                        <img src="images/Hire-right.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <label for="#" class="profile-label mt-3">Category</label>
                            <div class="position-relative form-group">
                                <img src="images/probuilder-search.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Search category" />
                            </div>



                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                      

                            <h5 class="selected-probuilder">Selected</h5>
                            <div class="row">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-info skill-btn far-btn ">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                </div>
                            </div>



                            <label for="#" class="profile-label mt-3">Search for skills or add new</label>
                            <div class="form-group position-relative">
                                <img src="images/probuilder-search.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Search skills" />
                            </div>

                            <h5 class="selected-probuilder">Selected</h5>
                            <button type="button" class="btn btn-info skill-btn far-btn mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                            <button type="button" class="btn btn-info skill-btn far-btn mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                            <button type="button" class="btn btn-info skill-btn far-btn">Skill lorem <img src="images/add-square.svg" alt="" /></button>

                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label for="#" class="profile-label">Specify project budget</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-6">
                                    <div class=" desgin-radio">
                                        <input class="with-gap" type="radio" name="client-selector1" id="client1" />
                                        <label for="client1" class="radio-label">Hourly rate</label>
                                    </div>
                                </div>
                                <div class="col-md-4 col-6">
                                    <div class=" desgin-radio">
                                        <input class="with-gap" type="radio" name="client-selector1" id="client2" />
                                        <label for="client2" class="radio-label">Fixed cost</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2 mt-sm-3 align-items-center">
                                <div class="col-md-3 col-4">
                                    <div class="">
                                        <input type="email" class="form-control login-input profile-inpt" placeholder="$20.00" />
                                    </div>
                                </div>
                                <div class="col-md-1 col-2 text-center text-sm-left">
                                    <p class="hirestep-rise">to</p>
                                </div>
                                <div class="col-md-3 col-4">
                                    <div class="">
                                        <input type="email" class="form-control login-input profile-inpt" placeholder="$30.00" />
                                    </div>
                                </div>
                            </div>


                            <label for="#" class="profile-label mt-4">English level</label>
                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client11" />
                                <label for="client11" class="radio-label">Any level</label>
                            </div>

                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client12" />
                                <label for="client12" class="radio-label">Conversational or better</label>
                            </div>
                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client13" />
                                <label for="client13" class="radio-label">Fluent or better</label>
                            </div>
                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client14" />
                                <label for="client14" class="radio-label">Native or bilingual only</label>
                            </div>

                            <label for="#" class="profile-label mt-4 mb-0">Select the locations you want to serve in</label>
                            <div class="row align-items-center">
                                <div class="col-md-1 pr-0 col-1"><img src="images/profileBuilder-gps.svg" alt="" /></div>
                                <div class="col-md-10  col-10 pl-0">
                                    <span class="profile-buildergps">Detect my current location</span>
                                </div>
                            </div>
                            <div class="form-group position-relative mt-3">
                                <img src="images/profileBuilder-location.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Search location" />
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3182688614693!2d77.39455371691349!3d28.50007064897341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce86095555555%3A0x70cfc1465b1bc159!2sStaqo%20World%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1649843153429!5m2!1sen!2sin"
                                class="iframecontact-map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <h4 class="words-text">Adjust proximity radius</h4>



                            <div class="mt-2">
                                <Form.Label></Form.Label><Form.Range className="range-scrollmember" />
                            </div>

                            <h4 class="words-text text-center">25mi.</h4>



                            <div class="row mt-4 ">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-login mr-3 ">UPDATE PROFILE</button>
                                    <button type="button" class="btn btn-outline-primary post-btn ">BACK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="py-4 py-sm-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="images/mobile-secimg.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5 footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <img src="images/Footer-logo.svg" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor
                                incididunt ut labore et <br />
                                dolore magna aliqua.Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris
                                nisi ut aliquip ex <br /> ea commodo consequat.</p>
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
                                            <div class="col-md-9 pl-2 col-9">
                                                <h5>Download on the <br /> App Store</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="footbtn mt-3">
                                        <div class="row align-items-center">
                                            <div class="col-md-3 pr-0 col-3"><img src="images/Google-Play.svg" alt="" /></div>
                                            <div class="col-md-9 pl-2 col-9">
                                                <h5>Download on the <br /> App Store</h5>
                                            </div>
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

export default ServiceproviderindividualAccountcategoryandskills;