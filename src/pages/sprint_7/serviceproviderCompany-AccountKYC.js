import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from 'react-bootstrap';

function ServiceproviderCompanyAccountKYC () {

    return (
        <>
           <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-5 col-5 moblogo">
                                <a href="#"><img src="images/Logo.svg" alt="" /></a>
                                <button type="button" class="btn btn-login ml-4 d-none d-sm-inline-block" >WANT TO HIRE SOMEONE ?</button>
                            </div>
                            <div class="col-md-7 col-7">
                                <ul class="tophead-right">
                                    <li class="client-loginHead d-none d-sm-block">
                                        <a href="#">
                                            <img src="images/service-prohead-img.png" class="pro-headimg" alt="" />You are logged in as a <span>SERVICE PROVIDER COMPANY</span>
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

            <section class="service-providerFullbg">
                <div class="container">
                    <div class="row pt-4 align-items-center">
                        <div class="col-md-6 mt-2 pt-5 mt-sm-5">
                            <div class="client-profilehead">
                                <h1>update KYC</h1>
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


                            <label for="#" class="profile-label mt-4">Documents</label>

                            <Accordion defaultActiveKey="0" className="accordreact">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        ID proof documents  <span class="added-accordtext">Added<img src="images/arrow-down.svg" class="ml-2" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <input type="email" class="form-control login-input profile-inpt" placeholder="profile_img.jpg" />
                                        <div class="upload-btn-wrapper">
                                            <button class="uploadBtn">
                                                BROWSE
                                            </button>
                                            <input type="file" />
                                        </div>
                                        <div class="profile-content">
                                            <div class="row align-items-center">
                                                <div class="col-md-3 col-5">
                                                    <div class="account-secttingprofile">
                                                        <img src="images/pro-userpic.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 pl-0 col-6">
                                                    <button type="button" class="btn btn-danger remove-btn">REMOVE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Qualifications <span class="added-blackText">-Not added<img src="images/arrow-down.svg" class="ml-2" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <input type="email" class="form-control login-input profile-inpt" placeholder="profile_img.jpg" />
                                        <div class="upload-btn-wrapper">
                                            <button class="uploadBtn">
                                                BROWSE
                                            </button>
                                            <input type="file" />
                                        </div>
                                        <div class="profile-content">
                                            <div class="row align-items-center">
                                                <div class="col-md-3 col-5">
                                                    <div class="account-secttingprofile">
                                                        <img src="images/pro-userpic.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 pl-0 col-6">
                                                    <button type="button" class="btn btn-danger remove-btn">REMOVE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        Certifications <span class="added-blackText">-Not added<img src="images/arrow-down.svg" class="ml-2" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <input type="email" class="form-control login-input profile-inpt" placeholder="profile_img.jpg" />
                                        <div class="upload-btn-wrapper">
                                            <button class="uploadBtn">
                                                BROWSE
                                            </button>
                                            <input type="file" />
                                        </div>
                                        <div class="profile-content">
                                            <div class="row align-items-center">
                                                <div class="col-md-3 col-5">
                                                    <div class="account-secttingprofile">
                                                        <img src="images/pro-userpic.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 pl-0 col-6">
                                                    <button type="button" class="btn btn-danger remove-btn">REMOVE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        Bank details <span class="added-blackText">-Not added<img src="images/arrow-down.svg" class="ml-2" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <input type="email" class="form-control login-input profile-inpt" placeholder="profile_img.jpg" />
                                        <div class="upload-btn-wrapper">
                                            <button class="uploadBtn">
                                                BROWSE
                                            </button>
                                            <input type="file" />
                                        </div>
                                        <div class="profile-content">
                                            <div class="row align-items-center">
                                                <div class="col-md-3 col-5">
                                                    <div class="account-secttingprofile">
                                                        <img src="images/pro-userpic.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3 pl-0 col-6">
                                                    <button type="button" class="btn btn-danger remove-btn">REMOVE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>


                            <div class="row mt-4 mt-sm-5">
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

export default ServiceproviderCompanyAccountKYC;