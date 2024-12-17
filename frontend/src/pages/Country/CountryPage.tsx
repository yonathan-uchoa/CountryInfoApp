import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import CountryList from "../../components/Country/CountryList/CountryList";
import PopulationChart from "../../components/PopulationChart/PopulationChart";

const CountryPage = () => {
  const {Country, Population} = useLoaderData() as any;
  console.log("my country", Population);
  return (
    <Box>
      <Box display="flex" gap="1rem">
        <img
          src={Country.flag}
          width="138px"
          height="90px"
          alt="https://picsum.photos/138/90"
        />
        <Typography variant="h2">
          {Country.commonName} ({Country.countryCode})
        </Typography>
      </Box>
      <Box>
        <CountryList countries={Country.borders} />
      </Box>
      <PopulationChart populationData={Population}/>
    </Box>
  );
};

export default CountryPage;
