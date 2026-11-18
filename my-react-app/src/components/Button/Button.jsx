import styles from "./Button.module.css";

function Button({ type }) {
  function handleClick() {
    alert("You clicked " + type + "!");
  }
    return (
    <button className={
      type === "Friend"
        ? styles.friend
        : type === "Teacher"
        ? styles.teacher
        : styles.student
    }>
      {type}
    </button>
  );
}

export default Button;