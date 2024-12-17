const axios = require("axios");

const {COUTRIESNOW_URL} = process.env;

const CountriesNowHttp = axios.create({
  baseURL: COUTRIESNOW_URL || "https://countriesnow.space/api/v0.1/countries",
  timeout: 20000,
});

module.exports = CountriesNowHttp;
