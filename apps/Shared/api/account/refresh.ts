import { environments } from "../../utils/enviroments";
import { request } from "../../utils/request";

export interface IRefreshRequest {
  refreshToken: string;
}

export interface IRefreshResponse {
  refreshToken: string;
  accessToken: string;
  refreshTokenExpiresAt: string;
  accessTokenExpiresAt: string;
}

export const refresh = async (data: IRefreshRequest) => {
  const response = await request.postQueryString<IRefreshResponse>({
    url: '/api/Account/Refresh',
    baseURL: environments.web,
    data,
  });

  return response.data;
}