import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
// import Header from '../Header/Header';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '123', text: 'shopping', status: 'active' },
    { id: '124', text: 'studying', status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdated = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((item) => item.id !== deleted.id));

  const filteredTodos = filter === 'all' ? todos : todos.filter((t) => t.status === filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filteredTodos.map((todo) => (
            <Todo
              className={styles.todo}
              key={todo.id}
              todo={todo}
              onUpdated={handleUpdated}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
}
