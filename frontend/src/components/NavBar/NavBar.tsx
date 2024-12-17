import { AppBar, Box, Container, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { CheckBox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" style={{ width: "100vw", marginBottom: "16px" }}>
      <Box>
        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate("/")}
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
