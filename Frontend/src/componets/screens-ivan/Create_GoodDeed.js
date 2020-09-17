import React, { Fragment } from "react";

export default function Create_GoodDeed() {
	return (
		<Fragment>
			<section>
				<div class="container">
					<section class="section">
						<div class="container">
							{/* button : save & continue */}

							<button class="button is-light is-pulled-right">
								Save & Continue
							</button>
							<div>
								<span class="tag is-light">Atlanta, GA</span>
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
													src="https://bulma.io/images/placeholders/128x128.png"
												/>
											</p>
										</figure>

										{/* user info */}

										<div class="media-content">
											<div class="content">
												<p>
													<strong>John Smith</strong> <br />
													<small>@johnsmith</small>{" "}
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
			);
			<body>
				<section class="section ml-2">
					<div class="container">
						<div class="columns">
							<div class="column">
								{/* full name */}

								<div class="field">
									<label class="label">Name goodDeed</label>
									<div class="control">
										<input class="input" type="text" placeholder="enter here" />
									</div>
								</div>

								{/* username */}

								<div class="field">
									<label class="label">Date & Start Time</label>
									<div class="control">
										<input
											class="input"
											type="email"
											placeholder="enter date & start time"
										/>
									</div>
								</div>

								{/* email */}

								<div class="field">
									<label class="label">Date & End time</label>
									<div class="control">
										<input
											class="input"
											type="email"
											placeholder="enter date & end time"
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
											placeholder="enter city & state"
										/>
									</div>
								</div>

								{/* Interest areas */}

								<label class="label">Interest Areas</label>
								<div class="tags has-addons">
									<span class="tag is-warning">Seniors</span>
									<a class="tag is-delete mr-2"></a>
									<span class="tag is-black">Black Lives Matter</span>
									<a class="tag is-delete mr-2"></a>
									<span class="tag is-primary">LBGTQ</span>
									<a class="tag is-delete mr-2"></a>
								</div>
							</div>

							<div class="column">
								{/* phone number */}

								<div class="field">
									<label class="label">Email</label>
									<div class="control">
										<input
											class="input"
											type="text"
											placeholder="enter email"
										/>
									</div>
								</div>

								{/* location */}

								<div class="field">
									<label class="label">Phone Number</label>
									<div class="control">
										<input
											class="input"
											type="text"
											placeholder="enter phone #"
										/>
									</div>
								</div>

								{/* short bio */}

								<label class="label">Deed Summary</label>
								<textarea
									class="textarea"
									placeholder="e.g. Hello world"
                                ></textarea>
							</div>
						</div>
					</div>
				</section>
			</body>
		</Fragment>
	);
}
