import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
// import Header from '../Header/Header';
import Todo from '../Todo/Todo';

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
      <section>
        <ul>
          {filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} onUpdated={handleUpdated} onDelete={handleDelete} />
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
}
