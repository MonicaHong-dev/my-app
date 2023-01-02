import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { DarkModeProvider } from './components/Context/DarkModeContext';

const filters = ['all', 'completed', 'active'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const handleFilterChange = (newFilter) => setFilter(newFilter);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={handleFilterChange} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
