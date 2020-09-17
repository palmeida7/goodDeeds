import React, { Fragment } from "react";

export default function Upcoming_GoodDeeds() {
	return (
		<section>
			<div class="container">
				<section class="section">
					<div class="container">
						{/* button : save & continue */}

						<button class="button is-dark is-pulled-right">
							Completed goodDeeds
						</button>
						<button class="button is-success is-pulled-right mr-3">
							Available goodDeeds
						</button>
						<div>
							<span class="tag is-light mt-4">Atlanta, GA</span>
						</div>

						{/* screen title */}

						<h1 class="title is-size-1">Upcoming goodDeeds</h1>
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

				{/* goodDeed Cards */}
				<div class="columns">
					<div class="column">
						{/* card #1 start */}

						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
									<img
										src="https://i.imgur.com/ROvf215.png"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										{/* image avatar */}

										<figure class="image is-48x48">
											<img
												class="is-rounded"
												src="https://bulma.io/images/placeholders/96x96.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>

									{/* user info */}

									<div class="media-content">
										<p class="title is-4">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
									</div>
								</div>

								{/* interest tags areas */}

								<label class="label">Community</label>
								<div class="tags has-addons">
									<span class="tag is-black">Black Lives Matter</span>
								</div>

								{/* location */}

								<div class="content">
									<label class="label mb-0">Location</label>
									Brookhaven, GA
									<br />
									{/* summary */}
									<label class="label mb-0">Deed Summary</label>
									This section is designed for a brief summary of the goodDeeds.
									All goodDeeds will have 2-3 sentence summaries.
									<br />
									{/* deed date */}
									<label class="label mb-0">Deed Date</label>
									<time datetime="2016-1-1">
										6:30 PM - 7:30 PM - Sep 28, 2020
									</time>
									<br />
									{/* learn more */}
									<button class="button is-info mt-3 ">Learn More</button>
									<button class="button is-black mt-3 is-pulled-right is-hidden">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="column">
						{/* card #2 start */}
						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
									<img
										src="https://i.imgur.com/AAgWHo0.png"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										{/* image avatar */}

										<figure class="image is-48x48">
											<img
												class="is-rounded"
												src="https://bulma.io/images/placeholders/96x96.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>

									{/* user info */}

									<div class="media-content">
										<p class="title is-4">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
									</div>
								</div>

								{/* interest tags area */}

								<label class="label">Community</label>
								<div class="tags has-addons">
									<span class="tag is-primary">LBGTQ</span>
								</div>

								{/* location */}

								<div class="content">
									<label class="label mb-0">Location</label>
									Brookhaven, GA
									<br />
									{/* summary */}
									<label class="label mb-0">Deed Summary</label>
									This section is designed for a brief summary of the goodDeeds.
									All goodDeeds will have 2-3 sentence summaries.
									<br />
									{/* deed date */}
									<label class="label mb-0">Deed Date</label>
									<time datetime="2016-1-1">
										1:30 PM - 2:30 PM - Sep 28, 2020
									</time>
									<br />
									{/* learn more */}
									<button class="button is-info mt-3 ">Learn More</button>
									<button class="button is-black mt-3 is-pulled-right is-hidden">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="column">
						{/* card #3 start */}
						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
									<img
										src="https://i.imgur.com/TOHpmYW.png"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										{/* image avatar */}

										<figure class="image is-48x48">
											<img
												class="is-rounded"
												src="https://bulma.io/images/placeholders/96x96.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>

									{/* user info */}

									<div class="media-content">
										<p class="title is-4">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
									</div>
								</div>

								{/* interest tags area */}

								<label class="label">Community</label>
								<div class="tags has-addons">
									<span class="tag is-warning">Seniors</span>
								</div>

								{/* location */}

								<div class="content">
									<label class="label mb-0">Location</label>
									Brookhaven, GA
									<br />
									{/* summary */}
									<label class="label mb-0">Deed Summary</label>
									This section is designed for a brief summary of the goodDeeds.
									All goodDeeds will have 2-3 sentence summaries.
									<br />
									{/* deed date */}
									<label class="label mb-0">Deed Date</label>
									<time datetime="2016-1-1">
										3:30 PM - 4:30 PM - Sep 28, 2020
									</time>
									<br />
									{/* learn more */}
									<button class="button is-info mt-3 ">Learn More</button>
									<button class="button is-black mt-3 is-pulled-right is-hidden">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="column">
						{/* card #4 start */}
						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
									<img
										src="https://i.imgur.com/ROvf215.png"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										{/* image avatar */}

										<figure class="image is-48x48">
											<img
												class="is-rounded"
												src="https://bulma.io/images/placeholders/96x96.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>

									{/* user info */}

									<div class="media-content">
										<p class="title is-4">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
									</div>
								</div>

								{/* interest tags area */}

								<label class="label">Community</label>
								<div class="tags has-addons">
									<span class="tag is-black">Black Lives Matter</span>
								</div>

								{/* location */}

								<div class="content">
									<label class="label mb-0">Location</label>
									Brookhaven, GA
									<br />
									{/* summary */}
									<label class="label mb-0">Deed Summary</label>
									This section is designed for a brief summary of the goodDeeds.
									All goodDeeds will have 2-3 sentence summaries.
									<br />
									{/* deed date */}
									<label class="label mb-0">Deed Date</label>
									<time datetime="2016-1-1">
										8:30 AM - 9:30 AM - Sep 28, 2020
									</time>
									<br />
									{/* learn more */}
									<button class="button is-info mt-3 ">Learn More</button>
									<button class="button is-black mt-3 is-pulled-right is-hidden">
										Learn More
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
