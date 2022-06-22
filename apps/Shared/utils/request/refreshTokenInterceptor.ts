import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { api } from "../../api";
import { IRefreshRequest, IRefreshResponse } from "../../api/account/refresh";
import { environments } from "../enviroments";
import { isTokenNeedRefresh } from "../isTokenNeedRefresh";
import { getUserAccessInfo, setUserData } from "../user/storageUserData";

export interface IRefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  refreshTokenExpiresAt: string;
}

let refreshTokenPromise: Promise<string | null> | null = null;

const sendRequest = async (refreshObject: IRefreshRequest) => {
  try {
    const {
      accessToken,
      refreshToken,
      refreshTokenExpiresAt,
      accessTokenExpiresAt,
    } = (await axios.post<IRefreshResponse>(`${environments.web}api/Account/Refresh?refreshToken=${refreshObject.refreshToken}`)).data;
    
    if (!refreshToken || !accessToken) {
      throw new Error('REFRESH_TOKEN_PROBLEM 2');
    }

    setUserData({
      refreshToken,
      accessToken,
      refreshTokenExpiresAt,
      accessTokenExpiresAt,
    });

    return accessToken;
  } catch (e) {
    //dispatch signout

    return null;
  } finally {
    refreshTokenPromise = null;
  }
};

const getRefreshPromise = async (authRequestObject: IRefreshRequest) => {
  if (refreshTokenPromise) return refreshTokenPromise;
  refreshTokenPromise = sendRequest(authRequestObject);

  return refreshTokenPromise;
};

const checkRefreshingToken = async (
  axiosConfig: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  const userInfo = getUserAccessInfo();
  if (!userInfo) {
    return axiosConfig;
  }

  const accessTokenNeedRefresh = isTokenNeedRefresh(userInfo.accessTokenExpiresAt);
  const refreshTokenNeedRefresh = isTokenNeedRefresh(userInfo.refreshTokenExpiresAt);
  if (refreshTokenNeedRefresh) {
    //dispatch signout

    return axiosConfig;
  }

  if (accessTokenNeedRefresh) {
    const accessToken = await getRefreshPromise({refreshToken: userInfo.refreshToken});
    if (!accessToken) return axiosConfig;

    return {
      ...axiosConfig,
      headers: {
        ...axiosConfig.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  return axiosConfig;
};

export const addRequestInterceptorToken = (service: AxiosInstance) => {
  service.interceptors.request.use(checkRefreshingToken);
};