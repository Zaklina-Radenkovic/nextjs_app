import { Router, useRouter } from "next/router";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    // <li className={styles.item}>
    //   <Card>
    //     <div className={styles.image}>
    //       <img src={props.image} alt={props.title} />
    //     </div>
    //     <div className={styles.content}>
    //       <h3>{props.title}</h3>
    //       <address>{props.address}</address>
    //     </div>
    //     <div className={styles.actions}>
    //       <button onClick={showDetailsHandler}>Show Details</button>
    //     </div>
    //   </Card>
    // </li>

    <ListItem sx={{ margin: "1rem 0" }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              height: "20rem",
              overflow: "hidden",
              borderTopRightRadius: "6px",
              borderTopLeftRadius: "6px",
            }}
          >
            <CardMedia
              component="img"
              src={props.image}
              alt={props.title}
              height="480px"
            />
          </Box>

          <Box padding="1rem" textAlign="center">
            <Typography variant="h6" color="#2c292b" component="div">
              {props.title}
            </Typography>
            <address>{props.address}</address>
          </Box>

          <CardActions padding="1.5rem">
            {/* <Box padding="1.5rem" component="div"> */}
            <Button
              // variant="text"
              onClick={showDetailsHandler}
            >
              Show Details
            </Button>
            {/* </Box> */}
          </CardActions>
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default MeetupItem;
