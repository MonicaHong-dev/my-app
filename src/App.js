
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos]= useState([
    {id:'123', text: 'shopping', status: 'active'},
    {id:'124', text: 'studying', status: 'active'},

])
const handleAdd = (todo)=>{
  console.log(todo)
setTodos([...todos, todo])
}
  return (
    <>
    <TodoList todos={todos}/> 
    <AddTodo handleAdd={handleAdd}/>
    </>
  );
}

export default App;
