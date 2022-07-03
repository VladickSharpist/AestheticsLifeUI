import cn from 'classnames';
import { useRef, useState } from 'react';
import styles from './styles.scss';

interface IProps {
  fileToUpload: File | null;
  setFileToUpload: React.Dispatch<React.SetStateAction<File | null>>;
}

export const UploaderDropZone = (props: IProps) => {
  const { fileToUpload, setFileToUpload } = props;
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileToUpload(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFileToUpload(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <form
      className={styles.formFileUpload}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type='file'
        id='input-file-upload'
        className={styles.inputFileUpload}
        multiple={true}
        onChange={handleChange}
      />
      <label
        htmlFor='input-file-upload'
        className={cn(dragActive && styles.dragActive, styles.labelFileUpload)}
      >
        <div>
          <p>Drag and drop your file here or click icon to choose a file</p>
        </div>
        <button className={styles.uploadButton} onClick={onButtonClick}>
          (Icon)
        </button>
      </label>
      {dragActive && (
        <div
          className={styles.dragFileElement}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};
