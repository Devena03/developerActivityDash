// src/components/ActivityTable.tsx
import React from 'react';
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
} from './ActivityTableStyles';

interface ActivityTableProps {
  data: any[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => (
  <TableContainer>
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>PR Open</TableHeader>
          <TableHeader>PR Merged</TableHeader>
          <TableHeader>Commits</TableHeader>
          <TableHeader>PR Reviewed</TableHeader>
          <TableHeader>PR Comments</TableHeader>
          <TableHeader>Incident Alerts</TableHeader>
          <TableHeader>Incidents Resolved</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            {row.totalActivity.map((activity: any, index: number) => (
              <TableCell key={index}>{activity.value}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  </TableContainer>
);

export default ActivityTable;
