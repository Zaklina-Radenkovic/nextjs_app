import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function MeetupDetail(props) {
  return (
    // <section className={styles.detail}>
    //   <img src={props.image} alt={props.alt} className={styles.detail} />
    //   <h3>{props.title}</h3>
    //   <address>{props.address}</address>
    //   <p>{props.description}</p>
    // </section>

    <Card elevation={3}>
      <CardMedia
        component="img"
        src={props.image}
        alt={props.title}
        width="100%"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body1">
          <address>{props.address}</address>
        </Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}
export default MeetupDetail;
