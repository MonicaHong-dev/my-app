import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
// import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodos] = useState([
		{ id: '123', text: 'shopping', status: 'active' },
		{ id: '124', text: 'studying', status: 'active' },
	]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdated = (updated) => setTodos(todos.map((t)=> t.id === updated.id? updated : t));
  const handleDelete = (deleted) => setTodos(todos.filter((item)=> item.id !== deleted.id))
  
    return (
        <section> 
            <ul>
                {todos.map((todo) => <Todo key={todo.id} todo={todo} onUpdated={handleUpdated} onDelete={handleDelete} />)} 
            </ul> 
                <AddTodo onAdd={handleAdd} />
        </section>
    );
}

