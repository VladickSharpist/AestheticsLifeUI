import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

type TMiddleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

const makeRequest = (middlewares: TMiddleware[]) => {
  const instance = axios.create();

  return <TResponse>(config: AxiosRequestConfig = {}): AxiosPromise<TResponse> => {
    const params: AxiosRequestConfig = middlewares.reduce(
      (acc, middlewareFn) => middlewareFn(acc),
      config,
    );

    return instance.request(params);
  };
};

export { makeRequest };
