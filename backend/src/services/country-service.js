const CountriesNowHttp = require("../pluggins/coutriesNow-http.js");
const NagerHttp = require("../pluggins/nager-http.js");

class CountryService {
  static async AvailableCountries() {
    const {data: response }= await NagerHttp.get("/AvailableCountries");
    return response;
  }

  static async getBorderCountriesByCountry(countryCode) {
    const { data: { borders: response } } = await NagerHttp.get(
      `/CountryInfo/${countryCode}`
    );
    return response;
  }

  static async getPopulationByCountry(countryName) {
    const { data: _allCountriesPopulation } = await CountriesNowHttp.get(
      "/population"
    );
    const response =
      _allCountriesPopulation.filter(
        (country) => country.name == countryName
      ) || null;
    return response;
  }

  // If you see the endpoint, there are some countries without flags
  static async AllFlags() {
    const { data: {data: response } } = await CountriesNowHttp.get("/flag/images");
    return response;
  }

  static async AvailableCountriesWithFlag() {
    const availableCountries = await this.AvailableCountries();
    let flags = await this.AllFlags();

    availableCountries.forEach((country) => {
      // Every time a flag it chosen, it will be removed from the array
      flags = flags.filter((flag) => {
        if (flag.name != country.name) {
          return flag;
        }
        // Add flag to the country iten
        country.flag = flag.flag;
      });
    });

    return availableCountries;
  }
}

module.exports = CountryService;
