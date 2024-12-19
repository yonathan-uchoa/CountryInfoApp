import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CountryList = ({ countries }: any) => {
  const navigate = useNavigate();
  const CountryOnClickHandler = (countryCode: string) => {
    navigate("/" + countryCode);
  };

  return (
    <List>
      {countries.map((country: any) => (
        <>
          <ListItem key={`country-item-${country.countryCode}`}>
            <ListItemButton
              key={`country-button-${country.countryCode}`}
              onClick={() => CountryOnClickHandler(country.countryCode)}
            >
              <ListItemAvatar key={`country-flag-${country.countryCode}`}>
                <img src={country.flag? country.flag : "https://placehold.co/35x22"} width="35px" height="22px" />
              </ListItemAvatar>
              <ListItemText
                id={`country-text-${country.countryCode}`}
                primary={country.name}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default CountryList;
