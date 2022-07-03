import { useState } from 'react';
import { api } from '../../../Shared/api';
import { FileUploader } from '../../../Shared/components/FileUploader';

export const AddExerciseForm = () => {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div>
      <input placeholder='Name' />
      <button onClick={() => setVisible(!visible)}>Upload file</button>
      {visible && <FileUploader apiMethod={api.training.uploadExerciseVideo} />}
    </div>
  );
};
