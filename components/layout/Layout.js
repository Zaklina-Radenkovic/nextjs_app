import MainNavigation from "./MainNavigation";

import Container from "@mui/material/Container";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <Container maxWidth="sm" sx={{ margin: "3rem auto" }}>
        <main>{props.children}</main>
      </Container>
    </Fragment>
  );
}

export default Layout;
