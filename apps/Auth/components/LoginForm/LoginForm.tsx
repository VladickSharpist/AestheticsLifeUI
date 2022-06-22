import { useFormik } from 'formik';
import { api } from '../../../Shared/api';
import { setUserData } from '../../../Shared/utils/user/storageUserData';
import { loginFormInitialValues, LoginFormValues } from './types';

export const LoginForm = () => {
  const form = useFormik({
    initialValues: loginFormInitialValues,
    onSubmit: async (values: LoginFormValues) => {
      const response = await api.account.login(values);
      setUserData(response);
    },
  });

  return (
    <div>
      <input placeholder='Email' onChange={(e) => form.setFieldValue('email', e.target.value)} />
      <input
        placeholder='Password'
        onChange={(e) => form.setFieldValue('password', e.target.value)}
      />
      <button onClick={form.submitForm} />
    </div>
  );
};
