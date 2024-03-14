import styles from "../css/todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(item) {
    // item.done = true;
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
    // console.log(todos);
    // console.log(`Clicked ${item.name}`);
  }
  const classStyle = item.done ? styles.completed : "";

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <span className={classStyle} onClick={() => handleClick(item)}>
          {item.name}
        </span>
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
