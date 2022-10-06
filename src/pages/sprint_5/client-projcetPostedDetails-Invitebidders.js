import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';


function ClientprojectPostedDetailsInvitebidders() {

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

            <section class="py-5 py-sm-5">
                <div class="container">
                    <div class="row mt-4 mt-sm-4 ">
                        <div class="col-md-8 mt-2 pr-0">
                            <div class="service-head">
                                <h1><span>full bathroom hardware installation for corporate office</span></h1>
                                <h2><span><a href="#">Projects</a></span> <img src="images/service-arrowright.svg" class="mr-2" alt="" /> Posted</h2>
                            </div>
                        </div>

                        <div class="col-md-4 text-sm-right">
                            <button type="button" class="btn btn-light details-btn mt-sm-5">BACK TO LIST</button>
                        </div>
                    </div>

                    <div class="border-bottom mt-2"></div>
                    <div class="row mt-3 align-items-center">
                        <div class="col-md-6 mb-2 mb-sm-0">
                            <button type="button" class="btn btn-warning exlpore-btn new-explorebtn text-uppercase ">BACK TO DETAILS</button>
                        </div>
                        <div class="col-md-6 text-sm-right text-left">
                            <button type="button" class="btn btn-login">SEND INVITATION TO 5 SERVICE PROVIDERS</button>
                        </div>
                    </div>


                    <div class="border-bottom mt-3"></div>

                    <div class="row mt-3">
                        <div class="col-md-8 mb-3 mb-sm-0">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="service-detailscont">
                                        <h4>Invite bidders</h4>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check1" />
                                                <label class=" checkFrom-label" for="Check1"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check2" />
                                                <label class=" checkFrom-label" for="Check2"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check3" />
                                                <label class=" checkFrom-label" for="Check3"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check4" />
                                                <label class=" checkFrom-label" for="Check4"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check5" />
                                                <label class=" checkFrom-label" for="Check5"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check9" />
                                                <label class=" checkFrom-label" for="Check9"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check6" />
                                                <label class=" checkFrom-label" for="Check6"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check7" />
                                                <label class=" checkFrom-label" for="Check7"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check8" />
                                                <label class=" checkFrom-label" for="Check8"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check10" />
                                                <label class=" checkFrom-label" for="Check10"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check11" />
                                                <label class=" checkFrom-label" for="Check11"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="service-list mt-3">
                                        <div class="row  align-items-center">
                                           <div class="col-md-1 col-2">
                                           <div class="pl-3 pl-sm-4">
                                                <input class="filled-in" type="checkbox" value="" id="Check12" />
                                                <label class=" checkFrom-label" for="Check12"></label>
                                            </div>
                                           </div>
                                            <div class="col-md-5 col-10">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 pr-0 col-4">
                                                        <div class="service-itemImg">
                                                            <img src="images/listed-img.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8 col-8">
                                                        <div class="serviceListeddetails-head">
                                                            <p>John Snow</p>
                                                            <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-md-6 col-12">
                                                <div class="service-publicSec inviteservicepublicsec">
                                                    <div class="row align-items-center">
                                                        
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0   col-4 ">
                                                            <h4>Projects</h4>
                                                            <h5>445</h5>
                                                        </div>
                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 ">
                                                            <h4>Proximity</h4>
                                                            <h5>0.4 mi.</h5>
                                                        </div>

                                                        <div class="col-md-4 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4">
                                                            <h4>Earned</h4>
                                                            <h5>$12.37k</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                 
                                    
                                   

                                    

                                </div>
                            </div>


                        </div>

                        <div class="col-md-4">
                            <div class="position-stikyfixedbox">
                                <div class="fixed-costbox new-fixedcost">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>YOUR BUDGET</h2>
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
                                            <h4>15 - 18 days</h4>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-5 col-5">
                                            <h4>Location</h4>
                                        </div>
                                        <div class="col-md-7 text-right col-7">
                                            <span class="seattle-Washinton">Seattle, Washinton</span>
                                        </div>
                                    </div>

                                    <div class="row text-center mt-3">
                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-danger remove-btn new-removebtn text-uppercase" onClick={handleShow}>CLOSE PROJECT FOR BIDDING</button>
                                        </div>
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
              <Modal show={show} onHide={handleClose} className="filter-popup2 modal-dialog-slideout">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div class="service-head">
                            <img src="images/popup-logo.svg" height="45px" alt="" />
                            <h1>chat with  <span>John Snow</span></h1>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row mt-3 mt-sm-5 justify-content-end">
                        <div class="col-md-7">
                            <div class="arrow_box">
                                <p>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis</p>
                            </div>
                            <p class="caht-timming">9:00 AM</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-7">
                            <div class="row text-right">
                                <div class="col-md-12">
                                    <button type="button" class="btn chat-boxbtn ">Oct 2nd, 2021</button>
                                </div>
                            </div>
                            <div class="arrow_box arrow_boxblue mt-2">
                                <p>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis</p>
                            </div>
                            <div class="row text-right mt-3">
                                <div class="col-md-12">
                                    <button type="button" class="btn chat-boxbtn mr-3">Today</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row mt-3 justify-content-end">
                        <div class="col-md-7">
                            <div class="arrow_box">
                                <p>Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis</p>
                            </div>
                            <p class="caht-timming">9:00 AM</p>
                        </div>
                    </div>

                    <div class="row align-items-center mt-3">
                        <div class="col-md-1 col-1">
                            <div class="typing-boximg">
                                <img src="images/typing-text.svg" alt="" />
                            </div>
                        </div>
                        <div class="col-md-11 col-10 ">
                            <p class="typing-textcolor ml-3">Jaydyn is typing</p>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="email" class="form-control typing-int chatwithpopuprightpadding" placeholder="type a message here…" />
                                <button type="button" class="btn send-btn"><img src="images/send.svg" alt="" height="25px" /></button>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" class="btn btn-outline-primary post-btn mr-2">BACK</button>
                    <button type="button" class="btn btn-login">PROCEED TO PAYMENT</button>
                   
                </Modal.Footer> */}
            </Modal>


        </>
    );
}

export default ClientprojectPostedDetailsInvitebidders;
