import { queryParams } from "./queryParams";


export const makeLink = function (url: string, options?: { params?: Object, query?: Object }) {
  const linkWithParams = options?.params
    ? Object.entries(options.params).reduce((baseUrl, [key, value]) => baseUrl
      .replace(`:${key}`, value), url)
    : url;

  if (options?.query) {
    return queryParams.set(linkWithParams, options.query);
  }

  return linkWithParams;
};