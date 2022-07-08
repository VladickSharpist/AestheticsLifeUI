import styles from './styles.scss';
import { useFormik } from 'formik';
import { registrationFormInitialValues } from './types';
import style from './styles.scss';
import { useEffect } from 'react';
import { registration } from '../../../Shared/api/account/registration';
interface IProps { 
    first?: string;
    second?: number;
}

export const RegistrationForm = ({ first, second }: IProps) => {
    
    const { submitForm, setFieldValue } = useFormik({
        initialValues: registrationFormInitialValues,
        onSubmit: async (values) => {
            const response = await registration(values);
            console.log(response);
        }
    });

    return(
        <div className = {style.cont}>
            <input type="text" placeholder='User name'  onChange={ (e) => setFieldValue('userName', e.target.value)}/>
            <input type="text" placeholder='Name' onChange={ (e) => setFieldValue('name', e.target.value)}/>
            <input type="text" placeholder='Second name' onChange={ (e) => setFieldValue('surname', e.target.value)}/>
            <input type="text" placeholder='Middle name' onChange={ (e) => setFieldValue('middleName', e.target.value)}/>
            <input type="text" placeholder='Email' onChange={ (e) => setFieldValue('email', e.target.value)}/>
            <input type="password" placeholder='Password' onChange={ (e) => setFieldValue('password', e.target.value)}/>
            <input type="password" placeholder='Repeat password' onChange={ (e) => setFieldValue('confirmPassword', e.target.value)}/>
            <input type="text" placeholder='Phone number' onChange={ (e) => setFieldValue('phoneNumber', e.target.value)}/>
            <input type="date" placeholder='Date of birth' onChange={ (e) => setFieldValue('dateOfBirth', e.target.value)}/>
            <button type="button" onClick={() => submitForm()}/>
        </div>
    )
}