import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    email: Yup.string().required('Введите email'),
    password: Yup.string().required('Введите пароль'),
});
