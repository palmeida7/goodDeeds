import React from "react";

export default function Public_Profile() {
	return (
		<section>
			<div class="container">
				<section class="section">
					<div class="container">
						{/* button : save & continue */}

						<button class="button is-light is-pulled-right is-hidden">
							Save & Continue
						</button>

						{/* screen title */}

						<h1 class="title is-size-1">Public Profile</h1>
					</div>

					{/* second column */}
					{/* user info */}

					<section>
						<div class="columns">
							<div class="column mt-6">
								<figure class="image is-480x480 is-1by1">
									<img src="https://i.imgur.com/EPqZ9Ic.png" />
								</figure>
							</div>

							{/* Avatar & User Info */}

							<div class="column mt-6">
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

										{/* user full name */}

										<div class="media-content">
											<div class="content">
												<p>
													<strong class="title">John Smith</strong> <br />
													<small>@johnsmith</small> <br />
												</p>
											</div>
										</div>
									</article>
								</div>

								{/* Interest Areas */}

								<label class="label mt-2">Interest Areas</label>
								<div class="tags has-addons">
									<span class="tag is-warning ml-2 mr-2">Seniors</span>
									<span class="tag is-black ml-2 mr-2">Black Lives Matter</span>
									<span class="tag is-primary ml-2 mr-2">LBGTQ</span>
								</div>

								{/* location */}

								<h3>
									<strong>Location</strong>
								</h3>
								<h4>Atlanta, GA</h4>

								{/* short bio */}

								<h3 class="mt-4">
									<strong>Short Bio</strong>
								</h3>
								<h4>
									simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever
									since the 1500s, when an unknown printer took a galley of type
									and scrambled it to make a type specimen book.
								</h4>
							</div>
						</div>
					</section>
				</section>
			</div>
		</section>
	);
}
