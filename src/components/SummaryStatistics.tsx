// src/components/SummaryStatistics.tsx
import React from 'react';
import {
  SummaryContainer,
  SummaryTitle,
  SummaryList,
  SummaryItem,
  ActivityName,
  ActivityCount,
} from './SummaryStatisticsStyles';

interface SummaryStatisticsProps {
  data: any[];
}

const SummaryStatistics: React.FC<SummaryStatisticsProps> = ({ data }) => {
  const totalActivities = data.reduce((acc, row) => {
    row.totalActivity.forEach((activity: any) => {
      acc[activity.name] = (acc[activity.name] || 0) + parseInt(activity.value, 10);
    });
    return acc;
  }, {} as Record<string, number>);

  return (
    <SummaryContainer>
      <SummaryTitle>Summary Statistics</SummaryTitle>
      <SummaryList>
        {Object.entries(totalActivities).map(([activity, count]) => (
          <SummaryItem key={activity}>
            <ActivityName>{activity}</ActivityName>
            <ActivityCount>{String(count)}</ActivityCount> {/* Convert count to string */}
          </SummaryItem>
        ))}
      </SummaryList>
    </SummaryContainer>
  );
};

export default SummaryStatistics;
