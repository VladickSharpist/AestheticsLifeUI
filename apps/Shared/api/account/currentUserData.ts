import { request } from "../../utils/request"

export interface ICurrentUserDataResponse {
  id: number;
  userName: string;
  name?: string;
  surName?: string;
  middleName?: string;
  email: string;
}

export const currentUserData = async () => {
  const response = await request.get<ICurrentUserDataResponse>({
    url: '/api/auth/Account/CurrentUserData',
  })
  return response.data;
}