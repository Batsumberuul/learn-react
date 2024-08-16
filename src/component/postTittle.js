import styles from "./post.module.css";

export default function PostTittle(props) {
  const { text } = props;
  return <h3 className={styles.posttext}>{text}</h3>;
}
