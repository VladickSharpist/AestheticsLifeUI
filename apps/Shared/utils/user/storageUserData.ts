import { ACCESS_TOKEN, ACCESS_TOKEN_EXPIRES_AT, REFRESH_TOKEN, REFRESH_TOKEN_EXPIRES_AT, } from "../../types/constants";

export interface IAccessData {
  refreshToken: string;
  refreshTokenExpiresAt: string;
  accessToken: string;
  accessTokenExpiresAt: string;
}

export const setUserData = (props: IAccessData) => {
  const { refreshToken, refreshTokenExpiresAt, accessToken, accessTokenExpiresAt} = props;
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
  localStorage.setItem(REFRESH_TOKEN_EXPIRES_AT, refreshTokenExpiresAt);
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(ACCESS_TOKEN_EXPIRES_AT, accessTokenExpiresAt);
}

export const removeUserData = () => {
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN_EXPIRES_AT);
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(ACCESS_TOKEN_EXPIRES_AT);
}

export const getUserAccessInfo = (): IAccessData | null => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  const accessTokenExpiresAt = localStorage.getItem(ACCESS_TOKEN_EXPIRES_AT);
  const refreshTokenExpiresAt = localStorage.getItem(REFRESH_TOKEN_EXPIRES_AT);

  if (!accessToken || !refreshToken || !accessTokenExpiresAt || !refreshTokenExpiresAt) {
    return null;
  }

  return {
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  };
};