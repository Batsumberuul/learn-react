import styles from "./backround.module.css";
import Input from "../component/input";
import Button from "../component/button";

export default function Backround(props) {
  return (
    <div className={styles.backround}>
      {props.text}
      <div className={styles.text_section}>
        <p className={styles.text_24px}>SUBSCRIBE</p>
        <p className={styles.text_18px}>
          {" "}
          Sign up with your email address to receive news and updates
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.inputDiv}>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
        </div>

        <Button text="Subscribe" />
      </div>
    </div>
  );
}
