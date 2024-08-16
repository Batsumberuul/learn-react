import styles from "./post.module.css";

export default function PostComponent(props) {
  const { text } = props;
  return <p className={styles.posttext}>{text}</p>;
}
