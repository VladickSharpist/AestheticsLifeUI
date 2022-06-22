export const isTokenNeedRefresh = (tokenExpired: string) => {
  return tokenExpired ? new Date(Date.now()) > new Date(tokenExpired) : true
};