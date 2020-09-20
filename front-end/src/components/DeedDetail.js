import React, { useState, useEffect } from "react";
import MiniProfile from "../components/MiniProfile";
import { Redirect } from "react-router";
import Moment from "react-moment";
import 'moment-timezone';
import RatingBadge from './Rating/RatingBadge';

export default function DeedDetail(props) {
	const [detailData, setDetailData] = useState({});
	const [assignedUser, setAssignedUser] = useState({});
	let deedStatus = "";
	const id = props.match.params.id;
	const userId = window.sessionStorage.getItem("users_id"); // rename to userid
	const [goThrough, setGoThrough] = useState(false);
	const [doneDeed, setDoneDeed] = useState(false);
	const [isOwner, setIsOwner] = useState(false);
	const [loadingAssignedUser, setLoadingAssignedUser] = useState(true);

	async function getDeedsId() {
		const resp = await fetch(`http://localhost:5000/deed/${props.match.params.id}`)
		const deeds = await resp.json();
		setDetailData(deeds);
		if (userId == deeds.assigner_id) {
			setIsOwner(true)
		};
	};

	useEffect(() => {
		getDeedsId();
	}, []);

	async function getAssignedUser() {
		const resp = await fetch(`http://localhost:5000/deed/${id}/assigned_users`)
		let assignedUser = {};
		if (resp.status === 200) {
			assignedUser = await resp.json();
		};
		setAssignedUser(assignedUser)
		setLoadingAssignedUser(false);
	};

	useEffect(() => {
		getAssignedUser();
	}, []);

	const acceptDeed = async (e) => {
		e.preventDefault();
		deedStatus = 'assigned'
		try {
			const body = { deedStatus, userId, id };
			const response = await fetch(`http://localhost:5000/change_status`, {
				method: "PUT",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(body)
			});
			await response.json();
			setGoThrough(true);
		} catch (err) {
			console.error(err.message);
		}
	};

	const completeDeed = async (e) => {
		e.preventDefault();
		deedStatus = 'completed'
		try {
			const body = { deedStatus, userId, id };
			const response = await fetch(`http://localhost:5000/change_status`, {
				method: "PUT",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(body)
			});
			await response.json();
			setGoThrough(true);
		} catch (err) {
			console.error(err.message);
		}
	};

	if (loadingAssignedUser || !detailData) {
		return <div>Loading ...</div>;
	}

	if (goThrough) {
		return <Redirect to={"/upcoming"} />
	};

	if (doneDeed) {
		return <Redirect to={"/completed"} />
	}

	return (
		<section>
			<div className="container">
				<section className="section">
					<div className="container">
						{/* button : save & continue */}
						<button onClick={acceptDeed}
							className={`btog button is-success is-pulled-right ${isOwner ? 'is-hidden' : ''}`} >
							Available goodDeed
						</button>
						<div>
							<span className="tag is-light">{detailData.location}</span>
						</div>
						<button onClick={completeDeed} className={`btog button is-warning is-pulled-right ${isOwner ? '' : 'is-hidden'}`} >
							Complete Deed
						</button>
						{/* screen title */}
						<h1 className="title is-size-1">goodDeed Detail</h1>
					</div>
					<div>
						<section>
							{/* avatar */}
							<div className="container">
								<article className="media is-pulled-right">
									<figure className="media-left">
										<p className="image is-48x48">
											<img
												className="is-rounded"
												src={detailData.picture}
												alt="user avatar"
											/>
										</p>
									</figure>
									{/* requester's info */}
									<div className="media-content">
										<div className="content is-pulled-right">
											<p>
												<strong>{detailData.name}</strong> <br />
												<small>@{detailData.username}</small>{" "}
												{/* <span className="tag is-success is-normal">Rating</span>{" "}
												<small>100%</small> */}
												<RatingBadge userId={window.sessionStorage.getItem('users_id')}
															badgeSize="is-normal">
												</RatingBadge>
												<br />
												<label className="label mt-2">Location</label>
												<span>{detailData.location}</span>{" "}
												<label className="label mt-2">Community</label>
												<span className="tag is-warning is-normal">
													{detailData.category}
												</span>{" "}
											</p>
										</div>
									</div>
								</article>
							</div>
						</section>
						{/* goodDeed Date & Time Info  */}
						<section className="mt-6">
							<nav className="level">
								<div className="level-item has-text-centered">
									<div>
										<p className="heading">Date Created</p>
										<p className="title"><Moment format="MM/DD/YYYY">{detailData.date_created}</Moment></p>
									</div>
								</div>
								<div className="level-item has-text-centered">
									<div>
										<p className="heading">Date Requested</p>
										<p className="title"><Moment format="MM/DD/YYYY">{detailData.date_todo}</Moment></p>
									</div>
								</div>
								<div className="level-item has-text-centered">
									<div>
										<p className="heading">Requested Time</p>
										<p className="title"><Moment format="hh:mm A">{detailData.date_todo}</Moment></p>
									</div>
								</div>
								{/* <div className="level-item has-text-centered">
									<div>
										<p className="heading">End Time</p>
										<p className="title">2:30pm</p>
									</div>
								</div> */}
							</nav>
						</section>
						{/* Deed Summary & Things You Know Section */}
						<section>
							<div className="columns mt-6">
								<div className="column">
									<section>
										<h1 className="title">{detailData.title}</h1>
										<h2 className="subtitle">
											{detailData.description}
										</h2>
									</section>
								</div>
							</div>
						</section>
						{/* Assigned & Backup GoodDeed'r */}
						<section className={`section ${detailData.status === 'assigned' ? '' : 'is-hidden'}`}>
							<div className="container">
								<div className="columns">
									<div className="column">
										<h1 className="title mt-6">Assigned goodDeed'r</h1>
										<MiniProfile usersInfo={assignedUser} />
									</div>
									{/* <div className="column">
										<h1 className="title mt-6">Backup goodDeed'r</h1>
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