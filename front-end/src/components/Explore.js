import React, { Fragment, useState, useEffect } from 'react';
import EditDeed from "./EditDeed";
const ListDeeds = ({ deeds, setDeeds }) => {

	console.log(deeds);
	async function deleteDeed(id) {
		try {
			const res = await fetch(`http://localhost:5000/deed/${id}`, {
				method: "DELETE"
			});
		} catch (err) {
			console.error(err.message)
		}
		window.location.reload();
	}
	return (
		<Fragment>
			{/* <table className="table mt-5">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {deeds.map(deed =>(
                    <tr key={deed.deeds_id}>
                        <td>{deed.title}</td>
                        <td>{deed.description}</td>
                        <td>{deed.category}</td>
                        <td>{deed.location}</td>
                        <td>{deed.status}</td>
                        <td><EditDeed deed={deed}></EditDeed></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteDeed (deed.deeds_id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table> */}
			<div class="columns">
				<div class="column is-one-quarter">
					{/* card #1 start */}
					{deeds.map(deed => (
						<div class="card">
							<div class="card-image">
								<figure class="image">
									<img
										// black lives matter image
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
								<label class="label">{deed.title}</label>
								<div class="tags has-addons">
									<span class="tag is-black">{deed.category}</span>
								</div>
								{/* location */}
								<div class="content">
									<label class="label mb-0">Location</label>
									<div>{deed.location}</div>
									<br />
									{/* summary */}
									<label class="label mb-0">Deed Summary</label>
									<div>{deed.description}</div>
									<br />
									{/* status */}
									<label class="label mb-0">Status</label>
									<div>{deed.status}</div>
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
					))}
				</div>
			</div>
		</Fragment>
	)
}
export default ListDeeds;