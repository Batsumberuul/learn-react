import styles from "./input.module.css";
export default function input(props) {
  return (
    <input className={styles.input} placeholder={props.placeholder}>
      {props.text}
    </input>
  );
}
