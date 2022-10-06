import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from 'react-bootstrap';



function ClientprojectPostedDetailsEditproject() {

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

            <section class="service-providerFullbg">
                <div class="container">
                    <div class="row pt-4">
                        <div class="col-md-8 mt-2 pt-5 mt-sm-5 ">
                            <div class="client-profilehead">
                                <h1>edit project</h1>
                                <h2>update or edit the details</h2>
                            </div>
                        </div>
                        <div class="col-md-4 text-left text-sm-right mt-2 pt-2 pt-sm-5 mt-sm-5">
                            <button type="button" class="btn btn-login">UPDATE YOUR PROJECT</button>
                        </div>
                    </div>

                    <div class="row mt-4 align-items-end">
                        <div class="col-md-3">
                            <img src="images/girl-meditation.svg" alt="" />
                        </div>

                        <div class="col-md-6">

                            <div class="form-group">
                                <label for="#" class="profile-label">Headline for your project</label>
                                <input type="email" class="form-control login-input profile-inpt" placeholder="UI/UX Designer for a Mobile App" />
                            </div>

                            <div class="form-group">
                                <label for="#" class="profile-label">Describe your project</label>
                                <textarea class="form-control  login-input profile-inpt" placeholder="Hi, we need a UI/UX specialist for my upcoming mobile app regarding the cab booking & services. We would like to work with young and dynamic mind who can thing outside the box yet deliver the traditional user experience. The designs should be user friendly and the choice of softwares would be Adobe XD, Figma. Please get back to us with your dribble or bechance portfolio."
                                    rows="8"></textarea>
                            </div>




                            <label for="#" class="profile-label mt-3">Category</label>
                            <div class="position-relative form-group">
                                <img src="images/probuilder-search.svg" class="login-smsimg" alt="" />
                                <input type="email" class="form-control login-input" placeholder="Search category" />
                            </div>

                            <h5 class="selected-probuilder">Selected</h5>
                            <button type="button" class="btn btn-info skill-btn far-btn mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>

                        </div>
                    </div>
                </div>
            </section>

            <section class="service-providerfullbgBottom pb-4 pb-sm-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
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


                            <label for="#" class="profile-label mt-4">Tentative project length</label>
                            <div class="select-box form-group">
                                <select className="form-control select-checkout">
                                    <option>3 Weeks</option>
                                    <option>Newest listing first</option>
                                    <option>Lowest budget</option>
                                    <option>Highest budget</option>
                                    <option>Oldest listing first</option>
                                </select>
                            </div>

                            <label for="#" class="profile-label">Add more preferences to your project</label>
                            <div class="select-box form-group">
                                <select className="form-control select-checkout">
                                    <option>Individual</option>
                                    <option>Newest listing first</option>
                                    <option>Lowest budget</option>
                                    <option>Highest budget</option>
                                    <option>Oldest listing first</option>
                                </select>
                            </div>

                            <label for="#" class="profile-label">English level</label>
                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client5" />
                                <label for="client5" class="radio-label">Any level</label>
                            </div>

                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client6" />
                                <label for="client6" class="radio-label">Conversational or better</label>
                            </div>
                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client3" />
                                <label for="client3" class="radio-label">Fluent or better</label>
                            </div>
                            <div class=" desgin-radio">
                                <input class="with-gap" type="radio" name="client-selector" id="client4" />
                                <label for="client4" class="radio-label">Native or bilingual only</label>
                            </div>

                            <label for="#" class="profile-label mt-2">Bidding closing date</label>
                            <div class="select-box form-group">
                                <select className="form-control select-checkout">
                                    <option>10 days</option>
                                    <option>Newest listing first</option>
                                    <option>Lowest budget</option>
                                    <option>Highest budget</option>
                                    <option>Oldest listing first</option>
                                </select>
                            </div>

                            <label for="#" class="profile-label">Create deliverables milestone</label>


                            <Accordion defaultActiveKey="0" className="accordreact">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <img src="images/close-w.svg" class="mr-2 addNew-accorimg" height="18px" alt="" />Milestone 1
                                        <span class="added-blackText">5 Days<img src="images/arrow-down.svg" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Title of the milestone" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 ">
                                                <div class="form-group mb-3 mb-sm-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Days to complete" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 pl-3 pl-sm-0 ">
                                                <div class="form-group mb-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Buffer days" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="milestonepupup-label mt-2">Deliverables</label>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group position-relative">
                                                    <input type="email" class="form-control milestonepupup-input biding-rightpadding" placeholder="Start typing here..." />
                                                    <button type="button" class="btn btn-info skill-btn milestone-pstion">Add more <img src="images/add-square.svg" alt="" /></button>
                                                </div>
                                            </div>
                                            <div class="col-md-4 pl-3 pl-sm-0">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Release payment(%)" />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <button type="button" class="btn btn-light details-btn mr-3">SAVE MILESTONE</button>
                                                <button type="button" class="btn btn-outline-danger remove-btnoutline text-uppercase">REMOVe</button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <img src="images/close-w.svg" class="mr-2 addNew-accorimg" height="18px" alt="" /> Milestone 2
                                        <span class="added-blackText">3 Days<img src="images/arrow-down.svg" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Title of the milestone" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 ">
                                                <div class="form-group mb-3 mb-sm-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Days to complete" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 pl-3 pl-sm-0 ">
                                                <div class="form-group mb-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Buffer days" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="milestonepupup-label mt-2">Deliverables</label>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group position-relative">
                                                    <input type="email" class="form-control biding-rightpadding milestonepupup-input" placeholder="Start typing here..." />
                                                    <button type="button" class="btn btn-info skill-btn milestone-pstion">Add more <img src="images/add-square.svg" alt="" /></button>
                                                </div>
                                            </div>
                                            <div class="col-md-4 pl-3 pl-sm-0">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Release payment(%)" />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <button type="button" class="btn btn-light details-btn mr-3">SAVE MILESTONE</button>
                                                <button type="button" class="btn btn-outline-danger remove-btnoutline text-uppercase">REMOVe</button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <img src="images/close-w.svg" class="mr-2 addNew-accorimg" height="18px" alt="" /> Milestone 3
                                        <span class="added-blackText">7 Days<img src="images/arrow-down.svg" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Title of the milestone" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 ">
                                                <div class="form-group mb-3 mb-sm-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Days to complete" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 pl-3 pl-sm-0 ">
                                                <div class="form-group mb-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Buffer days" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="milestonepupup-label mt-2">Deliverables</label>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group position-relative">
                                                    <input type="email" class="form-control milestonepupup-input biding-rightpadding" placeholder="Start typing here..." />
                                                    <button type="button" class="btn btn-info skill-btn milestone-pstion">Add more <img src="images/add-square.svg" alt="" /></button>
                                                </div>
                                            </div>
                                            <div class="col-md-4 pl-3 pl-sm-0">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Release payment(%)" />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <button type="button" class="btn btn-light details-btn mr-3">SAVE MILESTONE</button>
                                                <button type="button" class="btn btn-outline-danger remove-btnoutline text-uppercase">REMOVe</button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <img src="images/close-w.svg" class="mr-2 addNew-accorimg" height="18px" alt="" /> Milestone 4
                                        <span class="added-blackText">4 Days<img src="images/arrow-down.svg" alt="" /></span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Title of the milestone" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 ">
                                                <div class="form-group mb-3 mb-sm-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Days to complete" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 pl-3 pl-sm-0 ">
                                                <div class="form-group mb-0">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Buffer days" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="milestonepupup-label mt-2">Deliverables</label>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group position-relative">
                                                    <input type="email" class="form-control milestonepupup-input biding-rightpadding" placeholder="Start typing here..." />
                                                    <button type="button" class="btn btn-info skill-btn milestone-pstion">Add more <img src="images/add-square.svg" alt="" /></button>
                                                </div>
                                            </div>
                                            <div class="col-md-4 pl-3 pl-sm-0">
                                                <div class="form-group">
                                                    <input type="email" class="form-control milestonepupup-input" placeholder="Release payment(%)" />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <button type="button" class="btn btn-light details-btn mr-3">SAVE MILESTONE</button>
                                                <button type="button" class="btn btn-outline-danger remove-btnoutline text-uppercase">REMOVe</button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            

                            <div class="row mt-3 mt-sm-5">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-login mr-3 ">UPDATE YOUR PROJECT</button>
                                    <button type="button" class="btn btn-outline-primary post-btn ">BACK</button>
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


        </>
    );
}

export default ClientprojectPostedDetailsEditproject;