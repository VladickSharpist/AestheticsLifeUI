import { api } from "../../../api";

export class FileUploaderService {
  constructor() {

  }

  public UploadFile = async (apiMethod: (data: any) => Promise<any>, data: any, file: Blob) => {
    try {
      const uploadToken: string = await apiMethod(data);
      await api.fileUploader.uploadFileForEntity({ uploadToken, file});
    } catch (e) {
      console.log(e);
    }
  }
}