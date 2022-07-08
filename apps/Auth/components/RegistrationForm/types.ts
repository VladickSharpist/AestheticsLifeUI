export interface RegistrationFormValues {
    userName: string;
    name: string;
    secondName: string;
    middleName: string;
    dateOfBirth: Date | null;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const registrationFormInitialValues : RegistrationFormValues = {
    userName: '',
    name: '',
    secondName: '',
    middleName: '',
    dateOfBirth: null,
    email: '',
    password:'',
    confirmPassword: '',
    phoneNumber:'',
}