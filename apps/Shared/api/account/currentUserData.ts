import { environments } from "../../utils/enviroments"
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
    url: '/api/Account/CurrentUserData',
    baseURL: environments.web,
  })
  return response.data;
}