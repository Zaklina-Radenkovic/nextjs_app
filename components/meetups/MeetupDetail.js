import styles from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={styles.detail}>
      <img src={props.image} alt={props.alt} className={styles.detail} />
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
export default MeetupDetail;
