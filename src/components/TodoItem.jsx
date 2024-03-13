import styles from "../css/todoItem.module.css";

export default function TodoItem({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.items}>{item}</div>
      <hr className={styles.line} />
    </div>
  );
}
