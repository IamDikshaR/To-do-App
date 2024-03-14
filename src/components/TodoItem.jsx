import styles from "../css/todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {item}
        <span>
          <button onClick={() => handleDelete(item)} className={styles.delete}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
