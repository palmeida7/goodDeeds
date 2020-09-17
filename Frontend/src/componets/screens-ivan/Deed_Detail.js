import React, { Fragment } from "react";
import Mini_Profile2 from "../components/Mini_Profile2";

export default function Deed_Detail() {
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
							<span class="tag is-light">Atlanta, GA</span>
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
												src="https://bulma.io/images/placeholders/128x128.png"
											/>
										</p>
									</figure>

									{/* user info */}

									<div class="media-content">
										<div class="content is-pulled-right">
											<p>
												<strong>John Smith</strong> <br />
												<small>@johnsmith</small>{" "}
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
										<p class="title">Sep 29, 2020</p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Date</p>
										<p class="title">Oct 5, 2020</p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Start Time</p>
										<p class="title">1:30 pm</p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">End Time</p>
										<p class="title">2:30pm</p>
									</div>
								</div>
							</nav>
						</section>

						{/* Deed Summary & Things You Know Section */}

						<section>
							<div class="columns mt-6">
								<div class="column">
									<section>
										<h1 class="title">Summary</h1>
										<h2 class="subtitle">
											This portion is a summary of the goodDeed being viewed.
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
										<Mini_Profile2 />
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</section>
	);
}
