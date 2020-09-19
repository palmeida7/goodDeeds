import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
// import { useAuth0 } from "@auth0/auth0-react";
export default function CreateDeed(props) {
	// deeds
	const deedData = props.deedData || {};
	const [category, setCategory] = useState(deedData.category);
	const [title, setTitle] = useState(deedData.title);
	const [description, setDescription] = useState(deedData.description);
	const [dateTodo, setDateTodo] = useState(deedData.date_todo);
	const [deedLocation, setDeedLocation] = useState(deedData.location);
	const dateCreated = new Date().toISOString();
	const status = "open";
	const assignerId = window.sessionStorage.getItem("users_id");
	const [updated, setUpdated] = useState(false);

	// profile data
	const [userName, setUserName] = useState(window.sessionStorage.getItem("username"));
	const [location, setLocation] = useState(window.sessionStorage.getItem("location"));
	const [name, setName] = useState(window.sessionStorage.getItem("name"));
	const [picture, setPicture] = useState(window.sessionStorage.getItem("picture"));

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { category, title, description, dateCreated, dateTodo, deedLocation, status, assignerId };
			const response = await fetch(`http://localhost:5000/create_deed`, {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(body)
			});
			await response.json();
			setUpdated(true);
		} catch (err) {
			console.error(err.message);
		}
	};

	if (updated) {
		return <Redirect to={"/explore"} />
	};


	return (
		<form onSubmit={onSubmitForm}>
			<section>
				<div class="container">
					<section class="section">
						<div class="container">
							{/* button : save & continue */}
							<button class="button is-light is-pulled-right">
								Save & Continue
							</button>
							<div>
								<span class="tag is-light">{location}</span>
							</div>
							{/* screen title */}
							<h1 class="title is-size-1">Created goodDeed</h1>
						</div>
						<div>
							{/* avatar */}
							<section>
								<div class="container">
									<article class="media">
										<figure class="media-left">
											<p class="image is-48x48">
												<img
													class="is-rounded"
													src={picture}
												/>
											</p>
										</figure>
										{/* user info */}
										<div class="media-content">
											<div class="content">
												<p>
													<strong>{name}</strong> <br />
													<small>@{userName}</small>{" "}
													<span class="tag is-success is-normal">Rating</span>{" "}
													<small>100%</small>
												</p>
											</div>
										</div>
									</article>
								</div>
							</section>
						</div>
					</section>
				</div>
			</section>
			<section class="section ml-2">
				<div class="container">
					<div class="columns">
						<div class="column">
							{/* full name */}
							<div class="field">
								<label class="label">Name goodDeed</label>
								<div class="control">
									<input
										class="input"
										type="text"
										value={title || ""}
										onChange={e => setTitle(e.target.value)}
										placeholder="enter here"
									/>
								</div>
							</div>
							{/* date created */}
							{/* <div class="field">
								<label class="label">Date Created</label>
								<div class="control">
									<input
										class="input"
										type="datetime-local"
										value={dateCreated || ""}
										onChange={e => setDateCreated(e.target.value)}
									/>
								</div>
							</div> */}
							{/* date todo */}
							<div class="field">
								<label class="label">Date Requested</label>
								<div class="control">
									<input
										class="input"
										type="datetime-local"
										value={dateTodo || ""}
										onChange={e => setDateTodo(e.target.value)}
									/>
								</div>
							</div>
							{/* Location */}
							<div class="field">
								<label class="label">City & State</label>
								<div class="control">
									<input
										class="input"
										type="text"
										value={deedLocation || ""}
										onChange={e => setDeedLocation(e.target.value)}
										placeholder="enter city & state"
									/>
								</div>
							</div>
							{/* Category */}
							<label class="label">Interest Areas</label>
							{/* <div class="tags has-addons">
								<span class="tag is-warning">Seniors</span>
								<a class="tag is-delete mr-2"></a>
								<span class="tag is-black">Black Lives Matter</span>
								<a class="tag is-delete mr-2"></a>
								<span class="tag is-primary">LBGTQ</span>
								<a class="tag is-delete mr-2"></a>
							</div> */}
							<div class="control">
								<select
									class="input"
									type="text"
									value={category || ""}
									onChange={e => setCategory(e.target.value)}
								>
									<option value="" disabled hidden>Choose An Interest Area</option>
									<option>Senior</option>
									<option>Black Lives Matter</option>
									<option>LBGTQ</option>
								</select>
							</div>
						</div>
						<div class="column">
							{/* phone number */}
							{/* <div class="field">
								<label class="label">Email</label>
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="enter email"
									/>
								</div>
							</div> */}
							{/* location */}
							{/* <div class="field">
								<label class="label">Phone Number</label>
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="enter phone #"
									/>
								</div>
							</div> */}
							{/* description */}
							<label class="label">Deed Summary</label>
							<textarea
								class="textarea"
								value={description || ""}
								onChange={e => setDescription(e.target.value)}
								placeholder="e.g. Hello world"
							></textarea>
							{/* <label class="label">Things You Should Know</label>
							<textarea
								class="textarea"
								placeholder="e.g. Hello world"
							></textarea> */}
						</div>
					</div>
				</div>
			</section>
		</form>
	);
};

