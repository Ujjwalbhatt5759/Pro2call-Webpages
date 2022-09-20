import React from 'react';
import { Link } from "react-router-dom";
// import { Accordion, Card, Button } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin! 


function ServiceproviderindividualAccountTimeslot() {

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

            <section class="pb-4 pb-sm-5">
                <div class="container">
                   
                    <div class="row pt-4">
                        <div class="col-md-7 mt-2 pt-5 mt-sm-5 ">
                            <div class="client-profilehead newclient-headclender position-relative">

                                <h2>edit service slots</h2>
                            </div>
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                events={[
                                    { title: '12 slots', date: '2022-09-01' },
                                    { title: '4 slots', date: '2022-09-02' },
                                    { title: 'No slots', date: '2022-09-03' },
                                    { title: 'No slots', date: '2022-09-04' },
                                    { title: '12 slots', date: '2022-09-05' },
                                    { title: '12 slots', date: '2022-09-06' },
                                    { title: '12 slots', date: '2022-09-07' },
                                    { title: '10 slots', date: '2022-09-08' },
                                    { title: 'No slots', date: '2022-09-09' },
                                    { title: 'No slots', date: '2022-09-10' },
                                    { title: '6 slots', date: '2022-09-11' },
                                    { title: '4 slots', date: '2022-09-12' },
                                    { title: '5 slots', date: '2022-09-13' },
                                    { title: '6 slots', date: '2022-09-14' },
                                    { title: '6 slots', date: '2022-09-15' },
                                    { title: '6 slots', date: '2022-09-16' },
                                    { title: '12 slots', date: '2022-09-17' },
                                    { title: '12 slots', date: '2022-09-18' },
                                    { title: '6 slots', date: '2022-09-19' },
                                    { title: '11 slots', date: '2022-09-20' },
                                    { title: '6 slots', date: '2022-09-21' },
                                    { title: '10 slots', date: '2022-09-22' },
                                    { title: 'No slots', date: '2022-09-23' },
                                    { title: 'No slots', date: '2022-09-24' },
                                    { title: '6 slots', date: '2022-09-25' },
                                    { title: '4 slots', date: '2022-09-26' },
                                    { title: '5 slots', date: '2022-09-27' },
                                    { title: '6 slots', date: '2022-09-28' },
                                    { title: '6 slots', date: '2022-09-29' },
                                    { title: '6 slots', date: '2022-09-30' }

                                ]}
                            />

                        </div>
                        <div class="col-md-5 mt-2 pt-1 pt-sm-5 mt-sm-5 pl-3 pl-sm-0">
                            <div class="row text-sm-right text-left">
                                <div class="col-md-12 mt-2">
                                    <button type="button" class="btn btn-login mr-3">UPDATE SERVICE SLOTS</button>
                                    <button type="button" class="btn btn-outline-primary post-btn">BACK</button>
                                </div>
                            </div>


                            <div class="account-timeslotsec mt-4 mt-sm-5">
                                <div class="row">
                                    <div class="col-md-12">

                                        <label for="#" class="profile-label">Select time slots</label>

                                        <div class="accountTime-slot">
                                            <input class="with-gap" type="radio" name="client-selector" id="client1" />
                                            <label for="client1">9 am - 10 am</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client2" />
                                            <label for="client2">12 pm - 1 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client3" />
                                            <label for="client3">1 pm - 12 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client4" />
                                            <label for="client4">2 pm - 10 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client5" />
                                            <label for="client5">7 pm - 11 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client6" />
                                            <label for="client6">8 pm - 12 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client7" />
                                            <label for="client7">9 pm - 10 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client8" />
                                            <label for="client8">9 pm - 10 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client9" />
                                            <label for="client9">9 pm - 10 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client10" />
                                            <label for="client10">9 pm - 10 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client11" />
                                            <label for="client11">9 pm - 10 pm</label>

                                            <input class="with-gap" type="radio" name="client-selector" id="client12" />
                                            <label for="client12">9 pm - 10 pm</label>
                                        </div>


                                        <label for="#" class="profile-label mt-2 mt-sm-4">Bulk action (for this month)</label>
                                        <div class="balk-actionsection">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Check" />
                                                            <label class="checkFrom-label" for="Check">
                                                                No slots for all Mondays
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Chec2" />
                                                            <label class="checkFrom-label" for="Chec2">
                                                                No slots for all  Fridays
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Chec3" />
                                                            <label class="checkFrom-label" for="Chec3">
                                                                No slots for all Tuesdays
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Chec4" />
                                                            <label class="checkFrom-label" for="Chec4">
                                                            No slots for all <span class="new-labelbluetext">Saturdays</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Chec5" />
                                                            <label class="checkFrom-label" for="Chec5">
                                                            No slots for all Wednesdays
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Chec6" />
                                                            <label class="checkFrom-label" for="Chec6">
                                                            No slots for all Sundays
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input class="filled-in" type="checkbox" value="" id="Chec7" />
                                                            <label class="checkFrom-label" for="Chec7">
                                                            No slots for all Thursdays
                                                            </label>
                                                        </li>
                                                    </ul>
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

export default ServiceproviderindividualAccountTimeslot;