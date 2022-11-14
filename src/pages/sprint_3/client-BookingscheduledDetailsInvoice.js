import React, { useState } from 'react';
import { Link } from "react-router-dom";  

function ClientBookingscheduledDetailsInvoice () { 

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
                        <div class="col-md-8 mt-2">
                            <div class="service-head">
                                <h1><span>installation services by plumber</span></h1>
                                <h2><span><a href="#">Bookings</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /><span><a href="#">Scheduled</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" />Raise Service Invoice</h2>
                            </div>
                        </div>
                       
                        <div class="col-md-4 text-sm-right">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BacK TO Detail</button>
                        </div>
                    </div>


                    <div class="border-bottom mt-2"></div>
                      

                    <div class="row mt-3">
                        <div class="col-md-8 mb-3 mb-sm-0">

                            <div class="review-providerSec mt-3 mt-sm-4">
                                <h1>Raise Service Invoice</h1>
                                <div class="border-bottom mt-2 mt-sm-3"></div>
                            </div>

                            <div className="mt-4"> 
                                <div className="included-service p-3 mb-3 raiseinvoiceticket">
                                    <div class="form-group mb-0">
                                        <label for="#" class="profile-label">Reached Service Location</label>
                                        <div class="toogleSwitch raiseticketswitch">
                                            <label class="switch">
                                                <input type="checkbox" />
                                                <div class="slider round">
                                                    <span class="swactive">Started</span>
                                                    <span class="swinactive">Yet to Start</span>
                                                </div>
                                            </label>
                                            <span className="text-muted jobtimig">(<i class="far fa-calendar-alt"></i> 10/11/2022 | 15:00)</span>
                                        </div> 
                                    </div>
                                </div>

                                <div className="included-service p-3 mb-3 raiseinvoiceticketblue">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="#" class="profile-label">Job Started</label>
                                            <div class="toogleSwitch raiseticketswitch">
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <div class="slider round">
                                                        <span class="swactive">Started</span>
                                                        <span class="swinactive">Yet to Start</span>
                                                    </div>
                                                </label>
                                                <span className="text-muted jobtimig">(<i class="far fa-calendar-alt"></i> 10/11/2022 | 15:00)</span>
                                            </div>  
                                        </div>
                                        <div className="col-md-6 mt-3 mt-sm-0"> 
                                            <div class="position-relative mb-0"> 
                                                <input type="email" disabled class="form-control bg-white login-input profile-inpt" placeholder="Upload Image" />
                                                <div class="upload-btn-wrapper uploadwrapperNEw">
                                                    <button class="uploadBtn">
                                                        BROWSE
                                                    </button>
                                                    <input type="file" />
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="included-service p-3 mb-3 raiseinvoiceticketgreen">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="#" class="profile-label">Completed</label>
                                            <div class="toogleSwitch raiseticketswitch">
                                                <label class="switch">
                                                    <input type="checkbox" />
                                                    <div class="slider round">
                                                        <span class="swactive">Started</span>
                                                        <span class="swinactive">Yet to Start</span>
                                                    </div>
                                                </label>
                                                <span className="text-muted jobtimig">(<i class="far fa-calendar-alt"></i> 10/11/2022 | 15:00)</span>
                                            </div>  
                                        </div>
                                        <div className="col-md-6 mt-3 mt-sm-0"> 
                                            <div class="position-relative mb-0"> 
                                                <input type="email" disabled class="form-control bg-white login-input profile-inpt" placeholder="Upload Image" />
                                                <div class="upload-btn-wrapper uploadwrapperNEw">
                                                    <button class="uploadBtn">
                                                        BROWSE
                                                    </button>
                                                    <input type="file" />
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>    

                                    <label for="#" class="profile-label mt-3">Extra Charges</label>

                                    <div className="included-service p-3">
                                        <div className="table-responsive">
                                            <table className="table table-striped extracostadding mb-0">
                                                <tr>
                                                    <th>Items</th> 
                                                    <th>Cost</th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="email" class="form-control login-input profile-inpt mb-3" placeholder="Enter Items" />
                                                    </td> 
                                                    <td>
                                                        <input type="email" class="form-control login-input profile-inpt mb-3" placeholder="Enter Cost" />
                                                    </td>
                                                    <td><img src="images/add-square.svg" height="20px" /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="email" class="form-control login-input profile-inpt mb-3" placeholder="Enter Items" />
                                                    </td> 
                                                    <td>
                                                        <input type="email" class="form-control login-input profile-inpt mb-3" placeholder="Enter Cost" />
                                                    </td> 
                                                    <td><img src="images/close-square1.svg"  height="20px" /></td>
                                                </tr> 
                                            </table>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="#" class="profile-label mt-3">Remarks</label>
                                        <textarea class="form-control  login-input profile-inpt" placeholder="You may have experience in fixing a lot of things at home but plumbing isn’t everyone’s cup of tea. Plumbing issues such as clogged drains, leaky faucets, Plumbing issues need to be addressed immediately in order to prevent them from exacerbating or causing further damages. Minor plumbing problems are quite common in every household. Book our plumbing services for all kinds of general plumbing services such as loose and leaky faucets, dripping tap, clogged shower head, cistern repair, toilet flush not working, clogged drain and sink or any other plumbing work."
                                            rows="8"></textarea>
                                    </div>

                            </div>

                        </div>

                        <div class="col-md-4">

                            <div class="position-stikyfixedbox">
                            <div class="fixed-costbox">
                                      <div class="booked-forbox">
                                        <p>Booked for</p>
                                        <h6>24th Jun, 2022 at 3:30pm</h6>
                                      </div> 
                                
                                    <div class="row align-items-end">
                                        <div class="col-md-12">
                                            <h2>Remaining Payable</h2>
                                            <h1>$130.00</h1> 
                                        </div> 
                                    </div> 

                                    <h3>Amount Breakup Detail</h3>

                                    <div class="row mt-3 mt-sm-4">
                                        <div class="col-8">
                                            <h4>Duration</h4>
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>1.25 HR</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                    <div class="col-8">
                                            <h4>Service Cost (Fixed)</h4>
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>$100</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-8">
                                            <h4>Extra Charges</h4> 
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>$20</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-8">
                                            <h4><strong>Total Service Cost</strong></h4>
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>$120</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-8">
                                            <h4>Taxes Payable @ 25%</h4>
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>$30</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-8">
                                            <h4><strong>Grand Total</strong></h4>
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>$150</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-8">
                                            <h4>Visiting Charges Paid</h4>
                                        </div>
                                        <div class="text-right col-4">
                                            <h4>-$20</h4>
                                        </div>
                                    </div>

                                    <button type="button" class="btn btn-login mt-3">Submit Invoice</button>
                                     
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

export default ClientBookingscheduledDetailsInvoice;
