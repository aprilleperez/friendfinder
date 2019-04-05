// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing (middleware data --> specific to app.post for INCOMING data)
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets up our server to a series of "route" files
// =============================================================
require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});