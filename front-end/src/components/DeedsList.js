import React from "react";
import { Link } from "react-router-dom";

export default function DeedsList() {
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
                                                <span className="tag is-success is-normal">Rating</span>{" "}
                                                <small>100%</small>
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
                                            <th>Full Name</th>
                                            <th>
                                                <abbr title="deed_name">Deed Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="deed_assigned">Deed Assigned To</abbr>
                                            </th>
                                            <th>
                                                <abbr title="city_st">City, ST</abbr>
                                            </th>
                                            <th>
                                                <abbr title="date">Date</abbr>
                                            </th>
                                            <th>
                                                <abbr title="start_time">Start Time</abbr>
                                            </th>
                                            <th>
                                                <abbr title="end_time">End Time</abbr>
                                            </th>
                                            <th>
                                                <abbr title="status">Status</abbr>
                                            </th>
                                        </tr>
                                        {/* table row */}
                                        <tr>
                                            <th id="deed_id">1</th>
                                            <td id="full_name">
                                                <a
                                                    href="https://www.google.com"
                                                    title="Leicester City F.C."
                                                >
                                                    Jim Jones
                                                </a>{" "}
                                            </td>
                                            <td id="deed_name">Groceries for senior</td>
                                            <td id="deed_assigned">Journey Encore</td>
                                            <td id="city">Brookhaven</td>
                                            <td id="date">9-23-20</td>
                                            <td id="start_time">8:30 AM</td>
                                            <td id="end_time">9:30 AM</td>
                                            <td id="deed_status">Completed</td>
                                        </tr>
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