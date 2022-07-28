import { useFormik } from 'formik';
import { api } from '../../../Shared/api';
import { makeLink } from '../../../Shared/utils/makeLink';
import { redirectToLink } from '../../../Shared/utils/redirectToLink';
import { setUserData } from '../../../Shared/utils/user/storageUserData';
import { loginFormInitialValues, LoginFormValues } from './types';

export const LoginForm = () => {
  const form = useFormik({
    initialValues: loginFormInitialValues,
    onSubmit: async (values: LoginFormValues) => {
      const response = await api.account.login(values);
      setUserData(response);
      redirectToLink(makeLink("/aesthetics-life"));
    },
  });

  return (
    <div>
      <input placeholder='Email' onChange={(e) => form.setFieldValue('email', e.target.value)}/>
      <input
        placeholder='Password'
        onChange={(e) => form.setFieldValue('password', e.target.value)}
      />
      <button onClick={form.submitForm}/>
    </div>
  );
};
