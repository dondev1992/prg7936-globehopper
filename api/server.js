const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const dbConfig = require("./db");
const users = require("./routes/user.route");
// const countries = require("./routes/country.route");
// const continents = require("./routes/continent.route");
// const cities = require("./routes/city.route");

const countryRoute = require("./routes/country.route");
const cityRoute = require("./routes/city.route");
const continentRoute = require("./routes/continent.route");

//Database connection
// dbConfig();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users", users);
app.use("/api/countries", countryRoute);
app.use("/api/continents", continentRoute);
app.use("/api/cities", cityRoute);

//Listening on port
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port: ${port}`));
