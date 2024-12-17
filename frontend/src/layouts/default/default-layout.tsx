import { Box, Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export const DefaultLayout = () => {
  return (
    <Box>
      <NavBar />
      <Container >
        <Outlet />
      </Container>
    </Box>
  );
};
