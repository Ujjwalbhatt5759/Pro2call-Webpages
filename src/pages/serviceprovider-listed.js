import React from 'react';
import { Link } from "react-router-dom";

function Listed() {

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
                                            <p>Hi, MockLabs Inc.!</p>
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
            <nav class="navbar navbar-expand-lg  Listed-nav">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                           <a class="nav-item nav-link" href="#"><img src="images/status.svg" alt="" />BROWSE</a>
                            <a class="nav-item nav-link" href="#"><img src="images/note.svg" alt="" />PROJECTS</a>
                            <a class="nav-item nav-link active" href="#"><img src="images/note.svg" alt="" />SERVICES</a>
                            <a class="nav-item nav-link" href="#"><img src="images/doller.svg" alt="" />EARNINGS</a>
                            <a class="nav-item nav-link" href="#"><img src="images/mgs.svg" alt="" />SUPPORT</a>
                            <a class="nav-item nav-link" href="#"><img src="images/setting.svg" alt="" />ACCOUNT</a>
                            <a class="nav-item nav-link" href="#"><img src="images/archive.svg" alt="" />SAVED</a>
                            <a class="nav-item nav-link" href="#"><img src="images/trend.svg" alt="" />REPORTS</a>
                        </div>
                    </div>
                </div>
            </nav>

            <section>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-md-12">
                        <button type="button" class="btn btn-outline-dark mayment-btn mr-3">SCHEDULED  <span class="notification-numb btn-notification">2</span></button>
                        <button type="button" class="btn btn-outline-dark mayment-btn mr-3">PAYMENT PENDING  <span class="notification-numb btn-notification2">3</span></button>
                        <button type="button" class="btn btn-outline-dark mayment-btn mr-3">SERVICE HISTORY</button>
                        <button type="button" class="btn btn-outline-dark mayment-btn ">ADD NEW SERVICE</button>
                        </div>
                    </div>
                </div>
            </section>









        </>
    );
}

export default Listed;