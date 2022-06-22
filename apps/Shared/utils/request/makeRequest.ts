import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { addRequestInterceptorToken } from './refreshTokenInterceptor';

type TMiddleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

const makeRequest = (middlewares: TMiddleware[]) => {
  const instance = axios.create();

  addRequestInterceptorToken(instance);

  return <TResponse>(config: AxiosRequestConfig = {}): AxiosPromise<TResponse> => {
    const params: AxiosRequestConfig = middlewares.reduce(
      (acc, middlewareFn) => middlewareFn(acc),
      config,
    );

    return instance.request(params);
  };
};

export { makeRequest };
