import styles from "./box.module.css";

export default function Box(props) {
  return <div className={styles.boxname}>{props.text}</div>;
}
