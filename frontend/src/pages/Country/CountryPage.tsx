import { Box, Divider, Typography } from "@mui/material";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import CountryList from "../../components/Country/CountryList/CountryList";
import PopulationChart from "../../components/PopulationChart/PopulationChart";

const CountryPage = () => {
  const Data = useLoaderData() as any;
  if(Data == null)
    return <Navigate to="/notfound"/>;
  const {Country, Population} = Data;
  console.log("my country", Population);
  return (
    <Box>
      <Box display="flex" gap="16px" margin="8px">
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
      <Divider />
      <Box>
        <Typography variant="h4">Borders</Typography>
        <CountryList countries={Country.borders} />
      </Box>
      <PopulationChart populationData={Population}/>
    </Box>
  );
};

export default CountryPage;
