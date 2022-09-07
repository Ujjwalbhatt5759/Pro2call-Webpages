import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { Accordion, Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function ServiceproviderServicesScheduleddetails () {
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
                                <h2><span><a href="#">Services</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> Scheduled service</h2>
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
                        <div class="col-md-8 mb-3 mb-sm-0">

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
                                            <button type="button" class="btn btn-login ml-4 ">CHAT WITH CLIENT NOW</button>
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


                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 mb-2">

                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox">
                                      <div class="booked-forbox">
                                        <p>Booked for</p>
                                        <h6>24th Jun, 2022 at 3:30pm</h6>
                                      </div>
                                
                                    <div class="row align-items-end">
                                        <div class="col-md-5 col-6">
                                            <h2>FIXED COST</h2>
                                            <h1>$750.00</h1>
                                            <p>Listed on</p>
                                            <h6>12th Jun 2022</h6>
                                        </div>
                                        <div class="col-md-7 col-6 text-right">
                                            <button type="button" class="btn btn-danger remove-btn text-uppercase" onClick={handleShow}>RE-SECHEDULE</button>
                                        </div>
                                    </div>

                                    <h3>Client have paid $20 till now. <span>Cancel this booking</span></h3>

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
                        <h1>re-schedule time <span>slot</span></h1>
                    </div>
                   </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="#" class="profile-label mt-0 mt-sm-2">June, 2022</label>
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <table class="table new-table">
                                <tbody>
                                    <tr>
                                        <td class="active">M<br /> 14</td>
                                        <td>T<br />15</td>
                                        <td>W<br />16</td>
                                        <td>T<br />17</td>
                                        <td>F<br />18</td>
                                        <td>S<br />19</td>
                                        <td>S<br />20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <label for="#" class="profile-label mt-1 mt-sm-3">Available time slots</label>

                    <div class="timeinput">
                            <input class="with-gap" type="radio" name="client-selector" id="client1" />
                            <label for="client1">9 am - 10 am</label>
                       
                            <input class="with-gap" type="radio" name="client-selector" id="client2" />
                            <label for="client2">12 pm - 1 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client3" />
                            <label for="client3">1 pm - 12 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client4" />
                            <label for="client4">2 pm - 10 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client5" />
                            <label for="client5">7 pm - 11 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client6" />
                            <label for="client6">8 pm - 12 pm</label>

                            <input class="with-gap" type="radio" name="client-selector" id="client7" />
                            <label for="client7">9 pm - 10 pm</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">SELECT & PROCEED</button>
                    {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
                    {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ServiceproviderServicesScheduleddetails;
