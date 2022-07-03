import { environments } from "../../utils/enviroments"
import { request } from "../../utils/request"

interface IUploadFileForEntityRequest {
  uploadToken: string;
  file: Blob;
}

export const uploadFileForEntity = async (data: IUploadFileForEntityRequest) => {
  const response = await request.postFormData({
    url: '/api/FileUploader/UploadFileForEntity',
    baseURL: environments.fileUploader,
    data,
  });
  return response.data;
}