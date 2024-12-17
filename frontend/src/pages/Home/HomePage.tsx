import { Box, TextField } from "@mui/material";
import CountryList from "../../components/Country/CountryList/CountryList";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const CountriesData = useLoaderData() as any;
  const [countries, setCountries] = useState<any>(CountriesData);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const onChangeSearchHandler = async (e: any) => {
    setSearchCountry(e.target.value);
    setCountries(
      CountriesData.filter((country: any) =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase())
      )
    );
  };
  return (
    <Box>
      <Box border="1px solid black">
        <TextField
          id="outlined-basic"
          label="search..."
          type="search"
          variant="outlined"
          onChange={onChangeSearchHandler}
          fullWidth
        />
        <CountryList countries={countries} />
      </Box>
    </Box>
  );
};

export default HomePage;
