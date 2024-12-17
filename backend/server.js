const express = require("express");
const CountryRoute = require("./src/routes/country-route");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/country", CountryRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
