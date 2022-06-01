import { AxiosRequestConfig } from 'axios';
import { objectToFormData } from '../../objectToFormData';

export const addFormData = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.data) return config;
  if (config.method === 'POST') {
    return {
      ...config,
      data: objectToFormData(config.data),
    };
  }

  return config;
};
