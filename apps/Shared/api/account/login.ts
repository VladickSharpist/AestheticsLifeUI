import { environments } from "../../utils/enviroments";
import { request } from "../../utils/request"

export interface ILoginReqeust {
  email: string;
  password: string;
}

export interface ILoginResponse {
  refreshToken: string;
  accessToken: string;
  refreshTokenExpiresAt: string;
  accessTokenExpiresAt: string;
}

export const login = async (data: ILoginReqeust) => {
  const response = await request.post<ILoginResponse>({
    url: '/api/Account/Login',
    baseURL: environments.web,
    data,
  });

  return response.data;
}