# Go Run

## Description
_Duration: 3 Week Sprint_

Go Run is an app that allows users to track their runs and have their data displayed as a graph on a weekly or monthly basis to motivate the user to keep running and maintain that excitement. 

<video src='/media/go-run demo 1.mov' width=180>

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table
Create a new database called go_run_app<br>
SQL table setup can be found in the database.sql file.

## Installation Instructions
- Run npm install
- Start postgres
- Run npm run server
- Run npm run client
- Navigate to localhost:3000 in your browser

## Usage
1. Register with username and password
2. Home screen shows activity within the past week, displaying the name, date, distance, and duration of the run.
3. The top-left corner displays a raceday countdown and the top-right corner displays the current weather conditions.
4. Add a run by clicking the '+' icon in the bottom navigation bar and fill out the corresponding information. Then click 'save'
5. Edit a run by clicking on the pencil icon, make corresponding changes, and click 'save' to update information.
6. Delete a run by clicking the 'x' icon. There will be a pop-up message to asking to confirm the deletion.
7. View progress by clicking on the bar icon, where runs will be displayed for the current week or month. 

## Technologies used
- React
- Redux
- Material UI
- React Chart js 2
- OpenWeather API
- Sweet Alert
- Javascript
- Express
- Postgresql
- Node.js
- PG
- CSS
- HTML
- Passport

## Acknowledgement

Thanks to Prime Digital Academy who helped me make this application a reality.

Also thanks to the Lydian cohort for their support.
