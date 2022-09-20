import React from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function ServiceproviderHirestep4 () {

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
                                                <h2>step 4: additional preference</h2>
                                            </div>
                                            <img src="images/hirestep4.svg" class="mt-3 mt-sm-4" alt="" />
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
                                                            <a class="nav-item nav-link active" href="#" >
                                                                preferences
                                                            </a>
                                                        </div>
                                                    </nav>

                                                    <label for="#" class="profile-label mt-4">Add more preferences to your project</label>
                                                    <div class="select-box form-group">
                                                        <select className="form-control select-checkout">
                                                            <option >Select profile type</option>
                                                            <option>Newest listing first</option>
                                                            <option>Lowest budget</option>
                                                            <option>Highest budget</option>
                                                            <option>Oldest listing first</option>
                                                        </select>
                                                    </div>

                                                    <label for="#" class="profile-label mt-2">English level</label>
                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client1" />
                                                            <label for="client1" class="radio-label">Any level</label>
                                                    </div>

                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client2" />
                                                            <label for="client2" class="radio-label">Conversational or better</label>
                                                    </div>
                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client3" />
                                                            <label for="client3" class="radio-label">Fluent or better</label>
                                                    </div>
                                                    <div class=" desgin-radio">
                                                        <input class="with-gap" type="radio" name="client-selector" id="client4" />
                                                            <label for="client4" class="radio-label">Native or bilingual only</label>
                                                    </div>
                                                   

                                                    <label for="#" class="profile-label mt-3">Bidding closing date</label>
                                                    <div class="select-box form-group">
                                                        <select className="form-control select-checkout">
                                                            <option>Select day(s)</option>
                                                            <option>Newest listing first</option>
                                                            <option>Lowest budget</option>
                                                            <option>Highest budget</option>
                                                            <option>Oldest listing first</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row mt-2 mt-sm-3 mb-4 pl-0 pl-sm-5">
                                                <div class="col-md-12">
                                                    <button type="button" class="btn btn-outline-primary post-btn mr-1 mr-sm-3" >BACK</button>
                                                    <button type="button" class="btn btn-outline-primary post-btn mr-1 mr-sm-3" >SAVE AS DRAFT</button>
                                                    <button type="button" class="btn btn-login " >GO TO DASHBOARD</button>
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

export default ServiceproviderHirestep4;