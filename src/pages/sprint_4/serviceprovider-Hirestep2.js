import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderHirestep2 () {

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

            <section class="client-profile">
                <div class="container">
                    <div class="row pt-4">
                        <div class="col-md-12 mt-2 pt-5 mt-sm-5">

                            <div class="tab-content" >
                                <div class="tab-pane fade show active">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="client-profilehead">
                                                <h1>post a project</h1>
                                                <h2>step 2: category or skills</h2>
                                            </div>
                                            <img src="images/hirestep2.svg" class="mt-3 mt-sm-5" alt="" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <div class="col-md-10">
                                                <nav>
                                                    <div class="nav nav-tabs hire-steptab" role="tablist">
                                                      <a class="nav-item nav-link active" href="#">
                                                        headline 
                                                      </a>
                                                      <a class="nav-item nav-link active"  href="#">
                                                       category
                                                      </a>
                                                      <a class="nav-item nav-link"  href="#">
                                                      budget
                                                      </a>
                                                      <a class="nav-item nav-link"  href="#" >
                                                      preferences
                                                      </a>
                                                    </div>
                                                  </nav>

                                                    <label for="#" class="profile-label mt-4">Search for category</label>
                                                    <div class="form-group position-relative">
                                                        <img src="images/probuilder-search.svg" class="login-smsimg" alt="" />
                                                        <input type="email" class="form-control login-input" placeholder="Search category" />
                                                    </div>
                                                    <div class="border-bottom mt-4"></div>

                                                    <label for="#" class="profile-label mt-4">Search for skills</label>
                                                    <div class="form-group position-relative">
                                                        <img src="images/probuilder-search.svg" class="login-smsimg" alt="" />
                                                        <input type="email" class="form-control login-input" placeholder="Search category" />
                                                    </div>
                                                    <h5 class="selected-probuilder">Selected</h5>
                                                    <h4 class=" words-text">No skill has been added yet !</h4>
                                                    <div class="border-bottom mt-4 mb-3"></div>

                                                    <span class="related-skills">Related skills</span>
                                                    <div class="row mt-2">
                                                        <div class="col-md-12">
                                                            <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                                            <button type="button" class="btn btn-info skill-btn mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                                            <button type="button" class="btn btn-info skill-btn">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                                            <button type="button" class="btn btn-info skill-btn mt-2 mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                                            <button type="button" class="btn btn-info skill-btn mt-2 mr-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                                            <button type="button" class="btn btn-info skill-btn mt-2">Skill lorem <img src="images/add-square.svg" alt="" /></button>
                                                        </div>
                                                    </div>



                                                    <div class="row mt-4 mb-4">
                                                        <div class="col-md-12">
                                                            <button type="button" class="btn btn-outline-primary post-btn mr-3" >BACK</button>
                                                            <button type="button" class="btn btn-login " >NEXT STEP</button>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
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

export default ServiceproviderHirestep2;