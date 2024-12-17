const CountryService = require("../services/country-service");
const GenericError = require("../utils/genericError");

class CountryController {
  static async getCountries() {
    return CountryService.AvailableCountriesWithFlag()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        err.status = 500;
        err.message = "Something happens with the api connection...";
        throw err;
      });
  }

  static async getPopulationByCountryName(countryName) {
    return CountryService.getPopulationByCountry(countryName)
      .then((res) => {
        if (res == null)
          GenericError(
            "NotFound",
            "The country has not been found or we doesn't have their population in our database",
            404
          );
        return res;
      })
      .catch((err) => {
        err.status = 500;
        err.message = "Something happens with the api connection...";
        throw err;
      });
  }

  static async getCountry(countryCode) {
    return CountryService.getCountry(countryCode)
      .then((res) => {
        if (res == null)
          GenericError("NotFound", "The country code has not been found", 404);

        return res;
      })
      .catch((err) => {
        err.status = 500;
        err.message = "Something happens with the api connection...";
        throw err;
      });
  }
}

module.exports = CountryController;
