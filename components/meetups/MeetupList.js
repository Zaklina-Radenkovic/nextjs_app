import MeetupItem from "./MeetupItem";
import List from "@mui/material/List";

function MeetupList(props) {
  return (
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
  );
}

export default MeetupList;
