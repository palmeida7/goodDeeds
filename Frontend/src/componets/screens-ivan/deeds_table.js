import React, { Fragment } from "react";

export default function Deeds_Table() {
	return (
		<section>
			<div class="container">
				<section class="section">
					<div class="container">
						<div>
							<span class="tag is-light">Atlanta, GA</span>
						</div>

						{/* screen title */}

						<h1 class="title is-size-1">Deeds Table</h1>
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
								<br />
								<label className="label">Deeds</label>

								{/* table start */}

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
                                
                                {/* table end */}

							</div>
						</section>
					</div>
				</section>
			</div>
		</section>
	);
}
