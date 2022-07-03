import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { UploaderDropZone } from './components/UploaderDropZone';
import { FileUploaderService } from './services/fileUploaderService';
import styles from './styles.scss';

interface IProps {
  apiMethod: (data: any) => Promise<any>;
  data: any;
}

const fileService = new FileUploaderService();

export const FileUploader = (props: IProps) => {
  const { apiMethod, data } = props;
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  return (
    <div className={styles.container}>
      <UploaderDropZone fileToUpload={fileToUpload} setFileToUpload={setFileToUpload} />
      <button
        onClick={() => {
          if (fileToUpload) fileService.UploadFile(apiMethod, data, fileToUpload);
        }}
      >
        Upload
      </button>
    </div>
  );
};
