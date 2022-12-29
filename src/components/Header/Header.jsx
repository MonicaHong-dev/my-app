import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <ul>
      {filters.map((value, index) => (
        <li key={index}>
          <button onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
  );
}

/**
 * onClick했을때 해당 상태값 보여줌
 * 상태에 따라 리스트를 불러와야 함
 * 함수
 * map? filter!
 */
