import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab'

function Clientbrowsse() {

    return (
        <>
            <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-6 col-5 moblogo">
                                <a href="#"><img src="images/Logo.svg" alt="" /></a>
                                <Link to="/ServiceproviderindividualProfilesetting">
                                    <button type="button" class="btn btn-login ml-4 d-none d-sm-inline-block">REGISTER AS A SERVICE PROVIDER</button>
                                </Link>
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
                            <Nav.Link as={Link} to="/Clientbrowsse" className="active" ><img src="images/blue-status.svg" alt="" />BROWSE</Nav.Link>
                            <Nav.Link as={Link} to="/ClientprojectPosted"><img src="images/note.svg" alt="" />PROJECTS</Nav.Link>
                            <Nav.Link as={Link} to="/ClientBookingscheduled"><img src="images/bold-cal.svg" alt="" />BOOKINGS</Nav.Link>
                            <Nav.Link as={Link} to="/ClientexpensesProjects"><img src="images/dollar.svg" alt="" />EXPENSE</Nav.Link>
                            <Nav.Link as={Link} to="/ClientsupportOpen"><img src="images/mgs.svg" alt="" />SUPPORT</Nav.Link>
                            <Nav.Link as={Link} to="/ClientAccount" ><img src="images/setting.svg" alt="" />ACCOUNT</Nav.Link>
                            <Nav.Link as={Link} to="/ClientSave"><img src="images/archive.svg" alt="" />SAVED</Nav.Link>
                            <Nav.Link as={Link} to="/ClientreportsService"><img src="images/trend.svg" alt="" />REPORTS</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </div>
            </Navbar>

        

            <section class="browse-section">
                <div class="container">
                    <div class="row mt-2">
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

                        <div class="col-md-4  pt-3 pt-sm-0">
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

            <section class="pt-3 found-section pb-4 pb-sm-5">
                <div class="container">
                    <div class="found-box">
                        <div class="row align-items-center">
                            <div class="col-md-7 col-12">
                                <div class="client-profilehead">
                                    <h1>found <span> 132 results</span> in drainage</h1>
                                    <h2>plumber in “Seattle, Washington”</h2>
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

                    <div class="row">
                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-12">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
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
                                            <img src="images/company-img1.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center gay-textfond">
                                            <h6> <img src="images/gray-brwn.svg" alt="" /> INDIVIDUAL</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/john.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
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

                        <div class="col-md-12">
                            <div class="found-result-box">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="dash-img">
                                            <img src="images/company-img2.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
                                                </div>

                                                <div class="col-md-6 text-left text-sm-right">
                                                    <h4>Completed</h4>
                                                    <p>2,489</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="found-right start-right">
                                            <h5>STARTING FROM</h5>
                                            <h3>$299.00</h3>
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
                                            <img src="images/company-img4.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" alt="" /> COMPANY</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
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
                                            <h3>$790.00</h3>
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
                                            <img src="images/company-img5.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" alt="" /> VERIFIED</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
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
                                            <img src="images/company-img6.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="found-center">
                                            <h6> <img src="images/verify.png" alt="" /> VERIFIED</h6>
                                            <h5>Drainage pipe blockage removal</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="images/playbuzz-img.png" class="play-img" alt="" />
                                                    <h4>Gordan Entreprise Inc.</h4>
                                                    <p class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> 4.7 (147 reviews)</p>
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
                                            <h3>$499.00</h3>
                                            <p class="mb-0 pt-2">Listed on</p>
                                            <p class="date">12th Jun 2022</p>
                                            <button type="button" class="btn btn-login">VIEW DETAILS</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row mt-4">
                        <div class="col-md-12">
                            <nav aria-label="...">
                                <ul class="pagination pagination-lg">
                                    <li class="page-item active">
                                        <a href="#" class="page-link">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link newpage-link" href="#">.........</a></li>
                                    <li class="page-item"><a class="page-link" href="#">11</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
}

export default Clientbrowsse;