import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const handleFilterChange = (newFilter) => setFilter(newFilter);

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={handleFilterChange} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
