import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderHirereviewprojectCheckoutThankyou () {

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

            <section class="client-section sericeproviderCheckoutThankyou position-relative">

                <div class="login-img d-none d-md-block">
                    <div class="container-fluid h-100">
                        <div class="row h-100">
                            <div class="col-md-5 order-sm-2 pr-0 h-100">
                                <img src="images/hire-thankyou.svg" class="loginbg" alt="" />
                            </div>
                            <div class="col-md-7 order-sm-1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container min-heighvh position-relative">
                    <div class="row pt-4 text-center align-items-end">
                        <div class="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                            <div class="hire-thankyou">
                            <h1>your verification has been <span>completed</span></h1>
                            <h2>proceed to your project status</h2>
                            <button type="button" class="btn btn-login mt-4">VIEW PROJECT LIST</button>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default  ServiceproviderHirereviewprojectCheckoutThankyou;