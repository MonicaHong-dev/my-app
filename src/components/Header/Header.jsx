import React, { useContext } from 'react';
import { DarkModeContext } from '../Context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        <button onClick={() => toggleDarkMode()}>Mode</button>
        <p>
          Mode:
          {darkMode ? (
            <span style={{ backgroundColor: 'black', color: 'white' }}>Dark</span>
          ) : (
            <span>Light</span>
          )}
        </p>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

/**
 * onClick했을때 해당 상태값 보여줌
 * 상태에 따라 리스트를 불러와야 함
 * 함수
 * map? filter!
 */
