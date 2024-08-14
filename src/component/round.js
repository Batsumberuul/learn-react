import styles from "./round.module.css";

export default function Round(props) {
  return <div className={styles.roundname}>{props.text}</div>;
}
