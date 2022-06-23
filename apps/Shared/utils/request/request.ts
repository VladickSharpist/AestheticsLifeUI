import {
  addData,
  addGetMethod,
  addPostMethod,
  addFormData,
  addToken,
} from './middleware';
import { makeRequest } from './makeRequest';

export const request = {
  get: makeRequest([addGetMethod, addData, addToken]),
  post: makeRequest([addPostMethod, addToken]),
  postFormData: makeRequest([addPostMethod, addFormData, addToken]),
  postQueryString: makeRequest([addPostMethod, addData, addToken]),
};
