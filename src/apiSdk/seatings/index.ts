import axios from 'axios';
import queryString from 'query-string';
import { SeatingInterface, SeatingGetQueryInterface } from 'interfaces/seating';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSeatings = async (query?: SeatingGetQueryInterface): Promise<PaginatedInterface<SeatingInterface>> => {
  const response = await axios.get('/api/seatings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSeating = async (seating: SeatingInterface) => {
  const response = await axios.post('/api/seatings', seating);
  return response.data;
};

export const updateSeatingById = async (id: string, seating: SeatingInterface) => {
  const response = await axios.put(`/api/seatings/${id}`, seating);
  return response.data;
};

export const getSeatingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/seatings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSeatingById = async (id: string) => {
  const response = await axios.delete(`/api/seatings/${id}`);
  return response.data;
};
