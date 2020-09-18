import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
export default function Available_GoodDeeds(props) {
	const [deeds, setDeeds] = useState([]);
	const [learnMore, setLearnMore] = useState(false);
	const deedsData = props.deedsData || {};
	// const [interestArea, setInterestArea] = useState(deedsData.category);
	let bannerImg = "";
	let tagColor = "";

	// useEffect(() => {
	// 	if (!props.deedsData) {
	// 	try {
	// 		fetch(`http://localhost:5000/deeds/status`)
	// 			.then(res => res.json())
	// 			.then(data => console.log(data))
	// 			.then(data => setDeeds(data))
	// 			.then(data => setInterestArea(data.category))
	// 	} catch (err) {
	// 		console.error(err.message);
	// 	}
	// 	}
	// })
	async function getDeeds() {
		if (!props.deedsData) {
			const response = await fetch("http://localhost:5000/deeds/status");
			const deedArray = await response.json();
			console.log(deedArray);
			setDeeds(deedArray);
			// setInterestArea(deedArray.category);
		}
	}
	useEffect(() => {
		getDeeds();
	}, []);

	const onClick = () => {
		setLearnMore(true);
	};

	if (learnMore) {
		return <Redirect to={"/details"} />
	};

	if (deeds.category === "Black Lives Matter") {
		bannerImg = "https://i.imgur.com/ROvf215.png"
	} else if (deeds.category === "Senior") {
		bannerImg = "https://i.imgur.com/TOHpmYW.png"
	} else if (deeds.category === "LBGTQ") {
		bannerImg = "https://i.imgur.com/AAgWHo0.png"
	} else {
		bannerImg = "https://i.imgur.com/YU649NJ.png"
	}

	// blm
	// "tag is-black"
	// senior
	// "tag is-warning"
	// lbgtq
	// "tag is-primary"


	return (
		<section>
			<div className="container">
				<section className="section">
					<div className="container">
						{/* button : save & continue */}
						<button className="button is-dark is-pulled-right">
							Completed goodDeeds
						</button>
						<button className="button is-warning is-pulled-right mr-3">
							Upcoming goodDeeds
						</button>
						<div>
							<span className="tag is-light mt-4">Atlanta, GA</span>
						</div>
						{/* screen title */}
						<h1 className="title is-size-1">Available goodDeeds</h1>
					</div>
					<div>
						<section>
							{/* avatar */}
							<div className="container">
								<article className="media">
									<figure className="media-left">
										<p className="image is-48x48">
											<img
												className="is-rounded"
												src={window.sessionStorage.getItem("picture")}
											/>
										</p>
									</figure>
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
				<div className="container" >
					<div className="columns ">
						<div className="column is-one-quarter">
							{/* card #1 start */}
							{deeds.map((deed, idx) => (
								<div className="card" key={idx}>
									<div className="card-image">
										<figure className="image is-4by3">
											<img
												// black lives matter image
												src={"https://i.imgur.com/ROvf215.png"}
												alt="Placeholder image"
											/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-left">
												{/* image avatar */}
												<figure className="image is-48x48">
													<img
														className="is-rounded"
														src={deed.picture}
														alt="Placeholder image"
													/>
												</figure>
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
											<span className={tagColor}>{deed.category}</span>
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
												{deed.date_todo}
											</time>
											<br />
											{/* learn more */}
											<button className="button is-info mt-3 " onClick={onClick} >Learn More</button>
											<button className="button is-black mt-3 is-pulled-right is-hidden">
												Learn More
									</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}