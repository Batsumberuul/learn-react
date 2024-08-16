import styles from "./post.module.css";

export default function PostLastComponent(props) {
  const { text, body } = props;

  return (
    <div>
      <img className={styles.img} src="/cat.webp" />
      <h3 className={styles.posttext}>{text}</h3>;
      <p className={styles.posttext}>{body}</p>;
    </div>
  );
}
