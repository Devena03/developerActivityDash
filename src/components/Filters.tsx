// src/components/Filters.tsx
import React, { useState } from 'react';

const Filters: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [date, setDate] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    onFilterChange({ date: e.target.value });
  };

  return (
    <div>
      <label htmlFor="date">Filter by Date:</label>
      <input type="date" id="date" value={date} onChange={handleChange} />
    </div>
  );
};

export default Filters;
