const axios = require("axios");

const { NAGER_URL } = process.env;

const NagerHttp = axios.create({
  baseURL: "https://date.nager.at/api/v3",
  timeout: 20000,
});

module.exports = NagerHttp;
