import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderHirestep1 () { 
    
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
                            <div class="tab-pane fade show active" >
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="client-profilehead">
                                            <h1>post a project</h1>
                                            <h2>step 1: headline</h2>
                                        </div>
                                        <img src="images/hirestep1.svg" class="mt-3 mt-sm-5" alt="" />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <nav>
                                                    <div class="nav nav-tabs hire-steptab" role="tablist">
                                                      <a class="nav-item nav-link active" href="#">
                                                        headline 
                                                      </a>
                                                      <a class="nav-item nav-link"  href="#">
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

                                                  <label for="#" class="profile-label mt-4">Headline for your project</label>
                                                  <div class="">
                                                      <input type="email" class="form-control login-input profile-inpt" placeholder="Start typing here…" />
                                                  </div>
                                                  <h4 class="text-right words-text">0/100 words</h4>
                  
                                                  <div class="border-bottom mt-3"></div>
                                                  <div class="profile-content">
                                                      <div class="row mt-4 mt-sm-4">
                                                          <div class="col-md-12">
                                                              <h1>Writing heading tips</h1>
                                                              <ul>
                                                                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                      eiusmod tempor incididunt
                                                                      ut labore et dolore magna aliqua.</li>
                                                                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                      eiusmod tempor incididunt
                                                                      ut labore et dolore magna aliqua.</li>
                                                                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                      eiusmod tempor incididunt
                                                                      ut labore et dolore magna aliqua.</li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="row mt-2 mb-4 mb-sm-0">
                                                      <div class="col-md-12">
                                                         <button type="button" class="btn btn-outline-primary post-btn mr-3">BACK</button>
                                                          <button type="button" class="btn btn-login "  >NEXT STEP</button>
                                                          
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

export default ServiceproviderHirestep1;