import { request } from "../../utils/request";
interface IRegistrationRequest {
    userName: string;
    name: string;
    secondName: string;
    middleName: string;
    dateOfBirth: Date|null;
    phoneNumber: string;
    email: string;
    password: string;
}

export const registration = async (data: IRegistrationRequest) => {
    const response = await request.post({
        url: 'api/account/registration',
        baseURL: 'https://localhost:7103',
        data,
    })
    return response.data;
}