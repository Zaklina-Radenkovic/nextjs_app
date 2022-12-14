// our-domain.com/new-meetup
import { useRouter } from "next/dist/client/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetUp) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUp),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetup;
