import { request } from "../../utils/request"

export const hello = async () => {
  const response = await request.get({
    url: '/api/account/hello',
    baseURL: 'https://localhost:7103',
  });
  return response.data;
}