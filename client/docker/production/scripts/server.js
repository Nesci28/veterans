//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("/home/node/app/dist/veterans"));

app.get("/*", function (_, res) {
  res.sendFile(path.join("/home/node/app/dist/veterans/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);