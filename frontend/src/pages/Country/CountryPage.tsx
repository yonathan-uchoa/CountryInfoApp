import { Box, Divider, Typography } from "@mui/material";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import CountryList from "../../components/Country/CountryList/CountryList";
import PopulationChart from "../../components/PopulationChart/PopulationChart";

const CountryPage = () => {
  const Data = useLoaderData() as any;
  if (Data == null) return <Navigate to="/notfound" />;
  const { Country, Population } = Data;
  console.log("my country", Population);
  return (
    <Box>
      <Box display="flex" gap="16px" margin="8px" alignItems="center">
        <img
          src={Country.flag ? Country.flag : "https://placehold.co/138x90"}
          width="138px"
          height="90px"
        />
        <Typography variant="h2" justifyItems="center">
          {Country.commonName} ({Country.countryCode})
        </Typography>
      </Box>
      <Divider />
      <Box marginBottom="8px">
        <Typography variant="h4">Borders</Typography>
        {Country.borders.length > 0 ? (
          <CountryList countries={Country.borders} />
        ) : (
          <Typography>
            This country doesn't have any border.
          </Typography>
        )}
      </Box>
      <PopulationChart populationData={Population} />
    </Box>
  );
};

export default CountryPage;
