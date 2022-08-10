import MainNavigation from "./MainNavigation";
// import classes from './Layout.module.css';

import Container from "@mui/material/Container";
import { Fragment } from "react";
import { Box } from "@mui/system";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <Container maxWidth="sm" sx={{ margin: "3rem auto" }}>
        <main>{props.children}</main>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
      </Container>
    </Fragment>
  );
}

export default Layout;
