const express = require("express");
const CountryController = require("../controllers/country-controller");
const app = express();

const CountryRoute = express.Router();

/** Get available coutries */
CountryRoute.get("/", (req, res) => {
  CountryController.getCountries()
    .then((countries) => {
      res.status(200).send({
        message: "List of available countries.",
        data: countries,
      });
    })
    .catch((err) =>
      res
        .status(err.status)
        .send({ name: err.name, message: err.message, data: err.data })
    );
});

CountryRoute.get("/border/:countryCode", (req, res) => {
  const { countryCode } = req.params;
  CountryController.getBorderByCountryCode(countryCode)
    .then((borders) => {
      res.status(200).send({
        message: "List of countries for this country border.",
        data: borders,
      });
    })
    .catch((err) =>
      res
        .status(err.status)
        .send({ name: err.name, message: err.message, data: err.data })
    );
});

CountryRoute.get("/population/:countryName", (req, res) => {
  const { countryName } = req.params;
  CountryController.getPopulationByCountryName(countryName).then(
    (population) => {
      res
        .status(200)
        .send({
          message: "List of population by several years for this country.",
          data: population,
        })
        .catch((err) =>
          res
            .status(err.status)
            .send({ name: err.name, message: err.message, data: err.data })
        );
    }
  );
});

module.exports = CountryRoute;
