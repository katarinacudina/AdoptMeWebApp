const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./queries");
const secret = "secret";
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const withAuth = require("./middleware");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
app.get("/api/getFavorites", db.getFavorites);
app.get("/api/getAnimals", db.getAllAnimals);
app.get("/api/getAnimalById/:id", db.getAnimalById);
app.get("/api/getUserById/:username/:password", (req, res) => {
  db.getUserBy(req, res);
  var userExists = true;
  if (userExists == true) {
    // Issue token
    username = req.params.username;
    const payload = { username };
    const token = jwt.sign(payload, secret, {
      expiresIn: "1h"
    });
    res.cookie("token", token, { httpOnly: true }).sendStatus(200);
  } else {
    alert("Login failed");
  }
});

app.get("/api/getAllNews", db.getAllNews);
app.get("/api/getNewsById/:id", db.getNewsById);
app.get("/users", db.getUsers);
app.get("/users/:user_id", db.getUserById);
app.post("/api/createUser", db.createUser);
app.put("/users/:user_id", db.updateUser);
app.delete("/users/:user_id", db.deleteUser);
