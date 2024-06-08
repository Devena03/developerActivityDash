// src/components/SummaryStatisticsStyles.tsx
import styled from 'styled-components';

interface ActivityCountProps {
  children: string | number;
}

export const SummaryContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

export const SummaryTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
`;

export const SummaryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SummaryItem = styled.li`
  font-size: 18px;
  color: #555;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  display: flex;
  justify-content: space-between;
`;

export const ActivityName = styled.span`
  font-weight: bold;
  color: #333;
`;

export const ActivityCount = styled.span<ActivityCountProps>`
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 4px 8px;
  color: #555;
`;
