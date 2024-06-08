// src/App.tsx
import React, { useEffect, useState } from 'react';
import { fetchActivityData } from './services/api';
import ActivityChart from './components/ActivityChart';
import ActivityTable from './components/ActivityTable';
import Filters from './components/Filters';
import SummaryStatistics from './components/SummaryStatistics';
import { GlobalStyle, Container } from './styles';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchActivityData();
        setData(result.rows);
        setFilteredData(result.rows);
      } catch (error) {
        setError('Failed to fetch activity data. Please try again later.');
      }
    };
    getData();
  }, []);

  const handleFilterChange = (filters: any) => {
    const { date } = filters;
    if (date) {
      const filtered = data.filter(row => row.dayWiseActivity.some((activity: any) => activity.date === date));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Developer Activity Dashboard</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Filters onFilterChange={handleFilterChange} />
        <SummaryStatistics data={filteredData} />
        <ActivityChart data={filteredData} />
        <ActivityTable data={filteredData} />
      </Container>
    </>
  );
};

export default App;
