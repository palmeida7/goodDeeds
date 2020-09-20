import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import 'moment-timezone';

export default function CompletedDeeds() {
	const [deeds, setDeeds] = useState([]);

	async function getDeeds() {
		const response = await fetch("http://localhost:5000/upcoming_deeds?" + new URLSearchParams({
			status: 'completed',
			assignedId: window.sessionStorage.getItem('users_id')
		}));
		const deedArray = await response.json();
		setDeeds(deedArray);
	}
	useEffect(() => {
		getDeeds();
	}, []);

	const matchTagImg = (deed) => {
		if (deed.category === "Black Lives Matter") {
			return "https://i.imgur.com/ROvf215.png"
		} else if (deed.category === "Senior") {
			return "https://i.imgur.com/TOHpmYW.png"
		} else if (deed.category === "LBGTQ") {
			return "https://i.imgur.com/AAgWHo0.png"
		} else {
			return "https://i.imgur.com/YU649NJ.png"
		}
	}

	const matchTagColor = (deed) => {
		if (deed.category === "Black Lives Matter") {
			return "tag is-black"
		} else if (deed.category === "Senior") {
			return "tag is-warning"
		} else if (deed.category === "LBGTQ") {
			return "tag is-primary"
		} else {
			return "tag is-red"
		}
	}

	return (
		<section>
			<div className="container">
				<section className="section">
					<div className="container">
						{/* button : save & continue */}
						<Link to={'/upcoming'} className="button is-warning is-pulled-right mr-3">
							Upcoming goodDeeds
						</Link>
						<Link to={'/explore'} className="button is-success is-pulled-right mr-3">
							Available goodDeeds
						</Link>
						<div>
							<span className="tag is-light mt-4">{window.sessionStorage.getItem("location")}</span>
						</div>
						{/* screen title */}
						<h1 className="title is-size-1">Completed goodDeeds</h1>
					</div>
					<div>
						<section>
							{/* avatar */}
							<div className="container">
								<article className="media">
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
							</div>
						</section>
					</div>
				</section>
				{/* goodDeed Cards */}
				<div className="column is-one-quarter">
					{/* card #1 start */}
					{deeds.map((deed, idx) => (
						<div className="card mb-3" key={idx}>
							<div className="card-image">
								<figure className="image is-4by3">
									<img
										// category card image
										src={matchTagImg(deed)}
										alt="banner"
									/>
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										{/* image avatar */}
										<Link to={`/public_profile/${deed.email}`}>
											<figure className="image is-48x48">
												<img
													className="is-rounded"
													src={deed.picture}
													alt="specific users profile"
												/>
											</figure>
										</Link>
									</div>
									{/* user info */}
									<div className="media-content">
										<p className="title is-4">{deed.name}</p>
										<p className="subtitle is-6">@{deed.username}</p>
									</div>
								</div>
								{/* interest tags areas */}
								<label className="label">Community</label>
								<div className="tags has-addons">
									<span className={matchTagColor(deed)}>{deed.category}</span>
								</div>
								{/* location */}
								<div className="content">
									<label className="label mb-0">Location</label>
									{deed.location}
									<br />
									{/* summary */}
									<label className="label mb-0">Deed Summary</label>
									{deed.description}
									<br />
									{/* deed date */}
									<label className="label mb-0">Deed Request</label>
									<time dateTime="2016-1-1">
										<Moment format="MM/DD/YYYY hh:mm A">{deed.date_todo}</Moment>
									</time>
									<br />
									{/* learn more */}
									<pre>{JSON.stringify(deed, null, 2)}</pre>
									<Link className="button is-info mt-3 " to={`/details/${deed.id}`} >Learn More</Link>
									{/* <button className="button is-black mt-3 is-pulled-right is-hidden">
										Learn More
									</button> */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
