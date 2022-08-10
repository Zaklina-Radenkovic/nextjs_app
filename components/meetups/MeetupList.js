import MeetupItem from "./MeetupItem";
// import classes from "./MeetupList.module.css";
import List from "@mui/material/List";

function MeetupList(props) {
  return (
    // <ul className={classes.list}>

    <List
      sx={{
        margin: "0",
        padding: "0",
      }}
    >
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </List>
    // </ul>
  );
}

export default MeetupList;
