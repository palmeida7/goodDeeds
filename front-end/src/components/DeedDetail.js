import React, { useState, useEffect } from "react";
import MiniProfile from "../components/MiniProfile";
import Moment from "react-moment";
import 'moment-timezone';


export default function DeedDetail(props) {
	const [detailData, setDetailData] = useState({});

	async function getDeedsId() {
		const resp = await fetch(`http://localhost:5000/deed/${props.match.params.id}`)
		const deeds = await resp.json();
		console.log(deeds);
		setDetailData(deeds);
	}

	useEffect(() => {
		getDeedsId()
	}, []);

	return (
		<section>
			<div class="container">
				<section class="section">
					<div class="container">
						{/* button : save & continue */}
						<button class="button is-success is-pulled-right">
							Available goodDeed
						</button>
						<div>
							<span class="tag is-light">{detailData.location}</span>
						</div>
						{/* screen title */}
						<h1 class="title is-size-1">goodDeed Detail</h1>
					</div>
					<div>
						<section>
							{/* avatar */}
							<div class="container">
								<article class="media is-pulled-right">
									<figure class="media-left">
										<p class="image is-48x48">
											<img
												class="is-rounded"
												src={window.sessionStorage.getItem("picture")}
												alt="user's avatar"
											/>
										</p>
									</figure>
									{/* requester's info */}
									<div class="media-content">
										<div class="content is-pulled-right">
											<p>
												<strong>Requester</strong> <br />
												<small>@{detailData.username}</small>{" "}
												<span class="tag is-success is-normal">Rating</span>{" "}
												<small>100%</small>
												<br />
												<label class="label mt-2">Location</label>
												<span>Brookhaven, GA</span>{" "}
												<label class="label mt-2">Community</label>
												<span class="tag is-warning is-normal">
													Seniors
												</span>{" "}
											</p>
										</div>
									</div>
								</article>
							</div>
						</section>
						{/* goodDeed Date & Time Info  */}
						<section class="mt-6">
							<nav class="level">
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Date Created</p>
										<p class="title"><Moment format="MM/DD/YYYY">{detailData.date_created}</Moment></p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Date Requested</p>
										<p class="title"><Moment format="MM/DD/YYYY">{detailData.date_todo}</Moment></p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Requested Time</p>
										<p class="title"><Moment format="hh:mm A">{detailData.date_todo}</Moment></p>
									</div>
								</div>
								{/* <div class="level-item has-text-centered">
									<div>
										<p class="heading">End Time</p>
										<p class="title">2:30pm</p>
									</div>
								</div> */}
							</nav>
						</section>
						{/* Deed Summary & Things You Know Section */}
						<section>
							<div class="columns mt-6">
								<div class="column">
									<section>
										<h1 class="title">Summary</h1>
										<h2 class="subtitle">
											{detailData.description}
										</h2>
									</section>
								</div>
							</div>
						</section>
						{/* Assigned & Backup GoodDeed'r */}
						<section class="section">
							<div class="container">
								<div class="columns">
									<div class="column">
										<h1 class="title mt-6">Assigned goodDeed'r</h1>
										<MiniProfile />
									</div>
									{/* <div class="column">
										<h1 class="title mt-6">Backup goodDeed'r</h1>
										<MiniProfile />
									</div> */}
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</section>
	);
}