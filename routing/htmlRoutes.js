// Dependencies: need path for directory pathing 
// =============================================================
var path = require("path");


// Export everything (funcitons) within module
// =============================================================
module.exports = function (app) {

    // Base route that sends the user to the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route that sends the user first to the survey page  
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // // If no matching route is found default to home
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });
};