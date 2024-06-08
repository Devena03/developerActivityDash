// src/services/api.ts
import data from '../db.json';

export const fetchActivityData = async () => {
  return data.data.AuthorWorklog;
};
