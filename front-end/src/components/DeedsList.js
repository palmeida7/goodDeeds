import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import 'moment-timezone';
import RatingBadge from './Rating/RatingBadge';

export default function DeedsList() {
    const [deeds, setDeeds] = useState([]);

    async function getDeeds() {
        const response = await fetch("http://localhost:5000/deeds_list?" + new URLSearchParams({
            assignerId: window.sessionStorage.getItem('users_id')
        }));
        const deedArray = await response.json();
        setDeeds(deedArray);
    }
    useEffect(() => {
        getDeeds();
    }, []);

    return (
        <section>
            <div class="container">
                <section class="section">
                    <div class="container">
                        <div>
                            <span class="tag is-light">{window.sessionStorage.getItem('location')}</span>
                        </div>
                        {/* screen title */}
                        <h1 class="title is-size-1">Deeds List</h1>
                    </div>
                    <div>
                        <section>
                            {/* avatar */}
                            <div class="container">
                                <article class="media">
                                    <Link to={`/public_profile/${window.sessionStorage.getItem('email')}`}>
                                        <figure className="image is-48x48">
                                            <img
                                                className="is-rounded"
                                                src={window.sessionStorage.getItem('picture')}
                                                alt="owners profile"
                                            />
                                        </figure>
                                    </Link>
                                    {/* user info */}
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{window.sessionStorage.getItem("name")}</strong> <br />
                                                <small>@{window.sessionStorage.getItem("username")}</small>{" "}
                                                {/* <span className="tag is-success is-normal">Rating</span>{" "}
                                                <small>100%</small> */}
                                                <RatingBadge userId={window.sessionStorage.getItem('users_id')}
                                                    badgeSize="is-normal">
                                                </RatingBadge>
                                                <br />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <br />
                                <label className="label">Deeds</label>
                                {/* deeds table start */}
                                <table class="table is-fullwidth">
                                    {/* table headers */}
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="id">id</abbr>
                                            </th>
                                            <th>
                                                <abbr title="deed_name">Deed Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="categoty">Category</abbr>
                                            </th>
                                            <th>
                                                <abbr title="location">Location</abbr>
                                            </th>
                                            <th>
                                                <abbr title="date">Requested Date</abbr>
                                            </th>
                                            <th>
                                                <abbr title="request_date">Requested Time</abbr>
                                            </th>
                                            <th>
                                                <abbr title="status">Status</abbr>
                                            </th>
                                        </tr>
                                        {/* table row */}
                                        {deeds.map((deed, idx) => (
                                            <tr key={idx}>
                                                <th id="deed_id">{deed.id}</th>
                                                <td id="deed_name">
                                                    <Link to={`/details/${deed.id}`}>
                                                        {deed.title}
                                                    </Link>{" "}
                                                </td>
                                                <td id="category">{deed.category}</td>
                                                <td id="location">{deed.location}</td>
                                                <td id="date"><Moment format="MM/DD/YYYY">{deed.date_todo}</Moment></td>
                                                <td id="request_date"><Moment format="hh:mm A">{deed.date_todo}</Moment></td>
                                                <td id="status">{deed.status}</td>
                                            </tr>
                                        ))}
                                        {/* table row end */}
                                    </thead>
                                </table>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    );
} 