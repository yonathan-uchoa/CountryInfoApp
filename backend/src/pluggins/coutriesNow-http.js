const axios = require("axios");

const { COUNTRIESNOW_URL } = process.env;

const CountriesNowHttp = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
  timeout: 20000,
});

module.exports = CountriesNowHttp;
