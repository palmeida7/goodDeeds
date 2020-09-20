# goodDeeds
![goodDeeds _ logo](https://user-images.githubusercontent.com/63179764/93724641-f4ccda00-fb76-11ea-96d0-06902c45c0e7.png)
## Overview: 
goodDeeds is a virtual marketplace where volunteers and organizations, or individuals, may meet for the purpose of collaborating to accomplish acts of kindness. These acts may be as simple as spending time with members of the Senior Community, or just as grand such as small business consulations for Black-Owned businesses, or organzing to demonstrate advocacy for LGBTQ rights. The platform will promote sharing information through emails, meetings through a real time chat or organizing a group meet-up. No matter how small or grand the topic, goodDeeds provides a safe environment for collaborators, and those with needs, to link up and accomplish good deeds together. 

## Visual Process Flow Chart
![goodDeeds - ux _ui flowChart (2)](https://user-images.githubusercontent.com/63179764/93724663-23e34b80-fb77-11ea-9e29-57a1c2a92efc.jpg)

## The Team: This Project was created and completed remotely
### Eric Yim: https://github.com/tknyim
**Primary team role:** Team Lead; Front-End markup and styling, Javascript Function writer

**Contributions:** Designed and implemented search query using Active.com API Event Search. Assisted with Style and Layout Design. Oversaw organization of all javascript files and implementations. Created Contact page. 

### Mike Cadima: https://github.com/mikecadima
### portfolio: https://mikecadima.github.io/portfolio/
**Primary team role:** Front-End markup and styling, concepting and Javascript Function writer, 

**Contributions:** Oversaw creation of Landing Page of project application. Implemented "slideable" menu and created div block with data from Weather API and a time counter function. 

### PJ Almeida: https://github.com/palmeida7
### portfolio: https://palmeida7.github.io/portfolio/
**Primary team role:** Database architect, Javascript Function writer, Concept and content developer

**Contributions:** Created back-end routes and front-end logic to communicate and update database queries. Created CRUD (Create-Read-Update-Delete) functionality for application.

### Ivan Davis: https://github.com/techbyivan
**Primary team role:** Lead UI/UX Designer; Front-End markup and styling, concepting and Javascript Function writer

**Contributions:** Created visual process flow of application. Oversaw creative layout design of webpages. Created About page.
![goodDeeds - Deeds_Available_0](https://user-images.githubusercontent.com/63179764/93724664-2776d280-fb77-11ea-8545-d510a7582f58.jpg)

## What we used:
### Languages/Frameworks/Libraries:
- PostgreSQL
- Express
- Reactjs Hooks
- Node
- CSS
- Javascript
- Bulma

### APIs/Critical Dependencies
- Auth0 Login Authentication
- Postman
- Socket IO

### Express/React Dependencies:
- Node-sass
- React-Dom-Router
- Cors
- Nodemon
- PG
- React-Dom-Router

### Other:
- Github/Github Project Board
- Favicon
- Visual Studio Code
- Linux
- Amazon Web Services
- Slack
- Zoom 



## MVP (Minimum Viable Product):
- Secure user session with Auth0 authentication
- Explore page that displays all available goodDeeds
- The ability for a user to create a good deed and then collaborate with another user

## Stretch Goals Completed
- Authentication
- CRUD operations for a good deed
- Launch page featuring all available good deeds
- Modern look of webpages
- Connecting front-end logic and back-end routes

## Stretch Goals Future
- Allowing users to share their deeds through social media connections
- Create searchability function by location
- Crowd Source funding for events and causes

## Challenges & Solutions:
### ***Challenge:*** Connecting front-end logic and back-end routes to update database tables for the CRUD operations.

### ***Solution:*** Reading documentation for React and Postgresql. Implementing correct logic for client and server side. Testing queries and routes with Postman.
___
### ***Challenge:*** Creating a query for calling only deeds attached to a specific user.

### ***Solution:*** Joining deeds details on user information and joining them on "user__id."
___
### ***Challenge:*** Creating a rating system for users.

### ***Solution:*** Utilizing average of all ratings in a ratings table then joining that information with users on the "user_id" columns.

![goodDeeds - Create_Deed_0](https://user-images.githubusercontent.com/63179764/93724660-19c14d00-fb77-11ea-8c3e-53e96b5eef28.jpg)
![goodDeeds - Public_Profile_0](https://user-images.githubusercontent.com/63179764/93724661-204fc480-fb77-11ea-830f-57f15d055780.jpg)


## Code Snippets:
### PostgreSQL snippets from the back-end Index.js file
``` javascript

// deeds list
app.get("/deeds_list", async (req, res) => {
    try {
        // filter status conditions
        const { assignerId } = req.query;
        let sqlStr = `
            SELECT 
                d.id, d.category, d.title, d.description, d.location, d.date_created, 
                d.date_todo, d.status, u.name, u.username, u.picture, u.email 
            FROM deeds AS d 
            JOIN users AS u 
            ON d.assigner_id=u.id`;
        let addAssigner = ` AND d.assigner_id=${assignerId}`;
        if (assignerId) {
            sqlStr = sqlStr + addAssigner;
        };
        const allDeeds = await pool.query(sqlStr);
        res.send(allDeeds.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a user's average ratings
app.get("/user/:id/ratings", async (req, res) => {
    try {
        const { id } = req.params;
        const userRatings = await pool.query(`
            SELECT trunc(AVG(r.rating), 1) as rating
            FROM users AS u
            JOIN ratings AS r on u.id=r.user_id
            WHERE u.id=${id}
            GROUP BY u.id;
        `);
        if (userRatings.rowCount > 0) {
            res.json(userRatings.rows[0]);
        } else {
            res.json({ rating: 'N/A' });
        }
    } catch (err) {
        console.error(err.message);
    }
});

// -----------------------------------------------------

```
### Front-end rendering of all deeds through mapping
``` javascript
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import 'moment-timezone';
import RatingBadge from './Rating/RatingBadge';

export default function DeedsList() {
    const [deeds, setDeeds] = useState([]);

    async function getDeeds() {
        const response = await fetch("http://localhost:5000/deeds_list?" + new URLSearchParams({
            assignerId: window.sessionStorage.getItem('users_id')
        }));
        const deedArray = await response.json();
        setDeeds(deedArray);
    }
    useEffect(() => {
        getDeeds();
    }, []);

    return (
        <section>
            <div class="container">
                <section class="section">
                    <div class="container">
                        <div>
                            <span class="tag is-light">{window.sessionStorage.getItem('location')}</span>
                        </div>
                        {/* screen title */}
                        <h1 class="title is-size-1">Deeds List</h1>
                    </div>
                    <div>
                        <section>
                            {/* avatar */}
                            <div class="container">
                                <article class="media">
                                    <Link to={`/public_profile/${window.sessionStorage.getItem('email')}`}>
                                        <figure className="image is-48x48">
                                            <img
                                                className="is-rounded"
                                                src={window.sessionStorage.getItem('picture')}
                                                alt="owners profile"
                                            />
                                        </figure>
                                    </Link>
                                    {/* user info */}
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{window.sessionStorage.getItem("name")}</strong> <br />
                                                <small>@{window.sessionStorage.getItem("username")}</small>{" "}
                                                <RatingBadge userId={window.sessionStorage.getItem('users_id')}
                                                    badgeSize="is-normal">
                                                </RatingBadge>
                                                <br />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <br />
                                <label className="label">Deeds</label>
                                {/* deeds table start */}
                                <table class="table is-fullwidth">
                                    {/* table headers */}
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="id">id</abbr>
                                            </th>
                                            <th>
                                                <abbr title="deed_name">Deed Name</abbr>
                                            </th>
                                            <th>
                                                <abbr title="categoty">Category</abbr>
                                            </th>
                                            <th>
                                                <abbr title="location">Location</abbr>
                                            </th>
                                            <th>
                                                <abbr title="date">Requested Date</abbr>
                                            </th>
                                            <th>
                                                <abbr title="request_date">Requested Time</abbr>
                                            </th>
                                            <th>
                                                <abbr title="status">Status</abbr>
                                            </th>
                                        </tr>
                                        {/* table row */}
                                        {deeds.map((deed, idx) => (
                                            <tr key={idx}>
                                                <th id="deed_id">{deed.id}</th>
                                                <td id="deed_name">
                                                    <Link to={`/details/${deed.id}`}>
                                                        {deed.title}
                                                    </Link>{" "}
                                                </td>
                                                <td id="category">{deed.category}</td>
                                                <td id="location">{deed.location}</td>
                                                <td id="date"><Moment format="MM/DD/YYYY">{deed.date_todo}</Moment></td>
                                                <td id="request_date"><Moment format="hh:mm A">{deed.date_todo}</Moment></td>
                                                <td id="status">{deed.status}</td>
                                            </tr>
                                        ))}
                                        {/* table row end */}
                                    </thead>
                                </table>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    );
} 
```
### Function that will determine picture that will render based on category type
``` javascript

	const matchTagImg = (deed) => {
		if (deed.category === "Black Lives Matter") {
			return "https://i.imgur.com/ROvf215.png"
		} else if (deed.category === "Senior") {
			return "https://i.imgur.com/TOHpmYW.png"
		} else if (deed.category === "LBGTQ") {
			return "https://i.imgur.com/AAgWHo0.png"
		} else {
			return "https://i.imgur.com/YU649NJ.png"
		}
	}


```
## Demo of search feature
[![Fit Pals demo](http://img.youtube.com/vi/W_FmXOzzQYU/0.jpg)](https://youtu.be/W_FmXOzzQYU)
