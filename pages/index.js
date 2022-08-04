import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first Meetup",
//     image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Nis_center.JPG",
//     address: "Some address",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image:
//       "https://www.pruvo.com/blog/wp-content/uploads/2021/09/PCR-tests-in-Nis.jpg",
//     address: "Some address",
//     description: "This is a second meetup",
//   },
//   {
//     id: "m3",
//     title: "A third Meetup",
//     image:
//       "https://lp-cms-production.imgix.net/2019-06/661a1d47547024e01904543040cd00fa-nis.jpg",
//     address: "Some address",
//     description: "This is a third meetup",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://jackie:873dNDEFgywxv2kP@cluster0.kwkt5oc.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
