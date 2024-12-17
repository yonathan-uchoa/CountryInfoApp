const express = require("express");
const cors = require("cors");
const CountryRoute = require("./src/routes/country-route");

const app = express();
const port = process.env.PORT || 3000;
const CorsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors(CorsOptions));

app.use("/country", CountryRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
