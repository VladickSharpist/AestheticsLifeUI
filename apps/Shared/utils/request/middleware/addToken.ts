import { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN } from '../../../types/constants';

export const addToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem(ACCESS_TOKEN) || '';

  return ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
