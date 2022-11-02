import { instance } from './api';

export const getCovidDecide = async () => {
  const response = await instance.get('decide');
  return response.data;
};

export const getCovidGenAge = async () => {
  const response = await instance.get('/genage');
  return response.data;
};
