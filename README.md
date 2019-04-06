# Friend Finder

# Summary
Friend Finder is a full-stack app that utilizes setting up path routes in the backend through express to dynamically navigate through the main parts of the site. The purpose is to match the new user with a stored friend from the app's records based off of total sum of their values from the survey. There is a landing page to introduce users to the survey, the survey page consisting of 10 questions based on a 1(least) - 5(most) point scale depending on user affinity, a results modal that pops up once the user submit their entires--matching them with their closest match from the created API, and the API link that displays the full list of friends in the API as a JSON object. 

# Languages
Node.js, Express

# IMPORTANT!
This app requires npm Express to run succesfully. Please make sure the npm install with the included package.json to initiate the Express functions, and/or npm init -y and npm install express through your own device. 

# Takeaways
The app got me to practice my hand at matching routes in the backend as well as in the frontend, since these are basically two separate apps connecting with each other through the HTTP. Another thing I noted was the emphasis of file structure and separating js files into their specific duties to the site (i.e. server.js operates setting up the server, htmlRoutes.js routes sets up the DOM routes between front/back end, and apiRoutes for pinging the specific friends or all of them in the API). This app taught me a lot of initializing the back end is boilerplate code but that there is still logic to be done in terms of the matching functionality of this site and remembering to dynamically update that on the client side.