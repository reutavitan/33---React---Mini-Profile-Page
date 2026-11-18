import Button from "../Button/Button";
import styles from "./ProfileCard.module.css";

function ProfileCard(props) {
  return (
    <div className={styles.card}>
      <img
        src={props.avatar}
        alt={props.name}
        className={styles.avatar}
      />

      <h2 className={styles.name}>
        {props.name}
      </h2>

      <p className={styles.description}>
        {props.description}
      </p>
      <Button type={props.type} />
    </div>
  );
}

export default ProfileCard;
