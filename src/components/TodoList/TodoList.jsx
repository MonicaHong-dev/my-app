import React from 'react';
// import AddTodo from '../AddTodo/AddTodo';

export default function TodoList({todos}) {
    
    return (
        <section> 
            <ul>
                {todos.map((todo)=> <li key={todo.id}>{todo.text}</li>)}
                </ul> 
                
        </section>
    );
}

 