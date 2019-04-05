// Dependencies: Import the friends.js file and store it to a global var here
// =============================================================
var friends = require("../app/data/friends.js");


// Export everything (funcitons) within module
// =============================================================
module.exports = function (app) {

    // Display the friends in API path
    // =============================================================
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.get("/api/friends/:friend", function (req, res) {
        var specificFriend = req.params.friend;
        console.log(specificFriend);

        // if the specific friend matches a friend in API, return that friend
        for (var i = 0; i < friends.length; i++) {
            if (specificFriend === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }

        return res.json(false);
    });


    // Posts new friend to DB while finding the match
    // =============================================================
    app.post("/api/friends", function (req, res) {
        // newfriend becomes req.body since it's equal to the JSON post sent from the user's captured input 
        var newfriend = req.body;
        // format the route name in backend to all one word, lowercase (i.e. if capitalized and fn/ln)
        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newfriend);

        // declare the matchfriend (found when looping through API)
        var matchfriend;

        var lowestDifference = 40; // purpose of lowestDifference is to decrement its value until it's the lowest value. Set to 40 since that is the highest difference this survey can have (then it will decrease from 40 on comparisons)

        // loop through current friends in API
        for (let i = 0; i < friends.length; i++) {
            // scope declare this (current comparison) difference for comparing newfriend and potential matchfriend
            let thisDifference = 0;

            // for loop for both newfriend's sum score subtracted from each looped through friend's sum score (absolute value for no negative number, parseInt-ing for changing from string to int)
            for (let j = 0; j < 10; j++) {
                thisDifference += Math.abs(parseInt(newfriend.scores[j]) - parseInt(friends[i].scores[j]));
            }

            // from for loops above, if thisDifference is less than (whatever is current) lowestDifference
            if (thisDifference < lowestDifference) {
                // set thisDifference to the lowestDifference
                lowestDifference = thisDifference;
                // and set the corresponding looped through friend to the matchfriend
                matchfriend = friends[i];
                console.log(matchfriend);
            }
        }

        // push survey input to the friends array (after all the above actions)
        friends.push(newfriend);
        // send back the matchfriend to the frontend modal
        res.json(matchfriend);
    });

};