import React from 'react';
import { Link } from "react-router-dom";

function Browseservicefilterapplied () { 
    
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
                <div class="row pt-5">
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
                            <div class="client-profilehead newclient-profilehead">
                                <h1>found <span> 132 results</span> in drainage</h1>
                                <h2>plumber in “Seattle, Washington” <span class="ml-0 ml-sm-4 mt-2 mt-sm-0"> Fixed budget <img src="images/close-square1.svg" class="ml-2" height="20px" /></span> <span> Services <img src="images/close-square1.svg" class="ml-2" height="20px" /></span></h2>
                            </div>
                        </div>

                        <div class="col-md-5 col-12 mt-3 mt-sm-0">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <h6><img src="images/filter.svg" alt="" height="27px" /> Filter results</h6>
                                </div>
                                <div class="col-md-8">
                                    <div class="filter-box">
                                        <div class=" d-flex align-items-center">
                                            <img src="images/arrow.svg"  alt="" height="22px" />
                                                <select class="form-control border-0" aria-label=".form-select-lg example">
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

             <div class="row mb-5">
                <div class="col-md-12">
                    <div class="found-result-box">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="dash-img">
                                    <img src="images/company-img.png"  alt="" />
                                </div>
                            </div>

                            <div class="col-md-6 col-12">
                                <div class="found-center">
                                    <h6> <img src="images/verify.png" class="mr-2" alt=""/> COMPANY</h6>
                                    <h5>Drainage pipe blockage removal</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div class="row">
                                        <div class="col-md-6 col-12">
                                            <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                            <h4>Gordan Entreprise Inc.</h4>
                                            <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px"/> 4.7 (147 reviews)</p>
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
                                    <img src="images/company-img1.png"  alt="" />
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="found-center">
                                    <h6> <img src="images/verify.png" class="mr-2" alt=""/> COMPANY</h6>
                                    <h5>Drainage pipe blockage removal</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <img src="images/john.png" class="play-img" alt="" />
                                            <h4>Gordan Entreprise Inc.</h4>
                                            <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px"/> 4.7 (147 reviews)</p>
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
            </div>
                
            </div>
        </section> 
      </>
    );
}

export default Browseservicefilterapplied;