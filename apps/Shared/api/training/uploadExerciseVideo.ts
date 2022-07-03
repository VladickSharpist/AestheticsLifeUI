import { environments } from "../../utils/enviroments";
import { request } from "../../utils/request"

export interface IUploadExerciseVideoRequest {
  entityId: number;
  relativePath: string;
  name: string;
  extension: string;
}

export type IUploadExerciseVideoResponse = string;

export const uploadExerciseVideo = async (data: IUploadExerciseVideoRequest) => {
  const response = await request.post<IUploadExerciseVideoResponse>({
    url: '/api/exercise/uploadExerciseVideo',
    baseURL: environments.training,
    data,
  });
  return response.data;
}