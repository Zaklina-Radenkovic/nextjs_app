import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

function MainNavigation() {
  return (
    // <header className={classes.header}>
    //   <div className={classes.logo}>React Meetups</div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/">All Meetups</Link>
    //       </li>
    //       <li>
    //         <Link href="/new-meetup">Add New Meetup</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>

    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "5rem",
        padding: "0 10%",
        backgroundColor: "#77002e",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Toolbar>
          <Typography
            component="div"
            href="/"
            sx={{
              fontWeight: 700,
              fontSize: "2rem",
              color: "inherit",
              fontSize: { sm: "1.3rem", md: "2rem" },
            }}
          >
            React Meetups
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography
            component="div"
            variant="h5"
            href="/"
            sx={{
              fontWeight: 700,
              color: "#fcb8d2",
              fontSize: { xs: "1rem", sm: "1.3rem", md: "1.6rem" },
              padding: { xs: "16px", md: "0" },
            }}
          >
            <Stack spacing={5} direction="row">
              <NextLink href="/" passHref>
                <Link underline="none" color="inherit" className="header_link">
                  All Meetups
                </Link>
              </NextLink>
              <NextLink href="/new-meetup" passHref>
                <Link underline="none" color="inherit" className="header_link">
                  Add New Meetup
                </Link>
              </NextLink>
            </Stack>
          </Typography>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}

export default MainNavigation;
