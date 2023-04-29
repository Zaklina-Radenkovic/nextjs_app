import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MeetupDetail(props) {
  const handleDeleteMeetup = (id) => {
    console.log("delete");
  };

  return (
    // <section className={styles.detail}>
    //   <img src={props.image} alt={props.alt} className={styles.detail} />
    //   <h3>{props.title}</h3>
    //   <address>{props.address}</address>
    //   <p>{props.description}</p>
    // </section>
    <>
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
            {/* <address> */}
            {props.address}
            {/* </address> */}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        onClick={() => handleDeleteMeetup(props.id)}
        sx={{
          color: "#fff",
          backgroundColor: "#a50e48",
          borderColor: "#a50e48",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#a50e48",
            borderColor: "#a50e48",
          },
        }}
      >
        Delete
      </Button>
    </>
  );
}
export default MeetupDetail;
