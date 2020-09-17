import React, { Fragment } from "react";

export default function Private_Profile() {
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

							<h1 class="title is-size-1">Private Profile</h1>
						</div>
						<div>
							<section>
								{/* avatar */}

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
													<br />
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

			<body>
				<div class="container">
					<div class="columns ml-2 mr-2">
						<div class="column">
							<div class="field">
								<label class="label">Full Name</label>
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="enter full name"
									/>
								</div>
							</div>

							{/* username */}

							<div class="field">
								<label class="label">Username</label>
								<div class="control">
									<input
										class="input"
										type="email"
										placeholder="enter username"
									/>
								</div>
							</div>

							{/* email */}

							<div class="field">
								<label class="label">Email</label>
								<div class="control">
									<input
										class="input"
										type="email"
										placeholder="enter emailaddress.com"
									/>
								</div>
							</div>

							{/* short bio */}

							<label class="label">Short Bio</label>
							<textarea
								class="textarea"
								placeholder="e.g. Hello world"
							></textarea>
						</div>

						{/* goodDeed rating */}

						<div class="column">
							<h1 class="title">goodDeed Rating</h1>
							<span class="tag is-success is-medium mb-2">100%</span>

							{/* phone number */}

							<div class="field mt-6">
								<label class="label">Phone Number</label>
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="enter phone #"
									/>
								</div>
							</div>

							{/* location */}

							<div class="field">
								<label class="label">Location</label>
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="enter phone #"
									/>
								</div>
							</div>

							{/* interest tags areas */}

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
					</div>
				</div>
			</body>
		</Fragment>
	);
}
