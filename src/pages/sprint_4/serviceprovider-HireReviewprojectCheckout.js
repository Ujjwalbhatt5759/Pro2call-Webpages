import React from 'react';
import { Link } from "react-router-dom";

function ServiceproviderHirereviewprojectCheckout () {

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

            <section class="client-section  position-relative">

                <div class="login-img d-none d-md-block">
                    <div class="container-fluid h-100">
                        <div class="row h-100">
                            <div class="col-md-5 order-sm-2 pr-0 h-100">
                                <img src="images/client-selector-right.svg" class="loginbg" alt="" />
                            </div>
                            <div class="col-md-7 order-sm-1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container min-heighvh position-relative">
                    <div class="row pt-4">
                        <div class="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                            <h1>add a billing method</h1>
                            <h2>verification for project</h2>

                            <div class="row">
                                <div class="col-md-5">
                                    <label for="#" class="profile-label mt-3 mt-sm-4">Payment type</label>
                                    <div class="row">
                                        <div class="col-md-4 pr-0">
                                            <div class="form-group">
                                                <input class="filled-in" type="checkbox" value="" id="Check" />
                                                <label class="checkFrom-label" for="Check">
                                                    Credit/debit card
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <input class="filled-in" type="checkbox" value="" id="Check1" />
                                                <label class=" checkFrom-label" for="Check1">
                                                    Digital wallet (Paypal, stripe etc.)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group mt-2 mt-sm-3 position-relative">
                                                <img src="images/payment.png" class="payment-checkout" alt="" />
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="1234 5678 1234 5678" />
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="First name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Last name" />
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Expiry (MM/YY)" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="CVV/CVV2" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <label for="#" class="profile-label mt-2 mt-sm-4">Billing information</label>

                                    <div class="row mt-2">
                                      <div class="col-md-6 col-6">
                                        <div class="select-box form-group">
                                           <select className="form-control select-checkout">
                                                    <option value="3">India</option>
                                                    <option>Newest listing first</option>
                                                    <option>Lowest budget</option>
                                                    <option>Highest budget</option>
                                                    <option>Oldest listing first</option>
                                            </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-6">
                                      <div class="select-box form-group">
                                           <select className="form-control select-checkout">
                                                    <option value="3">State</option>
                                                    <option>Newest listing first</option>
                                                    <option>Lowest budget</option>
                                                    <option>Highest budget</option>
                                                    <option>Oldest listing first</option>
                                            </select>
                                        </div>
                                      </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                        <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="City" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-6">
                                        <div class="form-group">
                                                <input type="email" class="form-control login-input profile-inpt" placeholder="Postal code" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="row mt-2 mt-sm-4 mb-4">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-login mr-3">PROCEED FOR VERIFICATION</button>
                                    <button type="button" class="btn btn-outline-primary post-btn">BACK</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default ServiceproviderHirereviewprojectCheckout;