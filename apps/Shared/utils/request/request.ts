import {
  addData,
  addGetMethod,
  addPostMethod,
  addFormData,
  addToken,
} from './middleware';
import { makeRequest } from './makeRequest';

export const request = {
  get: makeRequest([addGetMethod, addData]),
  post: makeRequest([addPostMethod]),
  postFormData: makeRequest([addPostMethod, addFormData]),
  postQueryString: makeRequest([addPostMethod, addData]),
};
