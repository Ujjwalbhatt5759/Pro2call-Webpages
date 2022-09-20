import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderHirestep3() {

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
                                                <h2>step 3: duration & budget</h2>
                                            </div>
                                            <img src="images/hirestep3.svg" class="mt-3 mt-sm-4" alt="" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <div class="col-md-10">
                                                    <nav>
                                                        <div class="nav nav-tabs hire-steptab" role="tablist">
                                                            <a class="nav-item nav-link active" href="#">
                                                                headline
                                                            </a>
                                                            <a class="nav-item nav-link active" href="#">
                                                                category
                                                            </a>
                                                            <a class="nav-item nav-link active" href="#">
                                                                budget
                                                            </a>
                                                            <a class="nav-item nav-link" href="#" >
                                                                preferences
                                                            </a>
                                                        </div>
                                                    </nav>

                                                    <label for="#" class="profile-label mt-4">Specify project budget</label>
                                                    <div class="row">
                                                        <div class="col-md-4 col-6">
                                                            <div class=" desgin-radio">
                                                                <input class="with-gap" type="radio" name="client-selector" id="client1" />
                                                                <label for="client1" class="radio-label">Hourly rate</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-6">
                                                            <div class=" desgin-radio">
                                                                <input class="with-gap" type="radio" name="client-selector" id="client2" />
                                                                <label for="client2" class="radio-label">Fixed cost</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-3 mt-sm-4 align-items-center">
                                                        <div class="col-md-3 col-4">
                                                            <div class="">
                                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Min ($)" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-1 col-1">
                                                            <p class="hirestep-rise">to</p>
                                                        </div>
                                                        <div class="col-md-3 col-4">
                                                            <div class="">
                                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Max ($)" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <label for="#" class="profile-label mt-4">Tentative project length</label>
                                                    <div class="select-box form-group">
                                                        <select className="form-control select-checkout">
                                                            <option >Select project duration</option>
                                                            <option>Newest listing first</option>
                                                            <option>Lowest budget</option>
                                                            <option>Highest budget</option>
                                                            <option>Oldest listing first</option>
                                                        </select>
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

export default ServiceproviderHirestep3;