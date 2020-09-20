# goodDeeds
![rmbanner](https://user-images.githubusercontent.com/63179764/87181998-47556480-c2b1-11ea-98f7-b886a0f5f031.jpg)
## Overview: 
goodDeeds is a virtual marketplace where volunteers and organizations, or individuals, may meet for the purpose of collaborating to accomplish acts of kindness. These acts may be as simple as spending time with members of the Senior Community, or just as grand such as small business consulations for Black-Owned businesses, or organzing to demonstrate advocacy for LGBTQ rights. The platform will promote sharing information through emails, meetings through a real time chat or organizing a group meet-up. No matter how small or grand the topic, goodDeeds provides a safe environment for collaborators, and those with needs, to link up and accomplish good deeds together. 

## The Team: This Project was created and completed remotely
### Eric Yim: https://github.com/tknyim
**Primary team role:** Team Lead; Front-End markup and styling, Javascript Function writer

**Contributions:** Designed and implemented search query using Active.com API Event Search. Assisted with Style and Layout Design. Oversaw organization of all javascript files and implementations. Created Contact page. 

### Mike Cadima: https://github.com/mikecadima
**Primary team role:** Front-End markup and styling, concepting and Javascript Function writer, 

**Contributions:** Oversaw creation of Landing Page of project application. Implemented "slideable" menu and created div block with data from Weather API and a time counter function. 

### PJ Almeida: https://github.com/palmeida7
**Primary team role:** Database architect, Javascript Function writer, Concept and content developer

**Contributions:** Created back-end routes and front-end logic to communicate and update database queries. Created CRUD (Create-Read-Update-Delete) functionality for application.

### Ivan Davis: https://github.com/techbyivan
**Primary team role:** Lead UI/UX Designer; Front-End markup and styling, concepting and Javascript Function writer

**Contributions:** Created visual process flow of application. Oversaw creative layout design of webpages. Created About page.

## What we used:
### Languages/Frameworks/Libraries:
- Reactjs Hooks
- CSS
- Javascript
- Postgresql
- Node
- Express
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

## Code Snippets:
### Our main Javascript file displays the Slider Feature of the menu and Light/Dark mode code.
``` javascript

//Code for Slider Menu
function openSlideMenu(){
    document.getElementById('menu').style.width='250px';
}
function closeSlideMenu(){
    document.getElementById('menu').style.width='0';
}

let menuOpen = document.getElementById('menu-open')
menuOpen.addEventListener('click', ()=>{
    openSlideMenu()
})

let menuClose = document.getElementById('menu-close')
menuClose.addEventListener('click', ()=>{
    closeSlideMenu()
})

// -----------------------------------------------------
// Allows user to toggle button to change background color
const chk = document.getElementById('chk');
chk.addEventListener('change', (cards) => {
  document.body.classList.toggle('dark');
  closeSlideMenu()
});
```
### This code allows the user to submit a search based on a query.
``` javascript
 //Allows user to search based on query 
import startSearch from './startSearch.js'
import nextPage from './nextPage.js'

let page = 1

let submitSearch = document.getElementById('Search')
submitSearch.addEventListener('click', ()=>{
    let inpActivity = document.getElementById('inpActivity').value
    let inpRadius = document.getElementById('inpRadius').value
    let inpDate = document.getElementById('inpDate').value
    let continuousDate = inpDate + '..'
    page = 1

    return startSearch(inpActivity, page, continuousDate, inpRadius)
})

let nextButton = document.getElementById('next')
nextButton.addEventListener('click', ()=>{
    page += 1

    let inpActivity = document.getElementById('inpActivity').value
    let inpRadius = document.getElementById('inpRadius').value
    let inpDate = document.getElementById('inpDate').value
    let continuousDate = inpDate + '..'

    nextPage(inpActivity, page, continuousDate, inpRadius)
})
```
### This is the actual data fetch.
```javascript
//Fetching the data from the API
import {activeKey, proxy} from "../config.js";
import fillPage from './fillPage.js'

function storePage(activity, page, date, radius){
    fetch(`${proxy}http://api.amp.active.com/v2/search?query=${activity}&current_page=${page}&category=event&near=Atlanta,GA,US&start_date=${date}&radius=${radius}&api_key=${activeKey}`, {
    })
    .then(resp=>resp.json())
    .then(json=>{
        fillPage(json.results)
    })
}

export default storePage
```
### This code constructs our Weather data from the API
``` javascript
//greet and time
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Run
showTime();


fetch('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=6a899e0702d3b935e5d01d1b77ea6d59')
.then(resp=>resp.json())
.then(json=>{
    let city = json.name
    let tempKelv = json.main.temp
    let tempF = (tempKelv - 273.15) * 9/5 + 32
    let roundedTemp = Math.round(tempF)
    let temp = document.getElementById('temp')
    temp.innerText = roundedTemp + '°'
    let newCity = document.getElementById('city')
    newCity.append(city)
    let humidity = json.main.humidity
    let humidityDiv = document.getElementById('humidity')
    humidityDiv.innerText = humidity + '% Humidity'
})
```
## Demo of search feature
[![Fit Pals demo](http://img.youtube.com/vi/W_FmXOzzQYU/0.jpg)](https://youtu.be/W_FmXOzzQYU)
